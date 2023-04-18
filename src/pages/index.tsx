import SearchForm from "@/components/SearchForm";
import TodoList from "@/components/TodoList";
import { useState } from "react";

export default function Home() {
  const [filterStatus, setFilterStatus] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
 
  return (
    
    <>
      <SearchForm
        filterStatus={filterStatus as "NOT STARTED" | "DOING" | "DONE" | ""}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority as "High" | "Middle" | "Low" | ""}
        setFilterPriority={setFilterPriority}
      />
      <TodoList
        filterStatus={filterStatus as "NOT STARTED" | "DOING" | "DONE" | ""}
        filterPriority={filterPriority as "High" | "Middle" | "Low" | ""}
      />
    </>
  );
}
