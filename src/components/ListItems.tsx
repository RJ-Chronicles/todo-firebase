import React from "react";
import { Item } from "../type";
import ListItem from "./ListItem";

interface ListItemsProps {
  ListItemProps: Item[];
}

const ListItems: React.FC<ListItemsProps> = ({ ListItemProps }) => {
  return (
    <div className="w-full bg-white">
      <ul>
        {ListItemProps.map((item, index) => (
          <ListItem
            status={item.status}
            id={item.id}
            todo={item.todo}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
