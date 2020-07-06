import { useState } from 'react';
import axios from 'axios';

const toDoApi = "http://api-testtt.herokuapp.com/api/v1/todo";

function useAjax() {

    const [list, setList] = useState([]);

    const _addItem = (item) => {
        item.due = new Date();
        axios({
            url:toDoApi,
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(item)
          })
            .then(response => {
                setList([...list, response.data])
                })
            .catch(console.error);
    };

    const _toggleStatus = id => {
        let item = list.filter(i => i._id === id)[0] || {};
        if (item._id) {
            item.complete = item.complete === 'complete' ? 'pending' : 'complete';
            let url = `${toDoApi}/${id}`;
            axios({
                url:url,
                method: 'put',
                mode: 'cors',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify(item)
              })
                .then(response => {
                    setList(list.map(listItem => listItem._id === item._id ? response.data :listItem));
                    })
                .catch(console.error);
        }
    };

    const _getItems = (item) => {
        axios.get(toDoApi)
            .then(response => {
                setList(response.data.result)
                })
            .catch(console.error);
    };

    const _deleteItem = (id) => {
        let item = list.filter(i => i._id === id)[0] || {};
        let url = `${toDoApi}/${id}`;
        axios({
            url:url,
            method: 'delete',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
          })
            .then(response => {
                setList(list.filter(listItem => listItem._id != item._id ));
                })
            .catch(console.error);
    };
    return [_addItem, _toggleStatus, _getItems, _deleteItem, list];
}

export default useAjax;