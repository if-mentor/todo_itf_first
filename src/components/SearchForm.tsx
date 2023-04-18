import Link from "next/link"
import { Dispatch, SetStateAction } from "react";

export type SearchProps = {
  filterStatus: string;
  setFilterStatus: Dispatch<SetStateAction<string>>;
  filterPriority: string;
  setFilterPriority: Dispatch<SetStateAction<string>>;
}

const SearchForm: React.FC<SearchProps> = ({filterStatus, setFilterStatus, filterPriority, setFilterPriority}) => {


  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto py-2 flex justify-between">
        <h2>TODO LIST</h2>
        <Link href="/create">
          <div className="border border-solid border-black rounded-full p-2 mt-5 bg-slate-300">
            <svg
              className="h-4 w-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className="flex  space-x-5 max-w-5xl mx-auto py-2">
        <div>
          <p>SEARCH</p>
          <div className="border border-solid border-black rounded-md px-2 py-0.5">
            <input
              type="text"
              placeholder="Text"
              onChange={(e) => e.target.value}
              className="outline-none"
            />
            <button>
              <svg
                className="h-4 w-4 text-gray-400"
                viewBox="00 0 25 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />{" "}
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <p>STATUS</p>
          <select
            value={filterStatus}
            className="border border-solid border-black rounded-md px-5 py-0.5"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">----------</option>
            <option value='NOT STARTED'>NOT STARTED</option>
            <option value='DOING'>DOING</option>
            <option value='DONE'>DONE</option>
          </select>
        </div>
        <div>
          <p>PRIORITY</p>
          <select
            className="border border-solid border-black rounded-md px-4 py-0.5"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="">----------</option>
            <option value='High'>High</option>
            <option value='Middle'>Middle</option>
            <option value='Low'>Low</option>
          </select>
        </div>
        <div className="border-solid">
          <br></br>
          <button className="border border-solid border-black rounded-full px-5 py-0.5 bg-slate-400">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchForm