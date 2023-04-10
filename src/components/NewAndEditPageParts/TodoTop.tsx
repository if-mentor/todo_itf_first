import { Button } from "../Button";

type TodoTopProps = {
  title: string;
};

const TodoTop: React.FC<TodoTopProps> = ({ title }) => {
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <h2>{title}</h2>
        <div className="mt-8">
          <Button href="/" backgroundColor="#68D391" fontColor="black">
            BACK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoTop;
