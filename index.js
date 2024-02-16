import express from 'express';

const app = express();
let port = 3002;

app.listen(port, ()=> {
    console.log(`app listening on port ${port}`);
});

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("home");
}) ;

app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random()*6+1);
    res.render("rolldice.ejs", {diceValue});
});

app.get("/:username", (req, res) => {
    let {username} = req.params;
    res.render("homeUser.ejs", {username});
});

