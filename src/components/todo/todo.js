import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import {Container, Navbar} from 'react-bootstrap';

function ToDo() {
  let [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let lists = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 10 },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 5 },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 2 },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3 },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1 },
    ];
    setList([lists[0], lists[1], lists[2], lists[3], lists[4]]);
  }, []);



  const _addItem = (items) => {
    items._id = Math.random();
    items.complete = false;
    items && setList([...list, items]);
  };

  const _toggleStatus = id => {
    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let lists = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(lists);
    }

  };
  useEffect(() => {
    setCount(list.filter(item => !item.complete).length);
    document.title = `There are ${count} Items To Complete`;
  }, [count, list]);

  return (
    <>
      
        <Container>
        <Navbar bg="dark" variant="dark" style={{marginTop: 2+'em'}}>
        <Navbar.Brand >There are {count} Items To Complete</Navbar.Brand>
        
        </Navbar>
        
      <section className="todo">

<div className="form-border">
  <TodoForm handleSubmit={_addItem} />
</div>

<div className="list-group">
  <TodoList
    list={list}
    handleComplete={_toggleStatus}
  />
</div>
</section>
        </Container>
    </>
  );
}



export default ToDo;

