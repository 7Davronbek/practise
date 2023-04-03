import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}`
    );
    const json = await response.json();
    setData(json);
    console.log(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h5>{item.id}</h5>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage}>Next Page</button>
        </div>
      )}
    </div>
  );
};

export default FetchData;
