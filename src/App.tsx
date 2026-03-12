import { useState } from 'react';

import './App.css'
import Footer from './components/footer';
import { PlusIcon } from './components/icons';
import Navbar from './components/navbar';
import TodoList from './components/todoList';
import AddTask from './components/addTask';
import { LayoutType } from './types/common';

function App() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>("todo");

  const renderLayout = () => {
    switch (currentLayout) {
      case "todo":
        return <TodoList />;
      case "addNew":
        return <AddTask />;
      default:
        return null;
    }
  }

  return (
    <>
      <Navbar currentLayout={currentLayout} setCurrentLayout={setCurrentLayout} />
      <div className="md:hero bg-base-100 min-h-screen">
        <div className="md:hero-content">
          <div className="md:max-w-md">
            {renderLayout()}
          </div>
        </div>
      </div>
      <div className="fab">
        {currentLayout !== "addNew" && (
          <button className="btn btn-lg btn-circle btn-primary" onClick={() => setCurrentLayout("addNew")}>
            <PlusIcon width="24" height="24" />
          </button>
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
