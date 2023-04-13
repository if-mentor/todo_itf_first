import NewTodoPage from "@/components/NewAndEditPageParts/NewTodoPage";
import TodoTop from "@/components/NewAndEditPageParts/TodoTop";

const create = () => {
  return (
    <div>
      <TodoTop title="NEW TODO" />
      <NewTodoPage />
    </div>
  );
};

export default create;
