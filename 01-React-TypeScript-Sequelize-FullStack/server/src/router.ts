import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "./handlers/product";
import { body, param } from 'express-validator'
import { handleInputErrors } from "./middleware";

//check en funciones async
//body en el router o funciones que no son async

//Inicializamos el router
const router: any = Router();

router.get('/', getProducts)

router.get('/:id',
    param('id').isInt().withMessage("ID no válido"),
    handleInputErrors,
    getProductById)

router.post('/',
    //Validacion
    body('name')
        .notEmpty().withMessage("El nombre del producto no puede ir vacio Gil"),
    body('price')
        .isNumeric().withMessage("Valor no válido")
        .notEmpty().withMessage("El precio del producto no puede ir vacio Gil")
        .custom((value) => value > 0).withMessage("El precio no puede ser un número negativo"),
    handleInputErrors,
    createProduct
)

router.put('/:id',
    param('id').isInt().withMessage("ID no válido"),
    body('name')
        .notEmpty().withMessage("El nombre del producto no puede ir vacio Gil"),
    body('price')
        .isNumeric().withMessage("Valor no válido")
        .notEmpty().withMessage("El precio del producto no puede ir vacio Gil")
        .custom((value) => value > 0).withMessage("El precio no puede ser un número negativo"),
    handleInputErrors,
    updateProduct);


router.delete('/:id',
param('id').isInt().withMessage("ID no válido"),
handleInputErrors,
deleteProduct)

export default router;