migrate((db) => {
  const collection = new Collection({
    "id": "xk5jdqn5tqcgt76",
    "created": "2023-02-18 21:26:04.262Z",
    "updated": "2023-02-18 21:26:04.262Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xk5jdqn5tqcgt76");

  return dao.deleteCollection(collection);
})
