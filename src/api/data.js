const { MongoClient, Admin } = require("mongodb");

const uri = "";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    await client.db("admin").command({ ping: 1 });
    // const database = client.db("task-item");
    // const task = database.collection("item-list");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
