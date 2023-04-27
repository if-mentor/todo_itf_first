import SearchForm, {
  FilterPriority,
  FilterStatus,
} from "@/components/SearchForm";
import TodoList, { Todo } from "@/components/TodoList";
import dayjs from "dayjs";
import {
  Timestamp,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";

export default function Home() {
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("");
  const [filterPriority, setFilterPriority] = useState<FilterPriority>("");

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const formatDate = (date: Timestamp) => {
    const toDatedDate = date.toDate();
    return dayjs(toDatedDate).format("YYYY-MM-DD HH:mm");
  };

  useEffect(() => {
    const q = query(collection(db, "todos"), orderBy("created_at"));
    onSnapshot(q, (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title as string,
            detail: doc.data().detail as string,
            status: doc.data().status as "NOT STARTED" | "DOING" | "DONE",
            priority: doc.data().priority as "High" | "Middle" | "Low",
            draft: doc.data().draft as boolean,
            created_at: formatDate(doc.data().created_at),
            updated_at: formatDate(doc.data().updated_at),
          };
        })
      );
    });
  }, []);

  useEffect(() => {
    if (filterStatus && filterPriority) {
      const result = todos
        .filter((compareStatus) => compareStatus.status === filterStatus)
        .filter(
          (comparePriority) => comparePriority.priority === filterPriority
        );
      setFilteredTodos(result);
    } else if (!filterStatus && filterPriority) {
      const result = todos.filter(
        (comparePriority) => comparePriority.priority === filterPriority
      );
      setFilteredTodos(result);
    } else if (filterStatus && !filterPriority) {
      const result = todos.filter(
        (compareStatus) => compareStatus.status === filterStatus
      );
      setFilteredTodos(result);
    } else {
      setFilteredTodos(todos);
    }
  }, [filterStatus, filterPriority, todos]);

  return (
    <>
      <SearchForm
        todos={todos}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
      />
      <TodoList filteredTodos={filteredTodos} />
    </>
  );
}
