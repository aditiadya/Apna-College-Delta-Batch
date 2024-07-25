import Product from "./Product.jsx";
import Price from "./Price.jsx";

function ProductTab(){
    let styles={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div style={styles}>
            <Product
                title="Logitech MX Master"
                features={["8000 DPI", "5 Programmable Button"]}
                idx={0}
            />
            <Product
                title="Apple Pencil 2nd Gen"
                features={["Intutive Surface", "Designed for iPad Pro"]}
                idx={1}
            />
            <Product
                title="Zebronics Zeb-transformer"
                features={["5 Programmable Button", "Intutive Surface"]}
                idx={2}
            />
            <Product
                title="Petronic Toad 23"
                features={["Wireless", "Optical Orientation"]}
                idx={3}
            />
        </div>
    );
}

export default ProductTab;