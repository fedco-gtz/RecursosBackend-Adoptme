import __dirname from "./index.js";
import {dirname} from 'path'
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Adoptame API Documentation',
            version: '1.0.0', 
            description: 'Documentación para la aplicación de adopción de mascotas "Adoptame". Proporciona endpoints para la gestión de usuarios, mascotas y procesos de adopción.',
        }
    },
    apis: [`${dirname(__dirname)}/docs/**/*.yaml`]
}

export default swaggerOptions;