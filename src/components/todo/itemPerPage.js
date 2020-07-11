import React, { useContext } from 'react';
import { PaginationContext } from '../context/pagenation'


function ChengeNumberOfPages () {

    const pagination = useContext(PaginationContext);
    const changHandler = (e) => {
        pagination.setItem(e.target.value)
    }
    return (
        <>
            <select onChange={changHandler}>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='6'>6</option>
            </select>
        </>
    );

}

export default ChengeNumberOfPages;