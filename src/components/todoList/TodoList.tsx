import { useMemo } from 'react';
import { Task } from '../../types/common'
import Layout from './Layout'

interface TodoListProps {
    tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    const filteredTasks = useMemo(() => {
        const inProgress: Task[] = [];
        const completed: Task[] = [];
        const pending: Task[] = [];

        tasks.forEach((task) => {
            switch (task.status) {
                case "inProgress":
                    inProgress.push(task);
                    break;
                case "completed":
                    completed.push(task);
                    break;
                case "pending":
                    pending.push(task);
                    break;
                default:
                    break;
            }
        })

        return { inProgress, completed, pending };
    }, [tasks])

    return (
        <Layout tasks={filteredTasks} />
    )
}

export default TodoList