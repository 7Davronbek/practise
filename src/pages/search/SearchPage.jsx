import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [chosenProduct, setChosenProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [list, setList] = useState([]);
  const [counts, setCounts] = useState({});

  const handleSearch = () => {
    axios
      .get(`http://192.168.1.6:8000/main/product-list/?name=${searchQuery}`)
      .then((response) => {
        const products = response.data;
        setChosenProduct(products);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const addToList = (item) => {
    if (!list.includes(item)) {
      setList([...list, item]);
      setCounts({ ...counts, [item]: 1 });
    }
  };

  const increaseCount = (item) => {
    setCounts({ ...counts, [item]: counts[item] + 1 });
  };

  const decreaseCount = (item) => {
    if (counts[item] > 1) {
      setCounts({ ...counts, [item]: counts[item] - 1 });
    }
  };

  return (
    <div className="SearchPage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {list &&
              list.map((item) => (
                <h6 key={item.id}>
                  {item.name} <span onClick={() => decreaseCount(item)}>-</span>{" "}
                  {item} - {counts[item]}{" "}
                  <span onClick={() => increaseCount(item)}>+</span>
                </h6>
              ))}
            <div className="inputWrap">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              {searchQuery.length !== 0 && (
                <div className="wrap">
                  {chosenProduct !== null &&
                    chosenProduct.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => addToList(item)}
                        className="col-lg-4"
                      >
                        <h6>{item.name}</h6>
                        <h6>{item.number_hash}</h6>
                      </div>
                    ))}
                  {chosenProduct.length === 0 && <h5>Nothing found</h5>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
