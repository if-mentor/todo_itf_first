type ShowCommentProps = {
  name: string;
  date: string;
  content: string;
}

const ShowComment: React.FC<ShowCommentProps> = ({name, date, content}) => {
  return (
    <div>
      <div className=
        "border border-black rounded-t-lg bg-[#25855A] text-white w-[480px] h-[28px] flex"
      >
        {/* コメント投稿したユーザ名と作成日を取得 */}
        <p className="pl-5">{name}</p>
        <p className="ml-auto pr-5">{date}</p>
      </div>
      <div className=
        "border-x border-b border-black rounded-b-lg mb-4 w-[480px] min-h-[61px]"
      >
        <p className="px-3">{content}</p>
      </div>
    </div>
  )
}

export default ShowComment