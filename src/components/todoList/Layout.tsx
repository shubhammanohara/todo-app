import React from 'react'
import SearchBar from '../searchBar'
import Accordion from '../accordion'
import Card from '../card'
import { Task } from '../../types/common';

interface LayoutProps {
    tasks: { inProgress: Task[]; completed: Task[]; pending: Task[] };
}

const Layout: React.FC<LayoutProps> = ({ tasks }) => {
    const renderInprogressTasks = () => {
        return tasks.inProgress.map((task) => (
            <Card key={task.id} title={task.title} content={task.description} date={"2024-06-01"} />
        ))
    }
    const renderCompletedTasks = () => {
        return tasks.completed.map((task) => (
            <Card key={task.id} title={task.title} content={task.description} date={"2024-06-01"} />
        ))
    }
    const renderPendingTasks = () => {
        return tasks.pending.map((task) => (
            <Card key={task.id} title={task.title} content={task.description} date={"2024-06-01"} />
        ))
    }
    return (
        <div className="p-2">
            <SearchBar />
            <div className="flex flex-col gap-2 p-2">
                <Accordion title={`In progress (${tasks.inProgress.length})`} content={renderInprogressTasks()} />
                <Accordion title={`Completed (${tasks.completed.length})`} content={renderCompletedTasks()} />
                <Accordion title={`Pending (${tasks.pending.length})`} content={renderPendingTasks()} />
            </div>

        </div >
    )
}

export default Layout