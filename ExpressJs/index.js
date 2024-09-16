const express = require("express");
const app = express();

//console.dir(app);

//ports are logical endpoints of a network connection that is used to exchnage information between a web server and a web client.
let port = 3000;

//this will keep listening to the requests that are coming to the server.
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


//whenever a request comes to the server, the below code will get executed.
// app.use((req, res) => {
//     console.log("request recieved");

//     //sending response from our server to the client side
//     //res.send({name:"apple", color: "red"});
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Mango</li></ul>"
//     res.send(code);
// });

//routing: it is a process of selecting a path for traffic in a network or between or across multiple networks.
app.get("/", (req, res) => {
    res.send("this is root path.")
});
app.get("/apple", (req, res) => {
    res.send("this is apple path.")
});
app.get("/orange", (req, res) => {
    res.send("this is orange path.")
});
// app.get("*", (req, res) => {
//     res.send("this path does not exists.")
// });
app.post("/", (req, res) => {
    res.send("you sent a post request to root");
});

app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Welcome to the page of @${username}`)
})

app.get("/search", (req, res) => {
    console.log(req.query);
    let {q} = req.query;
    res.send(`these are the search results for query : ${q}`);
})