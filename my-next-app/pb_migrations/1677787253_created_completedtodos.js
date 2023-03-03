migrate((db) => {
  const collection = new Collection({
    "id": "oj4vzic90efhu3t",
    "created": "2023-03-02 20:00:52.614Z",
    "updated": "2023-03-02 20:00:52.614Z",
    "name": "completedtodos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "duc3sgj1",
        "name": "todos",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "laharhhi",
        "name": "completed",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("oj4vzic90efhu3t");

  return dao.deleteCollection(collection);
})
