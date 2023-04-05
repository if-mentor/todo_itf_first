import React from "react";

const NewTodoFooter = () => {
  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto p-2 flex justify-between">
        <div>
          <h2 className="text-2xl">PRIORITY</h2>
          <div>
            <input type="radio" name="priority"/><label className="pl-3 pr-6">High</label> 
            <input type="radio" name="priority"/><label className="pl-3 pr-6">Middle</label>
            <input type="radio" name="priority"/><label className="pl-3 pr-6">Low</label>
          </div>
        </div>
        <div className="mt-16">
          <button className="text-[18px] w-28 h-10 border border-black rounded-3xl bg-[#fed7e2] mr-2">
            DRAFT
          </button>
          <button className="text-[18px] w-28 h-10 border border-black rounded-3xl bg-[#25855A] ">
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTodoFooter;
