import React, { useCallback, useEffect, useState } from 'react';
import Layout from './Layout';
import { LayoutType, Task, TaskStatus } from '../../types/common';

interface AddTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutType>>;
  editId?: string;
  setEditId?: React.Dispatch<React.SetStateAction<string>>;
}

const AddTask: React.FC<AddTaskProps> = ({
  tasks,
  setTasks,
  setCurrentLayout,
  editId,
  setEditId,
}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<TaskStatus | undefined>(undefined);

  useEffect(() => {
    if (editId) {
      const task = tasks.find((t) => t.id === editId);
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.status);
      }
    }
  }, [editId, tasks]);

  const onAdd = useCallback(() => {
    if (title !== '' && description !== '' && status) {
      if (editId) {
        setTasks((prev) =>
          prev.map((t) =>
            t.id === editId ? { ...t, title, description, status } : t,
          ),
        );
        setTitle('');
        setDescription('');
        setStatus(undefined);
        setEditId && setEditId('');
        setCurrentLayout('todo');
        return;
      }

      setTasks((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          title,
          description,
          status,
        },
      ]);
      setTitle('');
      setDescription('');
      setStatus(undefined);
      setCurrentLayout('todo');
    }
  }, [title, description, status, setTasks, setCurrentLayout]);

  return (
    <Layout
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      status={status}
      setStatus={setStatus}
      onAdd={onAdd}
      editId={editId}
      onCancel={() => {
        setCurrentLayout('todo');
        setEditId && setEditId('');
      }}
    />
  );
};

export default AddTask;
