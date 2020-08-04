import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function List() {
  return (
    <ListGroup>
      <ListGroup.Item>React</ListGroup.Item>
      <ListGroup.Item>Javascript</ListGroup.Item>
      <ListGroup.Item>CSS</ListGroup.Item>
    </ListGroup>
  );
}

export default List;
