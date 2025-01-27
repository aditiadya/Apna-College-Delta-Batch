const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const exp = require("constants");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "123456",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
};

//insert new data
// let q="INSERT INTO user(id, username, email, password) VALUES ?";

//inserting data manually
// let user=["123", "123_newuser", "abc@gmail.com", "abc"];
// let users=[
//     ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//     ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
// ];

// //inserting fake data for 100 users from the faker package
// let data=[];
// for(let i=0;i<100;i++){
//     data.push(getRandomUser());
// }

//express server starts

//home page
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//show users route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//update route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formpass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formpass != user.password) {
        res.send("Wrong password");
      }
      else {
        let q2 = `UPDATE user SET username= '${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
            if (err) throw err;
            res.redirect("/user");
          });
        }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//add a new user
app.get("/user/newUser", (req, res)=>{
  res.render("newUser.ejs");
});

app.post("/user", (req, res)=>{
  let { username, email, password } = req.body;
  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  const id = faker.string.uuid();
  try {
    connection.query(q, [id, username, email, password], (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in database");
  }
});

//enter email and password to delete a user
app.get("/user/:id/verify", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("verify.ejs", { user });
      });
    } catch (err) {
      console.log(err);
      res.send("Some error in database");
    }
});

//delete a user from database if they enter correct email id and password.
app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let { email: formemail, password: formpass } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        if (formpass != user.password && formemail!=user.email) {
          res.send("Wrong password");
        }
         else if(formemail!=user.email){
             res.send("Wrong email");
         }
        else {
         let q2=`DELETE FROM user WHERE id='${id}'`;
          connection.query(q2, (err, result) => {
              if (err) throw err;
              res.redirect("/user");
            });
          }
      });
    } catch (err) {
      console.log(err);
      res.send("Some error in database");
    }
});

app.listen("8080", () => {
  console.log("server is listening to port 8080");
});
