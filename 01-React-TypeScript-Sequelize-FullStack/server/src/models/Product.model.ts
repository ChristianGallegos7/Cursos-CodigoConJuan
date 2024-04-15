import { Table, Column, Model, DataType, Default } from 'sequelize-typescript';

// Define la tabla de la base de datos para la clase 'Product'
@Table({
    tableName: 'products' // Nombre de la tabla en la base de datos
})
class Product extends Model {
    // Define una columna 'name' en la tabla 'products'
    @Column({
        type: DataType.STRING(100) // Tipo de datos de la columna como STRING con una longitud máxima de 100 caracteres
    })
    declare name: string; // Nombre del producto, se espera que sea una cadena de texto

    // Define una columna 'price' en la tabla 'products'
    @Column({
        type: DataType.FLOAT(6, 2) // Tipo de datos de la columna como FLOAT con 6 dígitos en total y 2 dígitos después del punto decimal
    })
    declare price: number; // Precio del producto, se espera que sea un número de punto flotante

    // Define una columna 'availability' en la tabla 'products'
    @Default(true) //Valor por defecto sera true y ya no es neceasario pasar ese valor por el formulario
    @Column({
        type: DataType.BOOLEAN // Tipo de datos de la columna como BOOLEAN (verdadero/falso)
    })
    declare availability: boolean; // Disponibilidad del producto, se espera que sea un valor booleano (verdadero o falso)
}

export default Product