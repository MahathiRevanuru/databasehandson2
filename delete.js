const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';
const user = new MongoClient(url);

async function main() {
  await user.connect();
  const db = user.db('HumanResource');
  const collection = db.collection('employee');

  const data = {
    lastCompany: 'Y',
  };

  const output = await collection.deleteMany(data);
  console.log(output);
}
main();
