import NewTodoFooter from "@/NewTodoFooter";
import Header from "@/components/Header";
import InputDetail from "@/components/InputDetail";
import InputTitle from "@/components/InputTitle";
import NewTodoTop from "@/components/NewTodoTop";
import React from "react";

const create = () => {
  return (
    <div>
      <Header />
      <NewTodoTop />
      <InputTitle />
      <InputDetail />
      <NewTodoFooter />
    </div>
  );
};

export default create;
