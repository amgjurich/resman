const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/prizes', async (req, res) => {
  console.log('in get request and I worked');
  const info = await loadPrizeCollection();
  return res.send(await info.find({}).toArray());
});

router.get('/prize/:id', async (req, res) => {
  console.log('req id', req.params.id);
  const info = await loadPrizeCollection();

  return res.send(
    await info.find({ _id: new mongodb.ObjectId(req.params.id) }).toArray()
  );
});

router.post('/', async (req, res) => {
  console.log('in post request');
  const info = await loadPrizeCollection();

  await info.insertOne({
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.image_url,
    quantity: req.body.quantity,
    createdAt: new Date(),
  });
  return res.status(201).send('posted!');
});

//find one and update functionality and query
//grab id
// router.patch('/:id', async (req, res) => {
//   console.log('in patch request');
//   const info = await loadPostCollection();
//   console.log(req.params.id);
//   // let _id = new mongodb.ObjectId(req.params.id);
//   await info.findOneAndDelete(
//     { _id: new mongodb.ObjectId(req.params.id) },
//     { quantity: 3 }
//   );
//   res.status(200).send('updated');
// });

router.delete('/:id', async (req, res) => {
  console.log('in delete request');
  const info = await loadPrizeCollection();
  try {
    console.log(req.params.id);
    await info.deleteOne({
      _id: new mongodb.ObjectId(req.params.id),
    });
    res.status(200).send('deleted');
  } catch (err) {
    console.log('error in delete request', err);
  }
});

const connectionURI =
  'mongodb+srv://abigailgjurich123:abigailgjurich123@vue-spa.lflia.mongodb.net/vue-spa?retryWrites=true&w=majority';
let loadPrizeCollection = async () => {
  const client = await mongodb.MongoClient.connect(connectionURI, {
    useNewUrlParser: true,
  });
  //   console.log('connected to database');
  return client.db('vue-spa').collection('vue-spa');
};

module.exports = router;
