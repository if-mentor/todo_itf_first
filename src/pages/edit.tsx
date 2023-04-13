import { EditTodoPage } from "@/components/fillOutPage/EditTodoPage";
import { FillOutPageTop } from "@/components/fillOutPage/common/FillOutPageTop";
import React from "react";

const edit = () => {
  return (
    <div>
      <FillOutPageTop title="EDIT TODO" />
      <EditTodoPage />
    </div>
  );
};

export default edit;
