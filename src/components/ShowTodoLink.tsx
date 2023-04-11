import Link from "next/link"
import { useState } from "react"
import Modal from "./Modal";

const ShowTodoLink = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
              <form action="">
                <div>
                  <h2>Name</h2>
                  <input type="text" className="border border-black rounded-md w-full"/>
                </div>
                <div>
                  <h2>Your Comment</h2>
                  <textarea name="" rows={7} id="" className="border border-black rounded-md w-full resize-none"/>
                </div>
                <div>
                  <input type="submit" value="CREATE" className="border border-black mt-3 bg-green-800 text-white text-center rounded-md p-1 w-full"/>
                </div>
              </form>
            </div>
          </Modal>   
      </div>
    </>
  )
}

export default ShowTodoLink;