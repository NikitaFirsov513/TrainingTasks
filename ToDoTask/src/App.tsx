import "./App.css";
import "bootstrap";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { ListTasks } from "./components/ListTasks/ListTasks";
import { useState } from "react";

export interface ITask {
  text: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    { text: "Задача 1", isDone: true },
  ]);
  return (
    <div className="app">
      
      <div className="app__conteiner">
        <h1>Daily To Do List</h1>
        <FormContainer tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
