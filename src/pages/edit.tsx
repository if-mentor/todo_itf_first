import { EditTodoFooter } from "@/components/NewAndEditPageParts/EditTodoFooter";
import { FillOutPageTop } from "@/components/Common/FillOutPageTop";
import React from "react";

const edit = () => {
  return (
    <div>
      <FillOutPageTop title="EDIT TODO" />
      <EditTodoFooter />
    </div>
  );
};

export default edit;