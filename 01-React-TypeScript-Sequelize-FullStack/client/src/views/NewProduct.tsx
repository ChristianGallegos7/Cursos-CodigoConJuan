import { ErrorMessage } from "../components/ErrorMessage";
import { Link, Form, useActionData, ActionFunctionArgs } from "react-router-dom";
import { addProduct } from "../services/ProductService";



/*
en react router dom en la version 6.22.3 esta la etiqueta Form nos permite manejar el formulario y conta de 3 pasos
cambiar la etiqueta form html por la etiqueta Form que importamos desde react-router-dom, desde el archivo donde se encuentre
nuestro formulario tenemos que tener una funcion asincrona llamada action  ejemplo: export async function action(){} y desde el router 
de nuetra app en la ruta donde se encuentra el form ponemos la propiedad action con la funcion, ejemplo:

import { NewProduct, action as newProductAction } from "./views/NewProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction  EN LA RUTA productos/nuevo se encuentra nuestro form ahi llamamos el action
      },
    ],
  },
]);

**/
export async function action({request}:ActionFunctionArgs) {

    const data = Object.fromEntries(await request.formData())
    let error = "";

    if(Object.values(data).includes('')){
        error = "Todos los campos son obligatorios"
    }

    //El error se encuentra en la funcion action y para tenerlo disponible en nuestro template lo retornamos y usamos el useActionData() para recuperarlo

    if(error.length){
        return error
    }

    addProduct(data)

    return {}
}

export const NewProduct = () => {
    //Recuperamos los errores en caso de haberlos
    const error = useActionData() as string ;
    console.log(error)

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">
          Registrar Producto
        </h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-4 text.sm font-bold text-white shadow-sm hover:bg-indigo-700"
        >
          Volver a Productos
        </Link>
      </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}

      <Form 
        className="mt-10"
        method="POST"
        >

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="name">
            Nombre Producto:
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Nombre del Producto"
            name="name"
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-800" htmlFor="price">
            Precio:
          </label>
          <input
            id="price"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-50"
            placeholder="Precio Producto. ej. 200, 300"
            name="price"
          />
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Registrar Producto"
        />

      </Form>
    </>
  );
};
