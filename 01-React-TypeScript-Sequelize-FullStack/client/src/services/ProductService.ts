import { safeParse } from "valibot";
import { DraftProductSchema, ProductsSchema } from "../types"
import axios from "axios";

type ProductData = {
    [k: string]: FormDataEntryValue;
}

export const addProduct =  async(data:ProductData) => {
    try {
        const result = safeParse(DraftProductSchema,{
            name: data.name,
            price: +data.price
        })
        
        if(result.success){
            //Enviar la data al backend, usamos la variable de entorno en vite
            const url = `${import.meta.env.VITE_API_URL}/api/products`
            await axios.post(url,{
                name: result.output.name,
                price: result.output.price
            })
        }else{
            throw new Error('Datos no válidos')
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async() => {
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`
        const {data} = await axios.get(url)
        const result = safeParse(ProductsSchema, data.data)
        if(result){
            return result.output
        }else{
            throw new Error('Hubo un error')
        }
    } catch (error) {
        console.error(error)
    }
}