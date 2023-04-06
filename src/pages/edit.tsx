import DetailTodoFooter from "@/components/NewAndEditPageParts/DetailTodoFooter";
import InputDetail from "@/components/NewAndEditPageParts/InputDetail";
import InputTitle from "@/components/NewAndEditPageParts/InputTitle";
import NewTodoFooter from "@/components/NewAndEditPageParts/NewTodoFooter";
import TodoTop from "@/components/NewAndEditPageParts/TodoTop";
import React from "react";

const create = () => {
  return (
    <div>
      <TodoTop title="EDIT TODO"/>
      <InputTitle labelName="TITLE"/>
      <InputDetail labelName="DETAIL"/>
      <DetailTodoFooter />
    </div>
  );
};

export default create;