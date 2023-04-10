import { EditTodoFooter } from "@/components/NewAndEditPageParts/EditTodoFooter";
import InputDetail from "@/components/NewAndEditPageParts/InputDetail";
import InputTitle from "@/components/NewAndEditPageParts/InputTitle";
import TodoTop from "@/components/NewAndEditPageParts/TodoTop";
import React from "react";

const create = () => {
  return (
    <div>
      <TodoTop title="EDIT TODO" />
      <InputTitle />
      <InputDetail />
      <EditTodoFooter />
    </div>
  );
};

export default create;
