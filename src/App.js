import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useState} from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  
  // eslint-disable-next-line
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: "Go To School",
      day: "22nd of December",
      reminder: true
      },
      {
      id: 2,
      text: "Go To Church",
      day: "23rd of December",
      reminder: true
      },
      {
        id: 3,
        text: "Go To Supermarket",
        day: "24th of December",
        reminder: false
        },

  ]);
  //addTask
  const addTask = (task) => {
    //console.log(task);
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  //delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //toggle a reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task 
    ))
  }
  return (
    <Router>
    <div className="container">

      <Header 
      onAdd={ () => setShowAddTask(!showAddTask) } 
      showAdd={showAddTask} />

       <Route 
       path="/" 
       exact
       render={(props) => (
         
        <>
        {showAddTask && <AddTask onAdd={addTask}/>}
        { tasks.length > 0 ?
         <Tasks 
         tasks={tasks} 
         onDelete={deleteTask} 
         onToggle={toggleReminder}/> 
         : 'No Task to display'}
         </>

       )}/>
       <Route path="/about" component={About}/>
       <Footer />

    </div>
    </Router>
  );
}

export default App;
