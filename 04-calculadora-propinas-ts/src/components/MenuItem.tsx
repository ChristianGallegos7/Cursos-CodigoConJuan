import { MenuItem } from "../interfaces/menu.interface";

interface MenuItemProps {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
}

export const MenuItemComponent = ({ item, addItem }: MenuItemProps) => {
  return (
    <>
      <button
        className="border-teal-400 border-2 hover:bg-teal-200 w-full p-3 flex justify-between"
        onClick={() => addItem(item)}
      >
        <p> {item.name} </p>
        <p className="font-black"> ${item.price} </p>
      </button>
    </>
  );
};
