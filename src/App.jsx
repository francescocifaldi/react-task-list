import tasks from './tasks.js'

function App() {
  const tasksInProgress = tasks.filter((task) => task.state === "backlog" || task.state === "in_progress")
  const doneTasks = tasks.filter((task) => task.state === "completed")
  console.log(tasksInProgress)

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
                  ciao
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
                  ciao
                </li>)
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default App
