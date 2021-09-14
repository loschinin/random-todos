import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import store from "../store"
import {observer } from "mobx-react"

function TodoAdd() {
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo" value={store.newTodo} onChange={e => store.newTodo = e.target.value} />
      <Button onClick={() => store.addTodo()}>Add Task</Button>
    </Grid>
  );
}

export default observer(TodoAdd);
