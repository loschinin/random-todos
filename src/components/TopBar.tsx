import * as React from "react";
import { FC } from "react";
import store from "../store";
import { Button } from "react-bootstrap";

const url = "https://jsonplaceholder.typicode.com/todos";

const TopBar: FC = () => {
  return (
    <Button
      variant="outline-secondary"
      className={"fs-5"}
      onClick={() => store.load(url)}
    >
      Load
    </Button>
  );
};

export default TopBar;
