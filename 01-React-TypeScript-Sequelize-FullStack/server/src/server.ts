import express from 'express'
import colors from 'colors'
import cors, {CorsOptions} from 'cors'
import router from './router';
import db from './config/db';


//Conectar a base de datos
async function connectDB() {
    try {
        //Con el authenticate nos conectamos a la base de datos
        await db.authenticate()
        //el sync nos agregar las nuevas columnas/tablas automaticamente en caso de agregar nuevos
        db.sync()
        console.log(colors.bgGreen.bold("Conexion Exitosa a la BD"))
    } catch (error) {
        console.log(error);
        console.log(colors.red.bold("Hubo un error al conectar a la Base de Datos"));
    }
}
connectDB()

//Instancia de express
const server:any = express();

//Habilitar cors
const corsOptions: CorsOptions = {
    origin: function(origin,callback){
        if(origin === process.env.FRONTED_URL){
            callback(null,true)
        }else{
            callback(new Error('Error de cors'))
        }
    }
}

server.use(cors())

//Leer datos de formulario
server.use(express.json())

server.use('/api/products', router)

server.get('/api', (req,res)=> {
    res.json({
        msg: 'Desde API'
    })
})

export default server