import ShowAllComments from "@/components/ShowAllComments";
import ShowTodo from "@/components/ShowTodo"
import ShowTodoLink from "@/components/ShowTodoLink";

const show = () => {
  return (
    <>
      <ShowTodoLink todoId='testId'/>
      {/* ここにTodoIdの値が本来入る */}
      <div className="w-full font-bold">
        <div className="max-w-5xl mx-auto">
          <div className="flex">
            <ShowTodo />
            <ShowAllComments todoId='testId'/>
            {/* ここにTodoIdの値が本来入る */}  
          </div>
        </div>
      </div>
    </>
  )
}

export default show