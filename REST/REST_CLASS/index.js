const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "aditiadya",
        content: "I kinda like coding :/"
    },
    {
        id: uuidv4(),
        username: "muahh",
        content: "I love you. muahhh UwU"
    },
    {
        id: uuidv4(),
        username: "lalalala",
        content: "I am a joke T_T"
    },
];

//some pre-defined posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// show the new post created with the older ones
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// add new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");     //redirects to the /posts page when submit button is clicked.
});

// show the posts in detail
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);  //finding post whose id matches in the posts array
    res.render("show.ejs", { post });     //redirects to the /posts page when submit button is clicked
});

//to update an existing post's content
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);  //finding the id that matches in the posts array
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

//to delete a post
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});

