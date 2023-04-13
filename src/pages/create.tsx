import { NewTodoPage } from "@/components/fillOutPage/NewTodoPage";
import { FillOutPageTop } from "@/components/fillOutPage/common/FillOutPageTop";

const create = () => {
  return (
    <div>
      <FillOutPageTop title="NEW TODO" />
      <NewTodoPage />
    </div>
  );
};

export default create;
