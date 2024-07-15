let jsonRes = '{"fact":"A cat can sprint at about thirty-one miles per hour.","length":52}';

//Parse : to parse(means changing from one data format to another data format) a string data into a JS object
let validRes = JSON.parse(jsonRes);     
console.log(validRes);
console.log(validRes.fact);

//Stringify : to parse a JS object into JSON 
let validS = JSON.stringify(validRes);
console.log(validS);

//testing api requests using these tools : 1)hoppscotch   2)postman

//ajax : asynchronous javascript and xml

//status codes : 1) 200 - ok  2) 404 - not found  3) 400 - bad request  4) 500 - internal server error  etc.

//adding info in URLs : https://www.google.com/search?q=harry+potter  -> key=q(query), value=harry+potter
//https://www.google.com/search?name=aditi&marks=95


//API request using fetch

let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((response) => {
//         //console.log(response.json());   //returns a promise
//         return response.json();
//     })
//     .then((data)=>{
//         console.log("data1 : ", data.fact);
//         return fetch(url);
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .then((data2)=>{
//         console.log("data2 : ", data2.fact);
//     })
//     .catch((error) => {
//         console.log("ERROR - ", error);
//     });

//same thing using async and await :
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(error){
        console.log("ERROR - ", error);
    }
    console.log("bye!!");
}
getFacts();