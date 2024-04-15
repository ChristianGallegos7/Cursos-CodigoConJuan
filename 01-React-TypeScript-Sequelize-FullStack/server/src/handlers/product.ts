
import { Request, Response } from 'express';
import Product from '../models/Product.model';

export const getProducts = async(req:Request, res:Response) => {
    try {
        const products = await Product.findAll()
        res.json({data:products})
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener los productos'
        })
    }
}

export const getProductById = async(req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({error: 'Producto no encontrado'})
        }

        res.json({data: product})        
    } catch (error) {
        res.status(500).json({
            error: 'Error al obtener el producto seleccionado'
        })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        // Crear un nuevo producto utilizando los datos proporcionados en el cuerpo de la solicitud
        const product = await Product.create(req.body);
        // Enviar una respuesta JSON con los datos del producto creado
        res.status(201).json({
            data: product
        });
    } catch (error) {
        // Capturar cualquier error que ocurra durante la creación del producto y enviar una respuesta de error
        res.status(500).json({
            error: 'Error al crear el producto'
        });
    }
};


export const updateProduct = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({
                error: 'Producto no encontrado'
            })
        }
        //Actualizar 
        await product.update(req.body)
        //Una vez que se actualiza tenemos que guardar el producto
        await product.save();

        res.json({
            data:product
        })

    } catch (error) {
        res.status(500).json({
            error: 'Producto no encontrado status 500'
        })        
    }
}

export const deleteProduct = async (req:Request,res:Response) => {
  try {
    const {id} = req.params;
    const product = await Product.findByPk(id);

    if(!product){
        return res.status(404).json({
            error: 'Producto no encontadro'
        })
    }
    //si el producto existe lo borramos

    await product.destroy();
    
    res.json({
        data: 'Producto Eliminado'
    })


  } catch (error) {
    res.status(500).json({
        error: error
    })
  }


}
    