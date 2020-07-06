import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import useForm from '../hooks/form_hooks';


function TodoForm(props) {
  const [handleSubmit, handleChange, item] = useForm(handleForm);

  function handleForm(item){
    props.handleSubmit(item);
  }

  return (
    <>
      <Form onSubmit={handleSubmit} >
        <Form.Group controlId="formBasicEmail" >
          <h3>Add Item</h3>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control type="text" name="text" placeholder="Add To Do List Item"
            onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficutly Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="10" name="difficulty" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ width: '20%' }}>
          Add Item
  </Button>
      </Form>
    </>
  );
}


export default TodoForm;