import "./App.css";
import "bootstrap";
import { FormContainer } from "./components/FormContainer/FormContainer";
import { ListTasks } from "./components/ListTasks/ListTasks";
import { useState } from "react";
import { Footer } from "./components/Footer/Footer";

export interface ITask {
  text: string;
  isDone: boolean;
}

function App() {
  return (
    <div className="app">
      <div className="app__conteiner">
        <h1>Daily To Do List</h1>
        <FormContainer />
        <ListTasks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
