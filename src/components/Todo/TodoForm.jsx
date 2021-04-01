import React, { useState } from 'react';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { name: todo, completed: false, id: new Date().getTime() }]);
    setTodo('');
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col lg={9} xl={9}>
          <Form.Group>
            <Form.Control
              value={todo}
              onChange={onChange}
              placeholder="Inserte your Task"
            />
          </Form.Group>
        </Col>
        <Col>
          <Button disabled={!todo.trim()} type="submit">Add Todo</Button>
        </Col>
      </Row>
    </Form>
  );
}
