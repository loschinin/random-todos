import { makeAutoObservable, action } from "mobx";
import { ChangeEvent } from "react";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const addTodo = (todos: Todo[], title: string): Todo[] => [
  ...todos,
  {
    id: Math.random(),
    title,
    completed: false,
  },
];

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

/** MobX */

class Store {
  todos: Todo[] = [];
  newTodo: string = "";

  constructor() {
    makeAutoObservable(this);
  }

  async load(url: string) {
    const res = await fetch(url);

    res
      .json()
      .then<Todo[]>(
        action("load", (r) => (store.todos = r.splice(0, Math.random() * 10)))
      );
  }

  onChangeTodoText(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: number
  ) {
    const changeableTodo = this.todos.find((t) => t.id && t.id === id);
    if (changeableTodo) changeableTodo.title = e.target.value;
  }

  onChangeNewTodo(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.newTodo = e.target.value;
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = "";
  }
  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }
}

const store = new Store();
export default store;
