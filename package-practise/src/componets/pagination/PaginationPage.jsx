//import React, { useState } from "react";
//
//const PaginationPage = () => {
//  const [items, setItems] = useState([
//    { id: 1, name: "lorem" },
//    { id: 1, name: "lorem" },
//    { id: 1, name: "lorem" },
//    { id: 1, name: "lorem" },
//    { id: 1, name: "lorem" },
//  ]); // Replace [...] with your initial items array
//  const [currentPage, setCurrentPage] = useState(1);
//  const [itemsPerPage] = useState(10);
//  const [sortBy, setSortBy] = useState(null);
//  const [sortOrder, setSortOrder] = useState("asc");
//
//  // Inside MyComponent
//
//  const handleSort = (property) => {
//    if (sortBy === property) {
//      // If already sorted by the same property, toggle the sort order
//      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//    } else {
//      // Sort by the selected property in ascending order
//      setSortBy(property);
//      setSortOrder("asc");
//    }
//  };
//
//  // Use the sortedItems array for rendering instead of the items array
//
//  let sortedItems = [...items];
//  if (sortBy) {
//    sortedItems = sortedItems.sort((a, b) => {
//      if (sortOrder === "asc") {
//        return a[sortBy] - b[sortBy];
//      } else {
//        return b[sortBy] - a[sortBy];
//      }
//    });
//  }
//
//  // Inside MyComponent
//
//  const indexOfLastItem = currentPage * itemsPerPage;
//  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
//
//  const paginate = (pageNumber) => {
//    setCurrentPage(pageNumber);
//  };
//
//  // Use the currentItems array for rendering instead of the items array
//
//  // Render pagination buttons or component to navigate between pages
//  // Call the paginate function with the selected page number to update the current page state
//  // Implement sorting logic and update the items state based on the sorting criteria
//
//  // Inside MyComponent
//
//  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
//
//  const renderPagination = () => {
//    if (totalPages <= 1) {
//      return null; // No need to render pagination if there is only one page
//    }
//
//    const pageNumbers = [];
//    for (let i = 1; i <= totalPages; i++) {
//      pageNumbers.push(i);
//    }
//
//    return (
//      <ul className="pagination">
//        {pageNumbers.map((pageNumber) => (
//          <li
//            key={pageNumber}
//            className={currentPage === pageNumber ? "active" : ""}
//            onClick={() => paginate(pageNumber)}
//          >
//            {pageNumber}
//          </li>
//        ))}
//      </ul>
//    );
//  };
//
//  return (
//    <div>
//      {/* Render the paginated and sorted items */}
//      {currentItems.map((item) => (
//        // Render each item
//        <div key={item.id}>{item.name}</div>
//      ))}
//
//      {/* Render the pagination */}
//      {renderPagination()}
//    </div>
//  );
//};
//
//export default PaginationPage;
//

// Inside MyComponent

import React from 'react'

const PaginationPage = () => {
    const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
    
    const renderPagination = () => {
      if (totalPages <= 1) {
        return null; // No need to render pagination if there is only one page
      }
    
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    
      const handlePrevClick = () => {
        if (currentPage > 1) {
          paginate(currentPage - 1);
        }
      };
    
      const handleNextClick = () => {
        if (currentPage < totalPages) {
          paginate(currentPage + 1);
        }
      };
    
      return (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={handlePrevClick}
          >
            Prev
          </button>
    
          {currentPage > 3 && (
            <button onClick={() => paginate(1)}>1</button>
          )}
    
          {currentPage > 4 && <span>...</span>}
    
          {pageNumbers.map((pageNumber) => {
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <button
                  key={pageNumber}
                  className={currentPage === pageNumber ? 'active' : ''}
                  onClick={() => paginate(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            }
            return null;
          })}
    
          {currentPage < totalPages - 3 && <span>...</span>}
    
          {currentPage < totalPages - 2 && (
            <button onClick={() => paginate(totalPages)}>
              {totalPages}
            </button>
          )}
    
          <button
            disabled={currentPage === totalPages}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      );
    };
    
    return (
      <div>
        {/* Render the paginated and sorted items */}
        {currentItems.map((item) => (
          // Render each item
          <div key={item.id}>{item.name}</div>
        ))}
    
        {/* Render the pagination */}
        {renderPagination()}
      </div>
    );
}

export default PaginationPage

