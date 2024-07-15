let btn1 = document.querySelector("#btn-1");
btn1.addEventListener("click", async ()=> {
    let fact = await getFacts();
    let para = document.querySelector("#result");
    para.innerText = fact;
});

let btn2 = document.querySelector("#btn-2");
btn2.addEventListener("click", async ()=> {
    let link = await getPictures();
    let img = document.querySelector("#picture");
    img.setAttribute("src", link);
});

//axios : library to make HTTP requests
let url1 = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url1);
        return res.data.fact;
    }
    catch(error){
        console.log("ERROR - ", error);
        return "No fact found";
    }
}
url2 = "https://dog.ceo/api/breeds/image/random";
async function getPictures(){
    try{
        let res = await axios.get(url2);
        console.log(res);
        return res.data.message;
    }
    catch(error){
        console.log("ERROR - ", error);
        return "No fact found";
    }
}

