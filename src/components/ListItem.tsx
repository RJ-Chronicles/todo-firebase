import React from "react";
import { Item } from "../type";

const ListItem: React.FC<Item> = ({ id, status, todo }) => {
  const fontColor =
    status === "Completed" ? "text-green-700" : "text-slate-500";
  return (
    <div className="w-full flex justify-left items-center my-2 space-x-4 border-b-2 p-4">
      <input
        id={id}
        type="radio"
        name="default-radio"
        value=""
        className="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <p
        className={`w-full text-left text-base font-mono  overflow-x-auto ${fontColor}`}
      >
        {todo}
      </p>
    </div>
  );
};

export default ListItem;
