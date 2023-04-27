import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Todo } from "./TodoList";
import { CreateButton } from "./commonParts/CreateButton";
import { SearchButton } from "./commonParts/SearchButton";
import { useRouter } from "next/router";

export type FilterStatus = "NOT STARTED" | "DOING" | "DONE" | "";
export type FilterPriority = "High" | "Middle" | "Low" | "";

export type SearchProps = {
  todos: Todo[];
  filterStatus: FilterStatus;
  setFilterStatus: Dispatch<SetStateAction<FilterStatus>>;
  filterPriority: FilterPriority;
  setFilterPriority: Dispatch<SetStateAction<FilterPriority>>;
  filteredTodos: Todo[];
  setFilteredTodos: Dispatch<SetStateAction<Todo[]>>;
};

const SearchForm: React.FC<SearchProps> = (props) => {
  const {
    todos,
    filterStatus,
    setFilterStatus,
    filterPriority,
    setFilterPriority,
    filteredTodos,
    setFilteredTodos,
  } = props;
  const FILTERSTATUSOPTIONS = [
    { value: "", title: "----------" },
    { value: "NOT STARTED", title: "NOT STARTED" },
    { value: "DOING", title: "DOING" },
    { value: "DONE", title: "DONE" },
  ];
  const FILTERPRIORITYOPTIONS = [
    { value: "", title: "----------" },
    { value: "High", title: "High" },
    { value: "Middle", title: "Middle" },
    { value: "Low", title: "Low" },
  ];

  const [searchWord, setSearchWord] = useState("");
  const router = useRouter();

  const handleCreate = () => {
    const content = todos.find((todo) => {
      if (todo.draft)
        return {
          id: todo.id,
          title: todo.title,
          detail: todo.detail,
          priority: todo.priority,
          draft: todo.draft,
        };
    });
    content === undefined
      ? router.push("/create")
      : router.push({
          pathname: "/draft",
          query: content,
        });
  };

  const handleSearch = () => {
    setFilteredTodos(
      filteredTodos.filter((todo) => todo.title.includes(searchWord))
    );
    setSearchWord("");
  };

  const handleReset = () => {
    setFilterStatus("");
    setFilterPriority("");
    setFilteredTodos(todos);
    setSearchWord("");
  };

  return (
    <div className="w-full font-bold">
      <div className="text-[28px] max-w-5xl mx-auto py-2 flex justify-between">
        <h2>TODO LIST</h2>
        <button onClick={() => handleCreate()}>
          <CreateButton />
        </button>
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
              <SearchButton />
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
            {FILTERSTATUSOPTIONS.map(({ value, title }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>PRIORITY</p>
          <select
            className="border border-solid border-black rounded-md px-4 py-0.5"
            value={filterPriority}
            onChange={(e) =>
              setFilterPriority(e.target.value as FilterPriority)
            }
          >
            {FILTERPRIORITYOPTIONS.map(({ value, title }) => (
              <option value={value} key={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="border-solid">
          <br></br>
          <button
            className="border border-solid border-black rounded-full px-5 py-0.5 bg-slate-400"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchForm;
