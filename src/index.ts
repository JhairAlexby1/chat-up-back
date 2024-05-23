import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import './configs/db.config';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(cors(
    {
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
import usuarioRouter from './routes/usuario.route';
import chatRouter from './routes/chat.route';
import mensajeRouter from './routes/mensaje.route';


app.use('/usuarios', usuarioRouter);
app.use('/chats', chatRouter);
app.use('/mensajes', mensajeRouter);

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});