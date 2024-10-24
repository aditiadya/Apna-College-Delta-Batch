const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//serving static files : incase when we want to template files with html, css and javascript
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

//using ejs in our code
app.set("view engine", "ejs");  //sets view engine to ejs
app.set("views", path.join(__dirname, "/views"))    //this is used so that we can run the code from parent directory too

// app.get("/", (req, res) => {
//     res.send("this is home");
// });

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() *6)+1;
    res.render("rolldice.ejs", {diceVal});
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    let data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data});
        console.log(data);
    }
    else{
        res.render("error.ejs");
    }
    console.log(data);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//interpolation syntax: interpolation regers to embedding expressions into marked up text.


//Tags
// <% 'Scriptlet' tag, for control-flow, no output
// <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
// <%= Outputs the value into the template (HTML escaped)
// <%- Outputs the unescaped value into the template
// <%# Comment tag, no execution, no output
// <%% Outputs a literal '<%'
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline
// _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it