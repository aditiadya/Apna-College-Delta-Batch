import "./Product.css"

export default function Product({ title, price, features }) {
    let isDiscount=price>=60000;
    let styles={backgroundColor: isDiscount ? "#111112" : ""}
    return (
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price : ₹ {price}</h5>
            <p>
                {features.map((feature) => (
                    <li>{feature}</li>
                ))}
            </p>
            {isDiscount ? <p>Discount of 5%</p>: <button className="button">Get Discount</button>}
            {/* {price>=50000 && <p>Discount of 5%</p>} */}
        </div>
    )
}