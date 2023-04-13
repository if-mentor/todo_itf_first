import { NewTodoPage } from "@/components/NewAndEditPageParts/NewTodoPage";
import { FillOutPageTop } from "@/components/Common/FillOutPageTop";

const create = () => {
  return (
    <div>
      <FillOutPageTop title="NEW TODO" />
      <NewTodoPage />
    </div>
  );
};

export default create;