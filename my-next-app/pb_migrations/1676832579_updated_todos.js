migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilnikrzl",
    "name": "setdate",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilnikrzl",
    "name": "set_date",
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
