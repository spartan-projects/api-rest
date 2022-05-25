import express from 'express';
import 'dotenv/config';
import userRoutes from './routes/users.js';
import productRoutes from './routes/products.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", userRoutes);
app.use("/api/v1", productRoutes);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

