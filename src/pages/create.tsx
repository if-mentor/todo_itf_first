import NewTodoPage from "@/components/NewAndEditPageParts/NewTodoPage";
import TodoTop from "@/components/NewAndEditPageParts/TodoTop";
import React from "react";

const create = () => {
  return (
    <div>
      <TodoTop title="NEW TODO" />
      <NewTodoPage />
    </div>
  );
};

export default create;
