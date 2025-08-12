// Importamos nuestras dependencias
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import process from 'process';
import userRouting from './roouting/UserRouting';

const app = express();
const port = process.env.PORT;

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true
    })
);

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req.body);

    res.json('Hello world');
});


app.use('/user', userRouting);

//app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
