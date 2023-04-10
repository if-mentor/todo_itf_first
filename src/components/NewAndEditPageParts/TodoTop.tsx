import React from "react";
import { LightGreenButton } from "../Button";

type TodoTopProps = {
  title: string;
};

const TodoTop: React.FC<TodoTopProps> = ({ title }) => {
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <h2>{title}</h2>
        <div className="mt-8">
          <LightGreenButton href={"/"}>BACK</LightGreenButton>
        </div>
      </div>
    </div>
  );
};

export default TodoTop;
