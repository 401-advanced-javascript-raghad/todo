import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

const toDoApi = "https://github.com/401-advanced-javascript-raghad/todo";
const ToDo = () => {

  const [list, setList] = useState([]);

  const _addItem = (item) => {
    item.due = new Date();
    fetch(toDoApi, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(items => {
        setList([...list, items])
      })
      .catch(console.error);
  };

  const _toggleStatus = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let URL = `${toDoApi}/${id}`;
      fetch(URL, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(items => {
          setList(list.map(listItem => listItem._id === item._id ? items : listItem));
        })
        .catch(console.error);
    }
  };

  const _getItems = () => {
    fetch(toDoApi, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
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
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;
