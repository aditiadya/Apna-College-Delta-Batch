import { useState, useEffect } from "react"

export default function Counter() {
    let[countx, setCountx] = useState(0);
    let[county, setCounty] = useState(0);

    
    function incCountx() {
        setCountx(countx+1);
        console.log(countx);
    }
    function incCounty() {
        setCounty(county+1);
        console.log(county);
    }

    //useEffect function 
    useEffect(function printSomething(){
        console.log("This is side-effect");
    }, [countx])
    return(
        <div>
            <h3>Countx={countx}</h3>
            <button onClick={incCountx}>Increase countx</button>
            <h3>County={county}</h3>
            <button onClick={incCounty}>Increase county</button>
        </div>
    )
}