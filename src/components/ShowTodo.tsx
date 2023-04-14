import { doc, getDoc } from "firebase/firestore";
import Link from "next/link"
import { db } from "../../lib/firebase";
import { Todo } from "./TodoList";
import { useRouter } from "next/router";

type TodoShowProps = {
  todoId: string;
  title: string;
  detail: string;
  status: "NOT STARTED" | "DOING" | "DONE";
  priority: "High" | "Middle" | "Low";
  created_at: string;
  updated_at: string;
}
const ShowTodo: React.FC<TodoShowProps> = (props) => {
  const {todoId, title, detail, status, priority, created_at, updated_at} = props
  const router = useRouter();

  const handleEdit = async (selectedId: string) => {
    const docRef = doc(db, "todos", selectedId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if (data) {
      const selectedTodo: Todo = {
        id: selectedId,
        created_at: data.created_at.seconds,
        priority: data.priority,
        detail: data.detail,
        status: data.status,
        title: data.title,
        updated_at: data.updated_at.seconds,
      };
      router.push({
        pathname: "/edit",
        query: selectedTodo,
      });
    }
  };
  return (
    <div className="border border-black rounded-lg min-w-[580px] min-h-[480px]">
      <div className="p-3">
        <p className="bg-[#68D391] text-[24px]">TITLE</p>
        {/* TODOのタイトルを取ってくる */}
        <p className="text-xl">{title}</p>
      </div>
      <div className="p-3 min-h-[310px]">
        <p className="bg-[#68D391] text-[24px]">DETAIL</p>
        {/* TODOのディティールを取ってくる */}
        <p className="text-xl">{detail}</p>
      </div>
      <div className="m-3 flex justify-between">
        <button
          className="border border-black bg-[#68D391] rounded-full px-5 py-2 my-auto flex"
          onClick={() => handleEdit(todoId)}
        >
          <span className="text-[18px] pr-[11px]">Edit</span>
            <svg className="h-5 w-5 text-black mt-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
          </svg>
        </button>
          <div className="colums-1 mr-5">
            <p className="text-md">Create</p>
            <p className="text-lg">{created_at}</p>
          </div>
          <div className="colums-1">
            <p className="text-md">Detail</p>
            <p className="text-lg">{updated_at}</p>
          </div>
      </div>
    </div>
  )
}

export default ShowTodo