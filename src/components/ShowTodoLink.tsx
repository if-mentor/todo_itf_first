import Link from "next/link"

const ShowTodoLink = () => {
  return (
    <>
        <div className="w-full">
            <div className="max-w-5xl mx-auto flex justify-between ">
                <h1>SHOW TODO</h1>
                <div>
                    <Link href="/aaa">Comment</Link>
                    <Link href="/">Back</Link>
                </div>
            </div>   
        </div>
    </>
  )
}

export default ShowTodoLink