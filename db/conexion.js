import Sequelize from 'sequelize'; // CAMBIA ESTA LÍNEA (quita las llaves)
// ...
import {DB_CONNECTION, DB_USERNAME, DB_PASSWORD,DB_HOST,DB_DATABASE} from '../config/config.js';
// ...
export const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USERNAME,
    DB_PASSWORD,
    {
        host: DB_HOST,
        dialect: DB_CONNECTION
    }
);
////hice cambio aqui 