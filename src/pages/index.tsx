import SearchForm from "@/components/SearchForm";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
 
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
