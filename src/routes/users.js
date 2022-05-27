import express from 'express';
import common from '../common/common.js';

const userRoutes = express.Router();

userRoutes.get('/user/:name', (req, res) => {
    let paramName = req.params.name;

    console.log(`User request login is: ${paramName}`);
    res.status(200).send(common.userResponseWrapper(paramName));
});

export default userRoutes;