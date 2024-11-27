import tasks from './tasks.js'

function App() {
  const tasksInProgress = tasks.filter((task) => task.state === "backlog" || task.state === "in_progress")
  const doneTasks = tasks.filter((task) => task.state === "completed")

  return (
    <>
      <header className='main-header'>
        <div className="container">
          <h1>Task manager</h1>
        </div>
      </header>
      <section>
        <div className='container'>
          <h2 className='task-title'>
            Current tasks: {tasksInProgress.length}
          </h2>
        </div>
        <div className="container">
          <ul className='task-list'>
            {
              tasksInProgress.map((task) =>
                <li key={task.id} className='task-item'>
                  <ul className='task-detail'>
                    <li>{task.title}</li>
                    <li>Priority: {task.priority}</li>
                    <li>Est. time: {task.estimatedTime}</li>
                  </ul>
                  <div className="status">
                    <p>{task.state}</p>
                  </div>
                </li>)
            }
          </ul>
        </div>
      </section>
      <section>
        <div className='container'>
          <h2 className='task-title'>
            Completed tasks: ({doneTasks.length})
          </h2>
        </div>
        <div className="container">
          <ul className='task-list'>
            {
              doneTasks.map((task) =>
                <li key={task.id} className='task-item'>
                  <ul className='task-detail'>
                    <li>{task.title}</li>
                    <li>Priority: {task.priority}</li>
                    <li>Est. time: {task.estimatedTime}</li>
                  </ul>
                  <div className="status">
                    <p>{task.state}</p>
                  </div>
                </li>)
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
