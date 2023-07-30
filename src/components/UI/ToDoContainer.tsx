import { useContext, useEffect, useState } from "react";

import { Item } from "../../type";
import Footer from "../Footer";
import IconSpinner from "./Spinner";
import { AppContext } from "../../store/AppContext";
import TodoMain from "../ToDoMain";
import ErrorDialog from "./ErrorDialog";
const ToDoContainer = (props: any) => {
  const { state, dispatch } = useContext(AppContext);
  const { error, isLoading } = state;

  return (
    <div className="w-full md:w-1/2 mx-auto mt-5">
      <IconSpinner open={isLoading} />
      <ErrorDialog />
      <TodoMain />
      <Footer />
    </div>
  );
};

export default ToDoContainer;
