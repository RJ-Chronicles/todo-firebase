import React from "react";
import ToDoContainer from "./components/UI/ToDoContainer";

import { AppContext, AppProvider } from "./store/AppContext";
function App() {
  return (
    <AppProvider>
      <div className="p-4 text-center bg-[#f6f6f8] min-h-screen">
        <ToDoContainer />
      </div>
    </AppProvider>
  );
}

export default App;
