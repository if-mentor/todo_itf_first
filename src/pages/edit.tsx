import { EditTodoFooter } from "@/components/NewAndEditPageParts/EditTodoFooter";
import TodoTop from "@/components/NewAndEditPageParts/TodoTop";
import React from "react";

const create = () => {
  return (
    <div>
      <TodoTop title="EDIT TODO" />
      <EditTodoFooter />
    </div>
  );
};

export default create;
