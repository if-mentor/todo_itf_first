import InputDetail from "@/components/InputDetail";
import InputTitle from "@/components/InputTitle";
import NewTodoFooter from "@/components/NewTodoFooter";
import NewTodoTop from "@/components/NewTodoTop";
import React from "react";

const create = () => {
  return (
    <div>
      <NewTodoTop />
      <InputTitle />
      <InputDetail />
      <NewTodoFooter />
    </div>
  );
};

export default create;