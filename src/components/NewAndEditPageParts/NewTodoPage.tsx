import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../lib/firebase";
import { useRouter } from "next/router";
import { deepGreenButton, lightpinkButton } from "../Common/ButtonDesign";

const NewTodoPage = () => {
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

  const timestamp = new Date();

  const handlePriorityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({ ...prevForm, selectedPriority: e.target.value }));
  };

  const handleCreate = async () => {
    const docRef = collection(db, "todos");
    const payload = {
      //小文字
      Status: "NOT STARTED",
      Priority: form.selectedPriority,
      Title: form.todoTitle,
      Detail: form.todoDetail,
      Create: timestamp,
      Update: timestamp,
      Draft: false,
    };
    await addDoc(docRef, payload);
  };

  const handleDraft = async () => {
    const docRef = collection(db, "todos");
    const payload = {
      Status: "NOT STARTED",
      Priority: form.selectedPriority,
      Title: form.todoTitle,
      Detail: form.todoDetail,
      Create: timestamp,
      Update: timestamp,
      Draft: true,
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
            className="text-5 border border-black w-full h-[71px] rounded-[10px] px-4 py-2 placeholder:text-black focus:placeholder:text-white  placeholder:absolute placeholder:text-2xl"
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
            className="text-5 border border-black w-full resize-none h-[208px] rounded-[10px] px-4 py-2 placeholder:text-black focus:placeholder-white placeholder:absolute placeholder:text-2xl"
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
          <button onClick={handleDraft} className={deepGreenButton}>
            CREATE
          </button>
        </div>
      </div>
    </>
  );
};

export default NewTodoPage;
