import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const items = [
  { id: 1, name: "John", age: 34 },
  { id: 2, name: "Teach", age: 34 },
  { id: 3, name: "Tommy", age: 34 },
  { id: 4, name: "Sussy", age: 34 },
  { id: 5, name: "Dauther", age: 34 },
  { id: 6, name: "Scared", age: 34 },
  { id: 7, name: "Teach", age: 34 },
  { id: 8, name: "Lussy", age: 34 },
  { id: 9, name: "John2", age: 34 },
  { id: 10, name: "RED", age: 34 },
  { id: 1, name: "John", age: 34 },
  { id: 2, name: "Teach", age: 34 },
  { id: 3, name: "Tommy", age: 34 },
  { id: 4, name: "Sussy", age: 34 },
  { id: 5, name: "Dauther", age: 34 },
  { id: 6, name: "Scared", age: 34 },
  { id: 7, name: "Teach", age: 34 },
  { id: 8, name: "Lussy", age: 34 },
  { id: 9, name: "John2", age: 34 },
  { id: 10, name: "RED", age: 34 },
  { id: 1, name: "John", age: 34 },
  { id: 2, name: "Teach", age: 34 },
  { id: 3, name: "Tommy", age: 34 },
  { id: 4, name: "Sussy", age: 34 },
  { id: 5, name: "Dauther", age: 34 },
  { id: 6, name: "Scared", age: 34 },
  { id: 7, name: "Teach", age: 34 },
  { id: 8, name: "Lussy", age: 34 },
  { id: 9, name: "John2", age: 34 },
  { id: 10, name: "RED", age: 34 },
  { id: 1, name: "John", age: 34 },
  { id: 2, name: "Teach", age: 34 },
  { id: 3, name: "Tommy", age: 34 },
  { id: 4, name: "Sussy", age: 34 },
  { id: 5, name: "Dauther", age: 34 },
  { id: 6, name: "Scared", age: 34 },
  { id: 7, name: "Teach", age: 34 },
  { id: 8, name: "Lussy", age: 34 },
  { id: 9, name: "John2", age: 34 },
  { id: 10, name: "RED", age: 34 },
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <div className="cards shadow p-5">
              <h3>My name is {item.name}</h3>
              <h5>Age: {item.age}</h5>
            </div>
          </div>
        ))}
    </>
  );
}

export default function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <Items currentItems={currentItems} />
          <ReactPaginate
            className="lorem"
            breakLabel="..."
            // nextLabel={false}
            onPageChange={handlePageClick}
            // pageRangeDisplayed={0}
            marginPagesDisplayed={1}
            activeClassName='activeItem'
            pageCount={pageCount}
            // previousLabel={false}
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}
