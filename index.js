
import express, { Router } from 'express';
import cors from "cors";
import { PORT } from './config/config.js';
import rotuerTypeUsers from './router/TypeUsersRouter.js';
import  { RouterUsuer } from './router/UserRouter.js';
import  sequelize  from "./db/conexion.js";
//import {Sequelize from} 'sequelize'; // CAMBIA ESTA LÍNEA (quita las llaves)
import { RouterComment } from './router/CommentRouter.js';

const _PORT = PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', rotuerTypeUsers);
app.use('/api', RouterUsuer);
app.use('/api', RouterComment );

const main = async () => {
    try {
        await sequelize.authenticate();
        console.log('Base de datos conectada.');
        await sequelize.sync({ alter: false })   //true si se quiere que se actualice la base de datos
        app.listen(_PORT, () => {
            console.log(`Servidor corriendo en el puerto => ${_PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
    }
}
main();

