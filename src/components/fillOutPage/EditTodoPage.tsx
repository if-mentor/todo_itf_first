import { useRouter } from "next/router";
import { deepGreenButton } from "./commonClass/ButtonClass";
import { inputClass, textareaClass } from "./commonClass/fillOutClass";
import { useState } from "react";
import { db } from "../../../lib/firebase";
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

export const EditTodoPage = () => {
  const router = useRouter();
  const getData = router.query;
  const [todo, setTodo] = useState(getData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTodo((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prevForm) => ({ ...prevForm, priority: e.target.value }));
  };

  const handleUpdate = async () => {
    if (getData.id !== undefined) {
      if (todo.created_at !== undefined) {
        const selectedId = getData.id as string;
        const docRef = doc(db, "todos", selectedId);
        const payload = {
          status: "NOT STARTED",
          priority: todo.priority,
          title: todo.title,
          detail: todo.detail,
          updated_at: new Date(),
        };
        await updateDoc(docRef, payload);
        router.push("/");
      }
    }
  };

  return (
    <>
      <div className="w-full font-bold">
        <div className="max-w-5xl mx-auto p-2">
          <label className="text-2xl">TITLE</label>
          <input
            type="text"
            placeholder="Text"
            className={inputClass}
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
        </div>
        <div className="max-w-5xl mx-auto p-2">
          <label className="text-2xl">DETAIL</label>
          <textarea
            name="detail"
            id="text"
            rows={10}
            placeholder=" Text"
            className={textareaClass}
            value={todo.detail}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-2xl max-w-5xl mx-auto p-2">
          <h2>PRIORITY</h2>
          <div className="flex">
            {["High", "Middle", "Low"].map((priority) => (
              <label key={priority} className="pl-3 pr-6">
                <input
                  type="radio"
                  name="priority"
                  value={priority}
                  checked={priority == todo.priority}
                  onChange={handlePriorityChange}
                />
                {priority}
              </label>
            ))}
          </div>
        </div>
        <div className="text-2xl max-w-5xl mx-auto p-2 flex justify-end">
          <button className={deepGreenButton} onClick={handleUpdate}>
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
};
