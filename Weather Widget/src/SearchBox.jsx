import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox () {
    let [city , setCity] = useState("");
    let handleChange = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /> <br />
                <Button variant="contained" type="submit" endIcon={<SearchIcon />}>
                Search
                </Button>
            </form>
        </div>
    );
}