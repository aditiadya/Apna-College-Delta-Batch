export default function Price({oldPrice, newPrice}){
    let oldStyles={
        textDecorationLine: "line-through",
    }
    let newStyles={
        fontWeight: "bold",
    }
    let styles={
        backgroundColor: "black",
        height:"40px",
        width:"280px",
        borderBottomLeftRadius: "24px",
        borderBottomRightRadius: "24px",
    }
    return(
        <div className="Price" style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}