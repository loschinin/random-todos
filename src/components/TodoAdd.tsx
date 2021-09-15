import * as React from "react";
import store from "../store";
import { observer } from "mobx-react-lite";
import { Button, Form, InputGroup } from "react-bootstrap";

const TodoAdd = () => {
  return (
    <InputGroup>
      <Form.Control
        placeholder="New todo"
        value={store.newTodo}
        onChange={(e) => store.onChangeNewTodo(e)}
        className={"fs-5 bg-dark text-light"}
        size={"lg"}
      />
      <Button
        variant="outline-primary"
        onClick={() => store.addTodo()}
        className={"fs-5"}
      >
        Add Task
      </Button>
    </InputGroup>
  );
};

export default observer(TodoAdd);
