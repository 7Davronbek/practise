import axios from "axios";
import React, { useEffect, useState } from "react";

const CorsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:8080/order");
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          {products &&
            products.map((item) => (
              <>
                {item.productId.name}
                <h5 key={item.id}>{item.price}</h5>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CorsPage;
