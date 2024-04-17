import { MenuItem }  from "../interfaces/menu.interface";

interface MenuItemProps {
    item: MenuItem
}

export const MenuItemComponent = ({ item }:MenuItemProps) => {
  return (
    <>
        <p> {item.name} </p>
        <p> {item.price} </p>
    </>
  );
};
