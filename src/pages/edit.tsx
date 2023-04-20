import { AuthProvider } from "@/components/AuthContext";
import { EditTodoPage } from "@/components/fillOutPage/EditTodoPage";
import { FillOutPageTop } from "@/components/fillOutPage/FillOutPageTop";
import React from "react";

const Edit = () => {
  return (
    <div>
      <AuthProvider>
        <FillOutPageTop title="EDIT TODO" />
        <EditTodoPage />
      </AuthProvider>
    </div>
  );
};

export default Edit;
