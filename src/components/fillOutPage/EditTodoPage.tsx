import { useRouter } from "next/router";
import { deepGreenButton } from "./commonClass/ButtonClass";
import { inputClass, textareaClass } from "./commonClass/fillOutClass";
import { useState } from "react";

export const EditTodoPage = () => {
  const [todo, setTodo] = useState([]);
  const router = useRouter();
  const getData = router.query;

  return (
    <>
      <div className="w-full font-bold">
        <div className="max-w-5xl mx-auto p-2">
          <label className="text-2xl">TITLE</label>
          <input
            type="text"
            placeholder="Text"
            className={inputClass}
            name="todoTitle"
            value={getData.title}
          />
        </div>
        <div className="max-w-5xl mx-auto p-2">
          <label className="text-2xl">DETAIL</label>
          <textarea
            name="todoDetail"
            id="text"
            rows={10}
            placeholder=" Text"
            className={textareaClass}
          ></textarea>
        </div>
        <div className="text-2xl max-w-5xl mx-auto p-2">
          <h2>PRIORITY</h2>
          <div className="flex">
            {["High", "Middle", "Low"].map((priority) => (
              <label key={priority} className="pl-3 pr-6">
                <input type="radio" name="selectedPriority" value={priority} />
                {priority}
              </label>
            ))}
          </div>
        </div>
        <div className="text-2xl max-w-5xl mx-auto p-2 flex justify-end">
          <button className={deepGreenButton} onClick={() => router.push("/")}>
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
};
