import { Link } from "react-router-dom"

export const NewProduct = () => {
    return(
        <>
            <div className="flex justify-between">
                <h2 className="text-4xl font-black text-slate-500">Productos</h2>
                <Link 
                    to="productos/nuevo"
                    className="rounded-md bg-indigo-600 p-4 text.sm font-bold text-white"
                    >

                    Agregar Producto
                </Link>
            </div>
        </>
    )
}