const express= require("express");
const bodyParser= require("body-parser");
const date=require(__dirname+"/date.js")
const app = express();
let items=["buy food","cook food","eat food"];
let workitems=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true })); 
app.use(express.static("public"));
app.get("/",function(_req, res){
    let day=date.getdate();
    res.render("list",{ listtitle: day, newlistitems : items});
});
app.post("/",function(req, res){
    let item = req.body.newItem;
    if( req.body.list ==="work")
    {
        workitems.push(item);
        res.redirect("/work");
    }
    else
    {
    items.push(item);
    res.redirect("/");
    }
});
app.get("/work",function(_req, res){
    res.render("list",{listtitle: "work list",newlistitems : workitems});
});
app.get("/about",function(_req, res){
res.render("about");
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});
