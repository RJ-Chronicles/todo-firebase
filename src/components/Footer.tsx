import { useState } from "react";
import { SmallButton } from "./UI/Button";
import { TextField } from "./UI/TextField";

const Footer = () => {
  const [active, setActive] = useState("All");
  const [todoItem, setTodoItem] = useState("");

  const allItemsHandler = () => {
    setActive("All");
  };

  const activeItemsHandler = () => {
    setActive("Active");
  };

  const completedItemsHandler = () => {
    setActive("Complete");
  };

  return (
    <div className="w-full flex justify-between min-h-24 bg-[#666699] p-5 text-white rounded-sm">
      <div className="w-1/2 md:w-8/12 flex md:space-x-5 ">
        <div className="md:flex justify-center items-center hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <TextField
          type="text"
          placeholder="search"
          width="w-full"
          padding="py-0"
          setText={setTodoItem}
          value={todoItem}
        />
      </div>
      <div className="w-1/2 md:w-4/12 flex justify-between items-center">
        <SmallButton text="All" active={active} onClick={allItemsHandler} />
        <SmallButton
          text="Active"
          active={active}
          onClick={activeItemsHandler}
        />
        <SmallButton
          text="Complete"
          active={active}
          onClick={completedItemsHandler}
        />
      </div>
    </div>
  );
};

export default Footer;
