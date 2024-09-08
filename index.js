import express from "express";
import connectDB from "./db.js";
import Post from "./models/Post.js";
import Project from "./models/Project.js"

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

//connect to db
connectDB();

app.get("/", function(req, res) {
    res.render("index", { title: 'Shivan Anand' });
})
app.get("/resume", function(req, res) {
    res.render("resume", { title: 'Shivan Anand - Resume' });
})
app.get("/projects", async function(req, res) {
    const data = await Project.find();
    res.render("projects", { title: 'Shivan Anand - Projects', data });
})
app.get("/blog", async function(req, res) {
    const data = await Post.find();

    res.render("blog", { title: 'Shivan Anand - Blog', data });
})

app.get("/post/:id", async function(req, res) {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });
    res.render("post", {
        title: 'Shivan Anand - Post',
        data
    });
});


app.listen(port, function() {
    console.log("Server is running at Port number: " + port);
})