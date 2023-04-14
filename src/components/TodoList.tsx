import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import dayjs from "dayjs";
import { useRouter } from "next/router";

export type Todo = {
  id: string;
  title: string;
  detail: string;
  status: "NOT STARTED" | "DOING" | "DONE";
  priority: "High" | "Middle" | "Low";
  draft?: boolean;
  created_at: string;
  updated_at: string;
};
const TodoList: React.FC = () => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);

  // todosにfirestoreのデータを追加
  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("created_at"));
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title as string,
            detail: doc.data().detail as string,
            status: doc.data().status as "NOT STARTED" | "DOING" | "DONE",
            priority: doc.data().priority as "High" | "Middle" | "Low",
            draft: doc.data().draft as boolean,
            created_at: dayjs(doc.data().created_at.toDate()).format(
              "YYYY-MM-DD HH:mm"
            ),
            updated_at: dayjs(doc.data().updated_at.toDate()).format(
              "YYYY-MM-DD HH:mm"
            ),
          };
        })
      );
    });
  }, []);

  const handleEdit = async (selectedId: string) => {
    const docRef = doc(db, "todos", selectedId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if (data) {
      const selectedTodo: Todo = {
        id: selectedId,
        draft: data.draft,
        created_at: data.created_at.seconds,
        priority: data.priority,
        detail: data.detail,
        status: data.status,
        title: data.title,
        updated_at: data.updated_at.seconds,
      };
      console.log(selectedTodo);
      router.push({
        pathname: "/edit",
        query: selectedTodo,
      });
    }
  };

  const handleDelete = (selectedId: string) => {
    deleteDoc(doc(db, "todos", selectedId));
  };

  return (
    <div className="text-2xl max-w-5xl mx-auto py-2 flex justify-between font-bold">
      <table className="w-full table-auto my-3">
        <thead className="bg-[#68D391]">
          <tr>
            <th className="text-left pl-2 py-2 w-[384px]">Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Create</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo) => {
            // [id].tsxに送るクエリ部分
            const todoInfo: Todo = {
              id: todo.id,
              title: todo.title,
              detail: todo.detail,
              status: todo.status,
              priority: todo.priority,
              created_at: todo.created_at,
              updated_at: todo.updated_at,
            };
            // draftがfalseの投稿のみ表示
            if (!todo.draft) {
              return (
                // key修正済
                <tr className="border-b" key={todo.id}>
                  <td className="text-left py-3 w-[384px]">
                    <p className="text-base w-[384px] truncate">
                      {/* firebaseのデータを引っ張るときに[id]ページを設定し、投稿ごとの詳細ページに移動する */}
                      <Link
                        href={{
                          pathname: `/todos/${todo.id}`,
                          query: todoInfo,
                        }}
                      >
                        {todo.title}
                      </Link>
                    </p>
                  </td>
                  <td>
                    <p
                      className={`border border-black outline-none rounded-full
                        font-bold py-1 text-center
                        ${
                          todo.status === "NOT STARTED"
                            ? "text-[3px] bg-[#F0FFF4]"
                            : todo.status === "DOING"
                            ? "text-xs bg-[#25855A] text-white"
                            : "text-xs bg-[#68D391]"
                        }
                      `}
                    >
                      {todo.status}
                    </p>
                  </td>
                  <td className="text-center">
                    <select
                      value={todo.priority}
                      className="border border-red-400 outline-none rounded-lg
                      text-base p-2"
                      onChange={(e) => e.target.value}
                    >
                      <option value="High">High</option>
                      <option value="Middle">Middle</option>
                      <option value="Low">Low</option>
                    </select>
                  </td>
                  <td className="text-sm text-center">{todo.created_at}</td>
                  <td className="text-sm text-center">{todo.updated_at}</td>
                  <td className=" text-center py-3">
                    <button onClick={() => handleEdit(todo.id)}>
                      <svg
                        className="h-4 w-4 text-gray-500 mr-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </button>
                    <button onClick={() => handleDelete(todo.id)}>
                      <svg
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
