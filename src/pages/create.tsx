import { NewTodoPage } from "@/components/fillOutPage/NewTodoPage";
import { FillOutPageTop } from "@/components/fillOutPage/FillOutPageTop";
import { AuthProvider } from "@/components/AuthContext";

const Create = () => {
  return (
    <div>
      <AuthProvider>
        <FillOutPageTop title="NEW TODO" />
        <NewTodoPage />
      </AuthProvider>
    </div>
  );
};

export default Create;
