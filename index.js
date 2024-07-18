import  bodyparser  from "body-parser";
import  express  from "express";
import path, { dirname } from "path";
const app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));
let BlogPost = [];

app.get("/", (req, res)=>{
    res.render("index.ejs")
})

app.post("/submit", (req, res) => {
  let coment = req.body.comment;
  let addElement = BlogPost.push(coment);
  // res.render("index.ejs", {coments: addElement[0]})
})
app.post("/seePost", (req, res)=>{
  res.render("index.ejs", {Posts: BlogPost})
})

app.post("/Delete", (req, res)=>{
  for(let i = 0; i< BlogPost.length; i++){
    let del =   BlogPost.pop(i)
    res.render("index.ejs", {Del:del})
  }


})
app.listen(2000,()=>{
  console.log("listening")
})