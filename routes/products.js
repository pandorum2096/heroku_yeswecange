const express = require('express');
const router = express.Router();
//const products = require('../services/products');
////////////////////////////////
//const db = require('./db');
const helper = require('../helper');
const config = require('../config');

/* GET All products */
router.get('/products', async function(req, res, next) {
  try {
    const allProducts = await config.query("SELECT * FROM Product");
    res.json({ products: allProducts.rows});
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* GET a product */
router.get('/products/:id', async function(req, res, next) {
    const {id} = req.params;
  try {
    const product = await config.query("SELECT * FROM Product WHERE id=$1", [id]);
    res.json({ product: product.rows[0] });
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* POST products */
router.post('/products', async function(req, res, next) {
  try {
        const {name} = req.body;
        const {description} = req.body;
        const {price} = req.body;
        const {inStock} = req.body;
        const newProducts = await config.query("INSERT INTO Product (name,description,price,inStock) VALUES ($1,$2,$3,$4) RETURNING *", [name, description, price, inStock]);
        res.json(newProducts.rows[0]);
  } catch (err) {
    console.error(`Error while posting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* UPDATE a product */
router.put('/products/:id', async function(req, res, next) {
  try {
        const {id} = req.params;
        const {name} = req.body;
        const {description} = req.body;
        const {price} = req.body;
        const {inStock} = req.body;
        const updateProducts = await config.query("UPDATE Product SET name=$1,description=$2,price=$3,inStock=$4 WHERE id=$5", [name, description, price, inStock, id]);
        res.json({ message: 'Modified!' });
  } catch (err) {
    console.error(`Error while posting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

/* DELETE a product */
router.delete('/products/:id', async function(req, res, next) {
  try {
        const {id} = req.params;
        const deleteProducts = await config.query("DELETE FROM Product WHERE id=$1", [id]);
        res.json({ message: 'Deleted!' });
  } catch (err) {
    console.error(`Error while getting products `, err.message);
    res.status(err.statusCode || 500).json({'message': err.message});
  }
});

module.exports = router;
