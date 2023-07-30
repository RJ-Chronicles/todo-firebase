import { TextField } from "./UI/TextField";
import { LargeButton } from "./UI/Button";
import { Item } from "../type";
import ListItems from "./ListItems";
import useHttp from "../hooks/useHttp";
import { useEffect, useState } from "react";

const TodoMain: React.FC = (props: any) => {
  const [items, setItems] = useState<Item[]>([]);
  const [todoItem, setTodoItem] = useState("");
  const [itemAdded, setItemAdded] = useState(false);
  const httpData = useHttp();
  const { sendRequest } = httpData;
  console.log(items);
  useEffect(() => {
    const transformTasks = (taskObject: any) => {
      const loadedItems: Item[] = [];
      console.log(taskObject);
      console.log(taskObject);
      for (const taskKey in taskObject) {
        loadedItems.push({
          id: taskKey,
          status: taskObject[taskKey].status,
          todo: taskObject[taskKey].todo,
        });
      }
      setItems(loadedItems);
    };

    sendRequest(
      {
        url: "https://react-http-68ada-default-rtdb.asia-southeast1.firebasedatabase.app/todoItems.json",
      },
      transformTasks
    );
  }, [sendRequest, itemAdded]);

  const applyData = (obj: any) => {
    setItemAdded(!itemAdded);
  };
  const newTodoItemHandler = () => {
    if (todoItem.trim() !== "") {
      sendRequest(
        {
          url: "https://react-http-68ada-default-rtdb.asia-southeast1.firebasedatabase.app/todoItems.json",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: { todo: todoItem, status: "Active" },
        },
        applyData
      );
      setTodoItem("");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-2 text-slate-600">To Do List</h1>
      <div className="flex justify-center items-center space-x-4 w-full container mt-10">
        <TextField
          type="text"
          placeholder="New Task"
          width="w-full"
          padding="py-2"
          setText={setTodoItem}
          value={todoItem}
        />
        <LargeButton onClick={newTodoItemHandler} text={"Add!"} />
      </div>
      <div className="overflow-y-auto max-h-96 my-10">
        <ListItems ListItemProps={items} />
      </div>
    </div>
  );
};

export default TodoMain;
