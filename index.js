import express from 'express';
import 'dotenv/config';
import userRoutes from './src/routes/users.js';
import productRoutes from './src/routes/products.js';
import mongoose from 'mongoose';

const port = process.env.PORT || 3000;
const mongodbPort = process.env.MONGODB_PORT || -1;
const mongodbHost = process.env.MONGODB_HOST || "localhost";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);


mongoose.connect(`mongodb://${mongodbHost}:${mongodbPort}`, (err, res) => {
    if (err) {
        console.error(`Error while trying to conect with database: ${err}`);
        return;
    }
    console.log("Database connection established");

    app.listen(port, () => {
        console.log(`Server listening on ${port}`);
    })
})
