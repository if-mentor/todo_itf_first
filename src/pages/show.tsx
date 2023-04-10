import ShowComment from "@/components/ShowComment"
import ShowTodo from "@/components/ShowTodo"

type Comment = {
  name: string;
  content: string;
  created_at: string;
}
const comments: Comment[] = [
  {
    name: "ジョン",
    content: "2日後までに完了お願い致します。",
    created_at: "2022/01/01"
  },
  {
    name: "リンゴ",
    content: "内容確認致しました。修正点メールしましたのでご確認ください。",
    created_at: "2022/01/01"
  },
  {
    name: "ポール",
    content: "2日後までに完了お願い致します。",
    created_at: "2022/01/01"
  },
  {
    name: "ジョージ",
    content: "2日後までに完了お願い致します。",
    created_at: "2022/01/01"
  }

]

const show = () => {
  return (
    <>
      <div className="w-full font-bold">
        <div className="max-w-5xl mx-auto">
          <div className="text-[28px] p-2">SHOW TODO</div>
          <div className="flex">
            <ShowTodo />
            <div className="mt-2 ml-4 max-h-[464px]">
              {comments.map((comment: Comment) => {
                return (
                  <ShowComment
                    name={comment.name}
                    date={comment.created_at}
                    content={comment.content}
                  />
                )}
              )}
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default show