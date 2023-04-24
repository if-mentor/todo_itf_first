import { AuthProvider } from "@/components/AuthContext";
import { DraftTodoPage } from "@/components/fillOutPage/DraftTodoPage";
import { FillOutPageTop } from "@/components/fillOutPage/FillOutPageTop";

const Draft = () => {
  return (
    <>
      <AuthProvider>
        <FillOutPageTop title="NEW TODO (DRAFT)" />
        <DraftTodoPage />
      </AuthProvider>
    </>
  );
};

export default Draft;
