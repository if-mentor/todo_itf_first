import Link from "next/link"
import { Dispatch, SetStateAction, useState } from "react";
import { Todo } from "./TodoList";

export type FilterStatus = "NOT STARTED" | "DOING" | "DONE" | "";
export type FilterPriority = "High" | "Middle" | "Low" | "";

export type SearchProps = {
  todos: Todo[];
  filterStatus: FilterStatus;
  setFilterStatus: Dispatch<SetStateAction<FilterStatus>>;
  filterPriority: FilterPriority;
  setFilterPriority: Dispatch<SetStateAction<FilterPriority>>;
  filteredTodos: Todo[];
  setFilteredTodos: Dispatch<SetStateAction<Todo[]>>
}

const SearchForm: React.FC<SearchProps> = (props) => {
  const {todos, filterStatus, setFilterStatus, filterPriority, setFilterPriority, filteredTodos, setFilteredTodos} = props;
  const FILTERSTATUSOPTIONS = [
    {value: "", title: "----------"},
    {value: "NOT STARTED", title: "NOT STARTED"},
    {value: "DOING", title: "DOING"},
    {value: "DONE", title: "DONE"} 
  ];
  const FILTERPRIORITYOPTIONS = [
    {value: "", title: "----------"},
    {value: "High", title: "High"},
    {value: "Middle", title: "Middle"},
    {value: "Low", title: "Low"} 
  ];

  const [searchWord, setSearchWord] =useState('');

  const handleSearch = () => {
    setFilteredTodos(filteredTodos.filter((todo) => todo.title.includes(searchWord)));
  }
 
  const handleReset = () => {
    setFilterStatus('');
    setFilterPriority('');
    setFilteredTodos(todos);
    setSearchWord('');
  }

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
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              className="outline-none"
            />
            <button onClick={handleSearch}>
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
            onChange={(e) => setFilterStatus(e.target.value as FilterStatus)}
          >
            {FILTERSTATUSOPTIONS.map(({value, title}) => <option value={value} key={title}>{title}</option>)}
          </select>
        </div>
        <div>
          <p>PRIORITY</p>
          <select
            className="border border-solid border-black rounded-md px-4 py-0.5"
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value as FilterPriority)}
          >
            {FILTERPRIORITYOPTIONS.map(({value, title}) => <option value={value} key={title}>{title}</option>)}
          </select>
        </div>
        <div className="border-solid">
          <br></br>
          <button className="border border-solid border-black rounded-full px-5 py-0.5 bg-slate-400"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchForm