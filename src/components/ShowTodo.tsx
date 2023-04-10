import Link from "next/link"

const ShowTodo = () => {
  return (
    <div className="border border-black rounded-lg min-w-[580px] min-h-[480px]">
      <div className="p-3">
        <p className="bg-[#68D391] text-[24px]">TITLE</p>
        {/* TODOのタイトルを取ってくる */}
        <p className="text-xl">GITHUB上に静的サイトをホスティングする</p>
      </div>
      <div className="p-3">
        <p className="bg-[#68D391] text-[24px]">DETAIL</p>
        {/* TODOのディティールを取ってくる */}
        <p className="text-xl">
          AWSコンソールでAWS AMPLIFYを使って静的ウェブサイトをホスティングします。
          AWS AMPLIFYは、静的ウェブサイトおよびウェブアプリにフルマネージドのホスティングを提供します。
          AMPLIFYのホスティングソリューションは、AMAZON CLOUDFRONTとAMAZON S3を使って、AWSコンテンツ配信ネットワーク(CDN)
          を介してサイトアセットを提供します。
          継続的デプロイをセットアップします。Amplify は、継続的デプロイで Git ベースのワークフローを提供します。
          それにより、コードコミットごとに、サイトに自動的に更新をデプロイすることができます。
        </p>
      </div>
      <div className="m-3 flex justify-between">
        <Link href='' className="border border-black bg-[#68D391] rounded-full px-5 py-2 my-auto flex">
          <span className="text-[18px] pr-[11px]">Edit</span>
            <svg className="h-5 w-5 text-black mt-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
          </svg>
        </Link>
          <div className="colums-1 mr-5">
            <p className="text-md">Create</p>
            <p className="text-lg">2020-11-8-18:55</p>
          </div>
          <div className="colums-1">
            <p className="text-md">Detail</p>
            <p className="text-lg">2021-12-24 18:55</p>
          </div>
      </div>
    </div>
  )
}

export default ShowTodo