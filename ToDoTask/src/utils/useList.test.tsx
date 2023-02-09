import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ListProvider } from "./useList";
import { ITask } from "../App";
import { ListTasks } from "../components/ListTasks/ListTasks";

const customRender = (ui: ReactNode, initialTodos: ITask[]) => {
  return render(<ListProvider initialTodos={initialTodos}>{ui}</ListProvider>);
};

//[{ text: "Test", isDone: true }]
test("Check add to list", () => {
  const initialTodos = [{ text: "Test", isDone: true }];
  customRender(<ListTasks />, initialTodos);
  expect(screen.getByText(/^Test/).textContent).toBe("Test");
});
