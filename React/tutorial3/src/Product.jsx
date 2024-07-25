import Price from "./Price";
import "./Product.css"

export default function Product({title, features, idx}){
    let oldPrices=["₹12,495", "₹11,900", "₹1,599", "₹599"];
    let newPrices=["₹8,999", "₹9,199", "₹899", "₹278"];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>
                {features.map((feature) => (
                    <ul>{feature}</ul>
                ))}
            </p>
            <Price
                oldPrice={oldPrices[idx]}
                newPrice={newPrices[idx]}
            />
        </div>
    );
}