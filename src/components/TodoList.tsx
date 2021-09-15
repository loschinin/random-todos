import * as React from "react";
import { FC } from "react";
import store, { Todo } from "../store";
import { observer } from "mobx-react-lite";
import { CloseButton, FormControl, InputGroup } from "react-bootstrap";

const TodoListItems: FC = () => (
  <>
    {store.todos.map((todo: Todo) => (
      <InputGroup className="mb-3" key={todo.id}>
        <InputGroup.Text className="bg-dark">
          <input
            onClick={() => (todo.completed = !todo.completed)}
            className={"form-check-input mt-0 p-3 bg-secondary"}
            type={"checkbox"}
          />
        </InputGroup.Text>

        <FormControl
          value={todo.title}
          onChange={(e) => store.onChangeTodoText(e, todo.id)}
          placeholder={`${todo.id}`}
          className={"fs-5 bg-dark text-light"}
        />
        <InputGroup.Text className="bg-dark">
          <CloseButton
            onClick={() => store.removeTodo(todo.id)}
            className="btn-close-white"
          />
        </InputGroup.Text>
      </InputGroup>
    ))}
  </>
);

const TodoList = observer(TodoListItems);

export default TodoList;
