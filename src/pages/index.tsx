import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <SearchForm />
      <TodoList />
    </>
  );
}
