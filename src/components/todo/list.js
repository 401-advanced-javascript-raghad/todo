import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function TodoList({ list, handleComplete, handleDelete }) {
  return (
    <ListGroup className="ul">
      {
        list.map(item => (
          <ListGroup.Item
            className={`complete-${item.complete} li`}
            key={item._id}
          >
            <span onClick={() => handleComplete(item._id)}>
              {item.text} ~~ {item.complete} ~~ {item.assignee}

            </span>

            <button onClick={() => handleDelete(item._id)}> x </button>
          </ListGroup.Item>
        ))
      }
    </ListGroup >
  );
}

export default TodoList;