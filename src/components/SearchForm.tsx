const SearchForm = () => {
  return (
    <div className='w-full font-bold'>
        <div className='text-2xl max-w-5xl mx-auto py-2 flex justify-between'>
            <h2>TODO LIST</h2>
            <div className='border border-solid border-gray rounded-full px-2 mt-5 bg-slate-300'>
                <button>
                    <svg className="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/>
                    </svg>
                </button>
            </div>
        </div>
        <div className='flex  space-x-5 max-w-5xl mx-auto py-2'>
            <div>
                <p>SEARCH</p>
                <div className='border border-solid border-black rounded-md px-2 py-0.5'>
                    <input type="text" placeholder='Text' />
                    <button><svg className="h-4 w-4 text-gray-400"  viewBox="00 0 25 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="11" cy="11" r="8" />  <line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></button>
                </div>  
            </div>
            <div>
                <p>STATUS</p>
                <select name="" id="" className='border border-solid border-black rounded-md px-5 py-0.5'>
                    <option>----------</option>
                    <option>NOT STARTED</option>
                    <option>DOING</option>
                    <option>DONE</option>
                </select>
            </div>
            <div>
                <p>PRIORITY</p>
                <select className='border border-solid border-black rounded-md px-4 py-0.5' name="" id="">
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