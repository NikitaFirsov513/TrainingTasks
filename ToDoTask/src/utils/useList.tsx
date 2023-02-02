import React, {
  useCallback,
  useReducer,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { ITask } from "../App";

type ActionType = { type: "ADD_ONE"; text: string } | { type: "REMOVE_ALL" };

type UseListManagerResult = ReturnType<typeof useListManager>;

const ListContext = createContext<UseListManagerResult>({
  todos: [],
  addOne: () => {},
  removeAll: () => {},
});

function useListManager(initialTodos: ITask[]): {
  todos: ITask[];
  addOne: (text: string) => void;
  removeAll: () => void;
} {
  const [todos, dispatch] = useReducer((state: ITask[], action: ActionType) => {
    switch (action.type) {
      case "ADD_ONE":
        return [...state, { text: action.text, isDone: false }];
      case "REMOVE_ALL":
        return [];
      default:
        throw new Error();
    }
  }, initialTodos);

  const addOne = useCallback((text: string) => {
    dispatch({
      type: "ADD_ONE",
      text,
    });
  }, []);

  const removeAll = useCallback(() => {
    dispatch({
      type: "REMOVE_ALL",
    });
  }, []);
  return { todos, addOne, removeAll };
}

export const ListProvider: React.FunctionComponent<{
  initialTodos: ITask[];
  children: ReactNode;
}> = ({ initialTodos, children }) => (
  <ListContext.Provider value={useListManager(initialTodos)}>
    {children}
  </ListContext.Provider>
);
export const useList = (): ITask[] => {
  const { todos } = useContext(ListContext);
  return todos;
};

export const useAddOne = (): UseListManagerResult["addOne"] => {
  const { addOne } = useContext(ListContext);
  return addOne;
};

export const useRemoveTodo = (): UseListManagerResult["removeAll"] => {
  const { removeAll } = useContext(ListContext);
  return removeAll;
};
