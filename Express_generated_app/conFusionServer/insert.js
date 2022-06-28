const insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    return coll.insert(document);
};

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';
var Dishes = require('./models/dishes');
var Leaders = require('./models/leaders');
var Promo = require('./models/promotions');

var newDish = Dishes({
    name: 'pizza',
    description: 'test',
    image: 'img',
    category: 'cat',
    price: 15,
    featured: false
});

var newLeader = Leaders({
  name: 'leader',
	image: 'imgL',
	designation: 'design',
	abbr: 'abbr',
	description: 'descr'
});

var newPromo = Promo({
  name: 'promo',
  image: 'img',
  label: 'label',
  price: 25,
  description: 'descr'
});


MongoClient.connect(url).then((client) => {

    console.log('Connected correctly to server');
    const db = client.db(dbname);

    insertDocument(db, newDish, "dishes")
    .then((result) => {
            console.log("Insert Document:\n", result.ops);
    });

    insertDocument(db, newLeader, "leaders")
    .then((result) => {
            console.log("Insert Document:\n", result.ops);
    });

    insertDocument(db, newPromo, "promotions")
    .then((result) => {
            console.log("Insert Document:\n", result.ops);
    });
});
