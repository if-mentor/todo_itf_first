import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../lib/firebase";
import { useRouter } from "next/router";
import { deepGreenButton, lightpinkButton } from "./commonClass/ButtonClass";
import { inputClass, textareaClass } from "./commonClass/fillOutClass";

export const NewTodoPage = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    todoTitle: "",
    todoDetail: "",
    selectedPriority: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({ ...prevForm, selectedPriority: e.target.value }));
  };

  const handleCreate = async () => {
    const docRef = collection(db, "todos");
    const payload = {
      status: "NOT STARTED",
      priority: form.selectedPriority,
      title: form.todoTitle,
      detail: form.todoDetail,
      created_at: new Date(),
      updated_at: new Date(),
      draft: false,
    };
    await addDoc(docRef, payload);
    router.push("/");
  };

  const handleDraft = async () => {
    const docRef = collection(db, "todos");
    const payload = {
      status: "NOT STARTED",
      priority: form.selectedPriority,
      title: form.todoTitle,
      detail: form.todoDetail,
      created_at: new Date(),
      updated_at: new Date(),
      draft: true,
    };
    await addDoc(docRef, payload);
    router.push("/");
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
            name="todoTitle"
            value={form.todoTitle}
            onChange={handleChange}
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
            value={form.todoDetail}
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
                  name="selectedPriority"
                  value={priority}
                  onChange={handlePriorityChange}
                />
                {priority}
              </label>
            ))}
          </div>
        </div>
        <div className="text-2xl max-w-5xl mx-auto p-2 flex justify-end">
          <button onClick={handleDraft} className={lightpinkButton}>
            DRAFT
          </button>
          <button onClick={handleCreate} className={deepGreenButton}>
            CREATE
          </button>
        </div>
      </div>
    </>
  );
};
