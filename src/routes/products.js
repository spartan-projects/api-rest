import express from 'express';
import common from '../common/common.js';

const productRoutes = express.Router();

productRoutes.get('/products', (req, res) => {
    let message = `This is a GET for all products in your datababase`;
    return res.status(404).send(common.genericResponseWrapper(message));
});

productRoutes.get('/products/:id', (req, res) => {
    let message = `This is a GET for id ${req.params.id} in your datababase`;
    return res.status(404).send(common.genericResponseWrapper(message));
});

productRoutes.post('/products', (req, res) => {
    let message = `This is a POST for a single product in your datababase`;
    console.log(req.body);
    return res.status(404).send(common.genericResponseWrapper(message));
});

productRoutes.put('/products/:id', (req, res) => {
    let message = `This is a PUT for a single product in your datababase with id ${req.params.id}`;
    console.log(req.body);
    return res.status(404).send(common.genericResponseWrapper(message));
});

productRoutes.delete('/products/:id', (req, res) => {
    let message = `This is a DELETE for a single product in your datababase with id ${req.params.id}`;
    return res.status(404).send(common.genericResponseWrapper(message));
});

export default productRoutes;