import {
  Timestamp,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { EditPencilButton } from "./commonParts/EditPencilButton";
import { DeleteTrashButton } from "./commonParts/DeleteTrashButton";
import {
  statusDoing,
  statusDone,
  statusNotStarted,
} from "./commonParts/ButtonClass";
import { FilterPriority, FilterStatus } from "./SearchForm";

export type Todo = {
  id: string;
  title: string;
  detail: string;
  status: "NOT STARTED" | "DOING" | "DONE";
  priority: "High" | "Middle" | "Low";
  draft?: boolean;
  created_at: string;
  updated_at: string;
};

type TodoListProps = {
  filterStatus: FilterStatus;
  filterPriority: FilterPriority;
};
const TodoList: React.FC<TodoListProps> = ({
  filterStatus,
  filterPriority,
}) => {
  const router = useRouter();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [draftJudge, setDraftJudge] = useState(false);

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
    const judgeResult = todos.find((todo) => todo.draft === true);
    judgeResult && setDraftJudge(true);
    console.log(draftJudge);
  }, [todos]);

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

  const handleEdit = async (selectedId: string) => {
    const docRef = doc(db, "todos", selectedId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    if (data) {
      const selectedTodo: Omit<Todo, "status" | "draft" | "created_at"> = {
        id: selectedId,
        priority: data.priority,
        detail: data.detail,
        title: data.title,
        updated_at: data.updated_at.seconds,
      };
      console.log(selectedTodo);
      router.push({
        pathname: "/edit",
        query: selectedTodo,
      });
    }
  };

  const handleDelete = (selectedId: string) => {
    deleteDoc(doc(db, "todos", selectedId));
  };

  const SwitchButton = (status: string, selectedId: string) => {
    switch (status) {
      case "NOT STARTED":
        return (
          <button
            className={statusNotStarted}
            onClick={() => handleChangeStatus(status, selectedId)}
          >
            NOT STARTED
          </button>
        );
      case "DOING":
        return (
          <button
            className={statusDoing}
            onClick={() => handleChangeStatus(status, selectedId)}
          >
            DOING
          </button>
        );
      case "DONE":
        return (
          <button
            className={statusDone}
            onClick={() => handleChangeStatus(status, selectedId)}
          >
            DONE
          </button>
        );
    }
  };

  const handleChangeStatus = async (status: string, selectedId: string) => {
    const statusInfo: string[] = ["NOT STARTED", "DOING", "DONE"];
    const docRef = doc(db, "todos", selectedId);
    switch (status) {
      case statusInfo[0]:
        await updateDoc(docRef, { status: statusInfo[1] });
        break;
      case statusInfo[1]:
        await updateDoc(docRef, { status: statusInfo[2] });
        break;
      case statusInfo[2]:
        await updateDoc(docRef, { status: statusInfo[0] });
        break;
    }
  };

  const handleChangePriority = async (priority: string, selectedId: string) => {
    const docRef = doc(db, "todos", selectedId);
    await updateDoc(docRef, { priority: priority });
  };

  return (
    <div className="text-2xl max-w-5xl mx-auto py-2 flex justify-between font-bold">
      <table className="w-full table-auto my-3">
        <thead className="bg-[#68D391]">
          <tr>
            <th className="text-left pl-2 py-2 w-[384px]">Task</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Create</th>
            <th>Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map(
            ({
              id,
              title,
              detail,
              status,
              priority,
              created_at,
              updated_at,
              draft,
            }: Todo) => {
              const todoInfo: Todo = {
                id,
                title,
                detail,
                status,
                priority,
                created_at,
                updated_at,
              };
              if (!draft) {
                return (
                  <tr className="border-b" key={id}>
                    <td className="text-left py-3 w-[384px]">
                      <p className="text-base w-[384px] truncate">
                        <Link
                          href={{
                            pathname: `/todos/${id}`,
                            query: todoInfo,
                          }}
                        >
                          {title}
                        </Link>
                      </p>
                    </td>
                    <td>{SwitchButton(status, id)}</td>
                    <td className="text-center">
                      <select
                        value={priority}
                        key={created_at}
                        className="border border-red-400 outline-none rounded-lg
                      text-base p-2"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          const selectedPriority = e.target.value;
                          handleChangePriority(selectedPriority, id);
                        }}
                      >
                        {["High", "Middle", "Low"].map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="text-sm text-center">{created_at}</td>
                    <td className="text-sm text-center">{updated_at}</td>
                    <td className=" text-center py-3">
                      <button onClick={() => handleEdit(id)}>
                        <EditPencilButton />
                      </button>
                      <button onClick={() => handleDelete(id)}>
                        <DeleteTrashButton />
                      </button>
                    </td>
                  </tr>
                );
              }
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
