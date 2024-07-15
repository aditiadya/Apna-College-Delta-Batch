//updating query string with api requests

let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async ()=> {
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    
    showColleges(colleges);
});

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(error){
        console.log("ERROR - ", error);
        return [];
    }
}

function showColleges(colleges){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colleges) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

