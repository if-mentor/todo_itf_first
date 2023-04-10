import { DeepGreenButton, LightPinkButton } from "../Button";

const NewTodoFooter: React.FC = () => {
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <div>
          <h2 className="text-2xl">PRIORITY</h2>
          <div>
            <input type="radio" name="priority" />
            <label className="pl-3 pr-6">High</label>
            <input type="radio" name="priority" />
            <label className="pl-3 pr-6">Middle</label>
            <input type="radio" name="priority" />
            <label className="pl-3 pr-6">Low</label>
          </div>
        </div>
        <div className="mt-16 flex">
          <LightPinkButton href="/">DRAFT</LightPinkButton>
          <DeepGreenButton href="/">UPDATE</DeepGreenButton>
        </div>
      </div>
    </div>
  );
};

export default NewTodoFooter;
