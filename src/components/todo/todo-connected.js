import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax';
import Pagination from './page';
import ToggleShowProvider from '../context/showHide';
import ToggleHideShow from './hideShowToggle';
import PaginationContext from '../context/pagenation';
import ChangeNumberOfPages from './itemPerPage';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './todo.scss';



const ToDo = () => {

  const [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list] = useAjax();

  useEffect(_getTodoItems, []);

  return (
    <>
      <Container>
        <ToggleShowProvider list={list}>
          <Row className="justify-content-md-center">
            <Col><h2>
              There are {list.filter(item => item.complete == 'pending').length} Items To Complete
        </h2></Col>
            <Col>  <ToggleHideShow /> </Col>
          </Row>
          <Row className="todo">
            <Col className="form">
              <div>
                <TodoForm handleSubmit={_addItem} />
              </div></Col>
            <PaginationContext list={list}>
              <Col >
                <ChangeNumberOfPages />
                <TodoList
                  handleComplete={_toggleComplete}
                  handleDelete={_deleteItem}
                />
                <Row >
                  <Pagination
                    totalItems={list.length}
                  />
                </Row>
              </Col>
            </PaginationContext>
          </Row>
        </ToggleShowProvider>
      </Container>
    </>
  );
};

export default ToDo;