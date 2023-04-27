import Link from "next/link"
import { FormEvent,useEffect, useState } from "react"
import Modal from "./Modal";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../lib/firebase";

type Todo = {
  todoId: string
}

const ShowTodoLink: React.FC<Todo> = ({todoId}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [content, setContent] = useState<string>('')
  const [currentTodoId,setCurrentTodoId] = useState<string>('')

  useEffect(() => {
    setCurrentTodoId(todoId)
  },[todoId])

  const handleCreateComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const docRef = collection(db, "comments");
    if (name && content) {
      const payload = {
        todoId: currentTodoId,
        name: name,
        content: content,
        created_at: new Date()
      }
      await addDoc(docRef, payload);
      setIsOpen(false)
    }
    
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    console.log(content)
  }
  return (
    <>
      <div className="w-full font-bold">
          <div className="max-w-5xl mx-auto flex justify-between ">
            <p className="text-[26px] py-2">SHOW TODO</p>
              <div>
                <button onClick={() => setIsOpen(true)} className="bg-green-800 text-white border border-black rounded-full mt-5 py-1 px-5">Comment</button>
                <Link href="/" className="bg-[#68D391] ml-3 border border-black rounded-full py-1 px-10">Back</Link>
              </div>
          </div>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="w-full font-bold">
              <h1 className="text-4xl">Comment</h1>
              <form onSubmit={handleCreateComment}>
                <div>
                  <h2>Name</h2>
                  <input type="text" name="name" onChange={handleChangeName} className="border border-black rounded-md w-full"/>
                </div>
                <div>
                  <h2>Your Comment</h2>
                  <textarea name="comment" rows={7} onChange={handleChangeContent} className="border border-black rounded-md w-full resize-none"/>
                </div>
                <div>
                  <input type="submit" value="CREATE" className="hover:cursor-pointer border border-black mt-3 bg-green-800 text-white text-center rounded-md p-1 w-full"/>
                </div>
              </form>
            </div>
          </Modal>   
      </div>
    </>
  )
}

export default ShowTodoLink;