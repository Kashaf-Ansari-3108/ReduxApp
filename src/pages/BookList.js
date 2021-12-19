import React from 'react'
import { useSelector } from "react-redux";

const BookList = () => {
    const book = useSelector((state) => state.books);
    console.log(book);
    return (
        <div>
           <h1>Book List</h1>
         {book.map((i)=>(
         <div>
         <h1>{i.title}</h1>
         <p>{i.price}</p>
         </div>))}
        </div>
    )
}

export default BookList
