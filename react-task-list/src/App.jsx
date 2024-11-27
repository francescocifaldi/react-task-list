import './App.css'
import tasks from './tasks.js'

function App() {
  console.log(tasks)
  return (
    <>
      <header>
        <div className="container">
          <h1>
            Task Manager
          </h1>
        </div>
      </header>
      <main>
        <section>
          <div className='container'>
            <h2 className='task-title'>
              Current task (n)
            </h2>
          </div>
          <div className="container">
            <ul className='task-list'>
              <li className='task'>task</li>
            </ul>
          </div>
        </section>
        <section>
          <div className='container'>
            <h2 className='task-title'>
              Completed task (n)
            </h2>
          </div>
          <div className="container">
            <ul className='task-list'>
              <li className='task'>task</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
