migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7jcn08hl",
    "name": "completed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // remove
  collection.schema.removeField("7jcn08hl")

  return dao.saveCollection(collection)
})
