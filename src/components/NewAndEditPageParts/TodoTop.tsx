type TodoTopProps = {
  title: string;
};

const TodoTop: React.FC<TodoTopProps> = ({ title }) => {
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <h2>{title}</h2>
        <button className="text-[18px] w-28 h-10 border border-black rounded-3xl bg-[#68D391] mt-[23px]">Back</button>
      </div>
    </div>
  );
};

export default TodoTop;