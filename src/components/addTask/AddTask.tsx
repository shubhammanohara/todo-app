import React, { useState } from 'react'
import Layout from './Layout'
import { LayoutType, Task, TaskStatus } from '../../types/common';

interface AddTaskProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutType>>;
}

const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks, setCurrentLayout }) => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<TaskStatus | undefined>(undefined);

    const onAdd = () => {
        if (title !== "" && description !== "" && status) {
            setTasks((prev) => [...prev, {
                id: crypto.randomUUID(),
                title,
                description,
                status
            }]);
            setTitle("");
            setDescription("");
            setStatus(undefined);
        }
    }
    return (
        <Layout
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            status={status}
            setStatus={setStatus}
            onAdd={onAdd}
        />
    )
}

export default AddTask