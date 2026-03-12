import React from 'react';
import SearchBar from '../searchBar';
import Accordion from '../accordion';
import Card from '../card';
import { Task } from '../../types/common';

interface LayoutProps {
  tasks: Task[];
  filteredTasks: { inProgress: Task[]; completed: Task[]; pending: Task[] };
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setEditId: React.Dispatch<React.SetStateAction<string>>;
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
}

const Layout: React.FC<LayoutProps> = ({
  tasks,
  filteredTasks,
  setSearch,
  setEditId,
  setDeleteId,
}) => {
  const currentDate = new Date().toLocaleDateString('en-CA');
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
    ));
  };
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
    ));
  };
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
    ));
  };
  return (
    <div className="p-2">
      <SearchBar disabled={tasks.length === 0} setSearch={setSearch} />
      <div className="flex flex-col gap-2 p-2">
        <Accordion
          title={`In progress (${filteredTasks.inProgress.length})`}
          content={renderInprogressTasks()}
          hasContent={filteredTasks.inProgress.length > 0}
        />
        <Accordion
          title={`Completed (${filteredTasks.completed.length})`}
          content={renderCompletedTasks()}
          hasContent={filteredTasks.completed.length > 0}
        />
        <Accordion
          title={`Pending (${filteredTasks.pending.length})`}
          content={renderPendingTasks()}
          hasContent={filteredTasks.pending.length > 0}
        />
      </div>
    </div>
  );
};

export default Layout;
