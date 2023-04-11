import { Timestamp, collection, onSnapshot, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import dayjs from "dayjs";

type Todo = {
  id: string;
  title: string;
  detail: string;
  status: 'NOT STARTED' | 'DOING' | 'DONE';
  priority: 'High' | 'Middle' | 'Low';
  draft: boolean;
  created_at: string;
  updated_at: string;
}
const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // todosにfirestoreのデータを追加
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    onSnapshot(q, async(snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().Title as string,
            detail: doc.data().Detail as string,
            status: doc.data().Status as 'NOT STARTED' | 'DOING' | 'DONE',
            priority: doc.data().Priority as 'High' | 'Middle' | 'Low',
            draft: doc.data().Draft as boolean,
            created_at: dayjs(doc.data().Create.toDate()).format('YYYY/MM/DD'),
            updated_at: dayjs(doc.data().Update.toDate()).format('YYYY/MM/DD')
          }
        })
      )
    })
  },[]);

  return (
    <div className='max-w-5xl mx-auto py-2 flex justify-between'>
      <table className='w-full table-auto my-3'>
        <thead className='bg-green-400'>
          <tr>
            <th className='text-left pl-2 py-2'>Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Create</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: Todo) => {
            // draftがfalseの投稿のみ表示
            if (!todo.draft) {
              return (
                // key修正済
                <tr className='border-b' key={todo.id}>
                  <td className='text-left py-3'>
                    <p className='text-sm'>
                      {/* firebaseのデータを引っ張るときに[id]ページを設定し、投稿ごとの詳細ページに移動する */}
                      <Link href='/show'>{todo.title}</Link>
                    </p>
                  </td>
                  <td>
                    <p 
                      className={`border border-black outline-none rounded-full
                        font-bold py-1 text-center
                        ${todo.status === 'NOT STARTED' ? 'text-[3px] bg-green-100'
                        : todo.status === 'DOING' ? 'text-xs bg-green-700 text-white'
                        : 'text-xs bg-green-400'}
                      `}
                    >
                      {todo.status}
                    </p>
                  </td>
                  <td className='text-center'>
                    <select 
                      value={todo.priority}
                      className='border border-red-400 outline-none rounded-md
                      text-xs p-1'
                    >
                      <option value='High'>High</option>
                      <option value='Middle'>Middle</option>
                      <option value='Low'>Low</option>
                    </select>
                  </td>
                  <td className='text-xs text-center'>{todo.created_at}</td>
                  <td className='text-xs text-center'>{todo.updated_at}</td>
                  <td className=' text-center py-3'>
                    <button>
                      <svg className="h-4 w-4 text-gray-500 mr-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                      </svg>
                    </button>
                    <button>
                      <svg className="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                    </button>
                  </td>
                </tr> 
              )
            }
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList