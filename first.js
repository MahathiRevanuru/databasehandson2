const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';
const user = new MongoClient(url);
async function main() {
  user.connect();

  const db = user.db('HumanResource');
  const collection = db.collection('employee');
}
main();
