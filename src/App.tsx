import { useEffect, useState } from 'react'

import './App.css'
import Footer from './components/footer'
import { PlusIcon } from './components/icons'
import Navbar from './components/navbar'
import TodoList from './components/todoList'
import AddTask from './components/addTask'
import { LayoutType, STORAGE_KEY, Task } from './types/common'

function App() {
  const [currentLayout, setCurrentLayout] = useState<LayoutType>('todo')
  const [editId, setEditId] = useState<string>('')
  const [deleteId, setDeleteId] = useState<string>('')

  const [tasks, setTasks] = useState<Task[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  return (
    <>
      <Navbar
        currentLayout={currentLayout}
        setCurrentLayout={setCurrentLayout}
      />
      <div className="md:hero bg-base-100 min-h-screen">
        <div className="md:hero-content">
          <div className="md:max-w-md md:min-w-md">
            {currentLayout === 'todo' && (
              <TodoList
                tasks={tasks}
                setEditId={setEditId}
                setDeleteId={setDeleteId}
              />
            )}
            {currentLayout === 'addNew' && (
              <AddTask
                tasks={tasks}
                setTasks={setTasks}
                setCurrentLayout={setCurrentLayout}
              />
            )}
          </div>
        </div>
      </div>
      <div className="fab">
        {currentLayout !== 'addNew' && (
          <button
            className="btn btn-lg btn-circle btn-primary"
            onClick={() => setCurrentLayout('addNew')}
          >
            <PlusIcon width="24" height="24" />
          </button>
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
