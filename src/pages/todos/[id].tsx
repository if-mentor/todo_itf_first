import ShowAllComments from "@/components/ShowAllComments"
import ShowTodo from "@/components/ShowTodo"
import ShowTodoLink from "@/components/ShowTodoLink"
import { useRouter } from "next/router"

const TodoShow = () => {
  const router = useRouter();

  return (
    <>
      <ShowTodoLink todoId={router.query.id as string} />
      {/* ここにTodoIdの値が本来入る */}
      <div className="w-full font-bold">
        <div className="max-w-5xl mx-auto">
          <div className="flex">
            <ShowTodo
              todoId={router.query.id as string}
              title={router.query.title as string}
              detail={router.query.detail as string}
              status={router.query.status as "NOT STARTED" | "DOING" | "DONE"}
              priority={router.query.priority as "High" | "Middle" | "Low"}
              created_at={router.query.created_at as string}
              updated_at={router.query.updated_at as string}
            />
            <ShowAllComments todoId={router.query.id as string} />
            {/* ここにTodoIdの値が本来入る */}  
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoShow