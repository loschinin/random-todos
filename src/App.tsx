import * as React from "react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export const App = () => {
  return (
    <Container className="bg-dark p-3">
      <Row className={"mb-3"}>
        <Col className="col-3">
          <div className={"h1 text-light"}>To do List</div>
        </Col>
        <Col className="col-9">
          <TopBar />
        </Col>
      </Row>

      <TodoList />
      <TodoAdd />
    </Container>
  );
};
