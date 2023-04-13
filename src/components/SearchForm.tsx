import Link from "next/link"

const SearchForm = () => {
  return (
    <div className='w-full font-bold'>
        <div className='text-2xl max-w-5xl mx-auto py-2 flex justify-between'>
            <h2>TODO LIST</h2>
            <div className='border border-solid border-black rounded-full p-2 mt-5 bg-slate-300'>
                <Link href="/create">
                <svg className="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                </Link>
            </div>
        </div>
        <div className='flex  space-x-5 max-w-5xl mx-auto py-2'>
            <div>
                <p>SEARCH</p>
                <div className='border border-solid border-black rounded-md px-2 py-0.5'>
                    <input type="text" placeholder='Text' onChange={(e) => e.target.value} className="outline-none" />
                    <button><svg className="h-4 w-4 text-gray-400"  viewBox="00 0 25 20"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
                </div>  
            </div>
            <div>
                <p>STATUS</p>
                <select name="" id="" className='border border-solid border-black rounded-md px-5 py-0.5' onChange={(e) => e.target.value}>
                    <option>----------</option>
                    <option>NOT STARTED</option>
                    <option>DOING</option>
                    <option>DONE</option>
                </select>
            </div>
            <div>
                <p>PRIORITY</p>
                <select className='border border-solid border-black rounded-md px-4 py-0.5' name="" id="" onChange={(e) => e.target.value}>
                    <option>----------</option>
                    <option>High</option>
                    <option>Middle</option>
                    <option>Low</option>
                </select>
            </div>
            <div className='border-solid'>
                <br></br>
                <button className='border border-solid border-black rounded-full px-5 py-0.5 bg-slate-400'>RESET</button>
            </div>
        </div>
    </div>
  )
}

export default SearchForm