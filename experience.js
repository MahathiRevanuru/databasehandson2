const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/';
const user = new MongoClient(url);

async function main() {
  await user.connect();
  const db = user.db('HumanResource');
  const collection = db.collection('employee');

  const data = {
    yearGrad: { $gt: '2015' },
    overallExp: { $gte: '1' },
  };
  const output = await collection.find(data).toArray();

  console.log(output);
}
main();
