import Link from "next/link"

const ShowTodoLink = () => {
  return (
    <>
        <div className="flex justify-between">
            <h1>SHOW TODO</h1>
            <div>
                <Link href="/">Comment</Link>
                <Link href="/">Back</Link>
            </div>
        </div>
    </>
  )
}

export default ShowTodoLink;