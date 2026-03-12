import React from 'react'
import SearchBar from '../searchBar'
import Accordion from '../accordion'
import Card from '../card'
import { Task } from '../../types/common'

interface LayoutProps {
  tasks: Task[]
  filteredTasks: { inProgress: Task[]; completed: Task[]; pending: Task[] }
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setEditId: React.Dispatch<React.SetStateAction<string>>
  setDeleteId: React.Dispatch<React.SetStateAction<string>>
}

const Layout: React.FC<LayoutProps> = ({
  tasks,
  filteredTasks,
  setSearch,
  setEditId,
  setDeleteId,
}) => {
  const currentDate = new Date().toLocaleDateString('en-CA')
  const renderInprogressTasks = () => {
    return filteredTasks.inProgress.map((task) => (
      <Card
        key={task.id}
        id={task.id}
        title={task.title}
        content={task.description}
        status={task.status}
        date={currentDate}
        setEditId={setEditId}
        setDeleteId={setDeleteId}
      />
    ))
  }
  const renderCompletedTasks = () => {
    return filteredTasks.completed.map((task) => (
      <Card
        key={task.id}
        id={task.id}
        title={task.title}
        content={task.description}
        status={task.status}
        date={currentDate}
        setEditId={setEditId}
        setDeleteId={setDeleteId}
      />
    ))
  }
  const renderPendingTasks = () => {
    return filteredTasks.pending.map((task) => (
      <Card
        key={task.id}
        id={task.id}
        title={task.title}
        content={task.description}
        status={task.status}
        date={currentDate}
        setEditId={setEditId}
        setDeleteId={setDeleteId}
      />
    ))
  }
  return (
    <div className="p-2">
      <SearchBar setSearch={setSearch} />
      <div className="flex flex-col gap-2 p-2">
        <Accordion
          title={`In progress (${filteredTasks.inProgress.length})`}
          content={renderInprogressTasks()}
        />
        <Accordion
          title={`Completed (${filteredTasks.completed.length})`}
          content={renderCompletedTasks()}
        />
        <Accordion
          title={`Pending (${filteredTasks.pending.length})`}
          content={renderPendingTasks()}
        />
      </div>
    </div>
  )
}

export default Layout
