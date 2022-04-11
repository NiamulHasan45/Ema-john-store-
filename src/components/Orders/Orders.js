import React from 'react';
import useCart from '../../hook/useCart/UseCart';
import useProducts from '../../hook/UseProducts/UsePoroducts';
import Cart from '../Cart/Cart';
import ReviewProducts from '../ReviewProducts/ReviewProducts';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    console.log(useCart);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewProducts
                        key={product.id}
                        product={product}
                    ></ReviewProducts>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};


export default Orders;