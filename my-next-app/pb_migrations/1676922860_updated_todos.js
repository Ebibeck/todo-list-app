migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // remove
  collection.schema.removeField("ilnikrzl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilnikrzl",
    "name": "date",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
