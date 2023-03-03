migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fymumtam",
    "name": "todo",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fymumtam",
    "name": "todo",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
