import { Product } from "../types";
import { formatCurrency } from "../utils";

type ProductDetailsProps = {
  product: Product;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {

    const isAvailable = product.availabilty

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800"> {product.name} </td>
      <td className="p-3 text-lg text-gray-800"> {formatCurrency(product.price)} </td>
      <td className="p-3 text-lg text-gray-800"> {isAvailable ? 'No Disponible' : 'Disponible'} </td>
      <td className="p-3 text-lg text-gray-800"> Accion </td>

    </tr>
  );
};
