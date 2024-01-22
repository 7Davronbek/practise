import React, { useState } from 'react';

const CartImpl = () => {
    const [availableProducts, setAvailableProducts] = useState([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
    ]);

    const [selectedProducts, setSelectedProducts] = useState([]);

    const addToSelectedProducts = (product) => {
        const newProduct = { ...product, count: 1 };
        setSelectedProducts([...selectedProducts, newProduct]);
        removeProduct(product.id);
    };

    const removeProduct = (productId) => {
        const updatedProducts = availableProducts.filter(
            (product) => product.id !== productId
        );
        setAvailableProducts(updatedProducts);
    };

    const increaseCount = (productId) => {
        const updatedSelectedProducts = selectedProducts.map((product) => {
            if (product.id === productId) {
                return { ...product, count: product.count + 1 };
            }
            return product;
        });
        setSelectedProducts(updatedSelectedProducts);
    };

    const decreaseCount = (productId) => {
        const updatedSelectedProducts = selectedProducts.map((product) => {
            if (product.id === productId && product.count > 1) {
                return { ...product, count: product.count - 1 };
            }
            return product;
        });
        setSelectedProducts(updatedSelectedProducts);
    };

    const removeSelectedProduct = (productId) => {
        const removedProduct = selectedProducts.find(
            (product) => product.id === productId
        );
        setSelectedProducts(
            selectedProducts.filter((product) => product.id !== productId)
        );
        setAvailableProducts([...availableProducts, removedProduct]);
    };

    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {availableProducts.map((product) => (
                    <li key={product.id}>
                        {product.name}{' '}
                        <button onClick={() => addToSelectedProducts(product)}>Add</button>
                    </li>
                ))}
            </ul>

            <h2>Selected Products</h2>
            <ul>
                {selectedProducts.map((product) => (
                    <li key={product.id}>
                        {product.name} - Count: {product.count}{' '}
                        <button onClick={() => increaseCount(product.id)}>+</button>
                        <button onClick={() => decreaseCount(product.id)}>-</button>
                        <button onClick={() => removeSelectedProduct(product.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartImpl;