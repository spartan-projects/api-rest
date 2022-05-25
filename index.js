import express from 'express';
import 'dotenv/config';
import routes from './routes/routing.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes)

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

