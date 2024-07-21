import Product from './Product.jsx';

function ProductTab() {
    //let option=[<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
    let option=["hi-tech", "durable", "fast"];
    return (
        <>
            <Product 
                title="Phone" 
                price={30000} 
                features={option}
            />
            <Product 
                title="Laptop" 
                price={97000}
                features={option}
            />
            <Product 
                title="Tv" 
                price={55000}
                features={option}
            />
        </>
    );
}

export default ProductTab;