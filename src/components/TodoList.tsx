import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import store, {Todo} from "../store"
import {observer } from "mobx-react-lite"

function TodoListItems() {
  return (
    <>
      {store.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => todo.done = !todo.done}/>
          <Input mx={2} value={todo.text} onChange={e => store.onChangeTodoText(e, todo.id)} placeholder={`${todo.id}`} />
          <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

const TodoListItemsObserver = observer(TodoListItems)

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItemsObserver />
    </>
  );
}

export default TodoList;
