import { EditTodoFooter } from "@/components/NewAndEditPageParts/EditTodoFooter";
import { FillOutPageTop } from "@/components/Common/FillOutPageTop";
import React from "react";

export const create = () => {
  return (
    <div>
      <FillOutPageTop title="EDIT TODO" />
      <EditTodoFooter />
    </div>
  );
};