import { useEffect } from "react";
import { useState } from "react";

export default function Joker() {

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect( () => {
        async function getFirstJoke(){
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    }, []);

    let [joke, setJoke] = useState({});
    return(
        <div>
            <h3>Joker</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>Get Jokes</button>
        </div>
    );
}