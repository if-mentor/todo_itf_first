import React from 'react'

type Post = {
  task: string;
  status: string;
  priority: string;
  created_at: string;
  updated_at: string;
}
const TodoList: React.FC = () => {
  const posts: Post[] = [
    {
      task: 'Github上に静的サイトをホスティングする',
      status: 'NOT STARTED',
      priority: 'High',
      created_at: '2020-11-8 18:55',
      updated_at: '2020-11-8 18:55'
    },
    {
      task: 'ReactでTodoサイトを作成する',
      status: 'DOING',
      priority: 'Low',
      created_at: '2020-11-8 18:55',
      updated_at: '2020-11-8 18:55'
    },
    {
      task: 'Firestore Hostingを学習する',
      status: 'DONE',
      priority: 'Middle',
      created_at: '2020-11-8 18:55',
      updated_at: '2020-11-8 18:55'
    },
    {
      task: '感謝の正拳突き',
      status: 'DOING',
      priority: 'High',
      created_at: '2020-11-8 18:55',
      updated_at: '2020-11-8 18:55'
    },
    {
      task: '二重の極み',
      status: 'DONE',
      priority: 'High',
      created_at: '2020-11-8 18:55',
      updated_at: '2020-11-8 18:55'
    },
    {
      task: '魔封波',
      status: 'DOING',
      priority: 'Low',
      created_at: '2020-11-8 18:55',
      updated_at: '2020-11-8 18:55'
    }
  ]
  return (
    <div className='flex justify-center'>
      <table className='table-fixed my-3'>
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
          {posts.map((post: Post) => (
            <tr className='border-b'>
            <td className='text-left pr-10 py-3'>
              <p className='text-sm'>{post.task}</p>
            </td>
            <td className='px-3'>
              <p 
                className={`border border-black outline-none rounded-full
                  font-bold px-2 py-1 text-center
                  ${post.status === 'NOT STARTED' ? 'text-[3px] bg-green-100'
                  : post.status === 'DOING' ? 'text-xs bg-green-700 text-white'
                  : 'text-xs bg-green-400'}
                `}
              >
                {post.status}
              </p>
            </td>
            <td className='px-3'>
              <select 
                value={post.priority}
                className='border border-red-400 outline-none rounded-md
                 text-xs p-1'
              >
                <option value='High'>High</option>
                <option value='Middle'>Middle</option>
                <option value='Low'>Low</option>
              </select>
            </td>
            <td className='text-xs px-3'>{post.created_at}</td>
            <td className='text-xs px-3'>{post.updated_at}</td>
            <td className='flex justify-items-center px-5 py-3'>
              <svg className="h-4 w-4 text-gray-500 mr-3"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
              <svg className="h-4 w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
            </td>
          </tr> 
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList