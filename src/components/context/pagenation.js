import React,{useState} from 'react';

export const PaginationContext = React.createContext();

function Pagination (props) {
  
    const [itemPerPage, setItemPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const list = props.list.sort((a,b)=> a.difficulty > b.difficulty ? 1 : -1);
    let currentItem = list.slice(indexOfFirstItem, indexOfLastItem);

       const paginate = pageNumber => setCurrentPage(pageNumber);
       const setItem = numberOfPages => setItemPerPage(numberOfPages);
       const setcurrentItem = result =>  {
           setItemPerPage(itemPerPage)
           currentItem = result};


    let state={
        itemPerPage,
        setItemPerPage:setItemPerPage,
        currentPage,
        setCurrentPage:setCurrentPage,
        currentItem,
        setItem,
        paginate,
        setcurrentItem
    }

    return (
      <PaginationContext.Provider value={state}>
        {props.children}
      </PaginationContext.Provider>
    );
  
}

export default Pagination;