import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear una instancia de Sequelize para interactuar con la base de datos
const db = new Sequelize(process.env.DATABASE_URL!, {
    // Especificar la ubicación de los modelos
    models: [__dirname + '/../models/**/*.ts'],
    logging: false
});

// Exportar la instancia de Sequelize para que pueda ser utilizada en otras partes de la aplicación
export default db;
