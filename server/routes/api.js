const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/prizes', async (req, res) => {
  try {
    console.log('in get request and I worked');
    const info = await loadPrizeCollection();
    const data = await info.find({}).toArray();
    console.log('data in prized get request backend', data);
    return res.status(200).send(data);
  } catch (err) {
    console.log('error in patch request', err);
    res.status(500).send(err);
  }
});

router.get('/prize/:id', async (req, res) => {
  console.log('in single get request');
  console.log('req id', req.params.id);
  const info = await loadPrizeCollection();
  try {
    return res.send(
      await info.find({ _id: new mongodb.ObjectId(req.params.id) }).toArray()
    );
  } catch (err) {
    console.log('error in patch request', err);
    res.status(500).send(err);
  } finally {
    console.log('closing conneciton');
    info.close();
  }
});

router.post('/', async (req, res) => {
  console.log('in post request');
  const info = await loadPrizeCollection();
  try {
    await info.insertOne({
      name: req.body.name,
      description: req.body.description,
      image_url: req.body.image_url,
      quantity: req.body.quantity,
      createdAt: new Date(),
    });
    return res.status(201).send('posted!');
  } catch (err) {
    console.log('error in patch request', err);
    res.status(500).send(err);
  } finally {
    console.log('closing conneciton');
    info.close();
  }
});

//find one and update - access the current quantity in the component and then send the request with subtracted one. then mount the component with updated quantity info

//find one and update functionality and query
//grab id
router.patch('/:id', async (req, res) => {
  console.log('in patch request');
  const info = await loadPrizeCollection();
  console.log(req.params.id);
  console.log(req.body.quantity);

  // let _id = new mongodb.ObjectId(req.params.id);
  try {
    await info.findOneAndReplace(
      { _id: new mongodb.ObjectId(req.params.id) },
      {
        quantity: req.body.quantity,
        name: req.body.name,
        image_url: req.body.image_url,
        createdAt: req.body.createdAt,
        description: req.body.description,
      }
    );
    res.status(200).send('updated');
  } catch (err) {
    console.log('error in patch request', err);
    res.status(500).send(err);
  } finally {
    console.log('closing connection');
    info.close();
  }
});

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
  } finally {
    console.log('closing conneciton');
    info.close();
  }
});

const connectionURI =
  'mongodb+srv://abigailgjurich123:abigailgjurich123@vue-spa.lflia.mongodb.net/vue-spa?retryWrites=true&w=majority';

let loadPrizeCollection = async () => {
  let client;
  try {
    console.log('in query');
    client = await mongodb.MongoClient.connect(connectionURI, {
      useNewUrlParser: true,
    });
    //   console.log('connected to database');
    return client.db('vue-spa').collection('vue-spa');
  } catch (err) {
    console.log(err);
  }
};

module.exports = router;
