import {makeAutoObservable, action} from 'mobx'
import {ChangeEvent} from "react";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.random(),
    text,
    done: false,
  },
];
// MobX Implementation
class Store {
    todos: Todo[] = [];
    newTodo: string = "";

    constructor() {
        makeAutoObservable(this)
    }

    async load(url: string) {
        const res = await fetch(url)
        res.json().then<Todo[]>(action("load", r => store.todos = r))

    }

    onChangeTodoText(e: ChangeEvent<HTMLInputElement>, id: number) {
         const changeableTodo = this.todos.find(t => t.id && t.id === id)
             if(changeableTodo) changeableTodo.text = e.target.value
    }

    onChangeNewTodo(e: ChangeEvent<HTMLInputElement>) {
        this.newTodo = e.target.value
    }

    addTodo() {
        this.todos = addTodo(this.todos, this.newTodo)
        this.newTodo = ""
    }
    removeTodo(id: number) {
        this.todos = removeTodo(this.todos, id)
    }
}

const store = new Store()
export default store;