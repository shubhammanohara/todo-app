import { useMemo, useState } from 'react';
import { Task } from '../../types/common';
import Layout from './Layout';

interface TodoListProps {
  tasks: Task[];
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC<TodoListProps> = ({
  tasks,
  setEditId,
  setDeleteId,
}) => {
  const [search, setSearch] = useState<string>('');

  const searchedTasks = useMemo(() => {
    if (!search) return tasks;

    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.status.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase()),
    );
  }, [tasks, search]);

  const filteredTasks = useMemo(() => {
    const inProgress: Task[] = [];
    const completed: Task[] = [];
    const pending: Task[] = [];

    const tasksToFilter = search ? searchedTasks : tasks;

    tasksToFilter.forEach((task) => {
      if (task.status === 'inProgress') {
        inProgress.push(task);
      } else if (task.status === 'completed') {
        completed.push(task);
      } else if (task.status === 'pending') {
        pending.push(task);
      }
    });

    return { inProgress, completed, pending };
  }, [tasks, search, searchedTasks]);

  return (
    <Layout
      filteredTasks={filteredTasks}
      tasks={tasks}
      setSearch={setSearch}
      setEditId={setEditId}
      setDeleteId={setDeleteId}
    />
  );
};

export default TodoList;
