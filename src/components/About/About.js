import React from 'react';
import useProducts from '../../hook/UseProducts/UsePoroducts';

const About = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>I am not gonna finish yet.</h2>
            <h4>Array length:{products.length}</h4>

        </div>
    );
};

export default About;