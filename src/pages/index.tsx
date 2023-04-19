import SearchForm, { FilterPriority, FilterStatus } from "@/components/SearchForm";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("");
  const [filterPriority, setFilterPriority] = useState<FilterPriority>("");
  console.log(filterStatus)
  return (
    
    <>
      <SearchForm
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />
      <TodoList
        filterStatus={filterStatus}
        filterPriority={filterPriority}
      />
    </>
  );
}
