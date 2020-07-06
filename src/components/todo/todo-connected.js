import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../hooks/useAjax'

const ToDo = () => {

  const [_addItem, _toggleStatus, _getItems, _deleteItem, list] = useAjax();

  useEffect(_getItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => item.complete === 'pending').length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleStatus}
            handleDelete={_deleteItem}

          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
