import { useState } from "react"

export default function Counter() {
    // let count=0;
    let[stateVariable, setStateVariable] = useState(10);
    let[count, setCount] = useState(0);
    
    function incCount() {
        setCount(count+1);
        console.log(count);
    }

    // function incCount() {
    //     count++;
    //     console.log(count);
    // }
    return(
        <div>
            <button onClick={incCount}>Increase count</button>
            <h3>Count={count}</h3>
        </div>
    )
}