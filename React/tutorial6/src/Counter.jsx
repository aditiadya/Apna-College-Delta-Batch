import { useState } from "react"

function init(){
    console.log("init was executed.");
    return Math.random();
}

export default function Counter() {
    // let count=0;
    //let[stateVariable, setStateVariable] = useState(10);
    let[count, setCount] = useState(init);
    
    //callbacks in set state function
    function incCount() {
        setCount((currCount)=> {
            return currCount+1;
        });
        setCount((currCount)=> {
            return currCount+1;
        });
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