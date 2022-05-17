import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/mycrud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    age: Number,
    work: String,
    address: String,
    mobile: Number,
    description:String

})

const User = new mongoose.model("User", userSchema)
//routes
app.get("/",(req,res)=>{
      User.find((err,data)=>{
            if(!err)
            {
                console.log(data)
                res.send(data);
            }
            else{console.log(err)}
     })

     
   
})

app.post("/search",(req,res)=>{
    const {n} = req.body
    
    User.find({name: n}, (err, user) => {
        if(user){
            res.send(user)
        }
        else{
            res.send("error in search")
        }

})
})
app.post("/register",(req,res)=>{
    const {i, n, e,a,w,m,ar,d} = req.body
    User.findOne({email: e}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
    const user = new User({
        id:i,
        name:n,
        email:e,
        age: a,
        work: w,
        address: ar,
        mobile: m,
        description:d
        
    })
    user.save(err => {
        if(err) {
            res.send(err)
        } else {
            res.send( { message: "Successfully Registered" })
        }
    })
}})
}
)

app.post("/delete",(req,res)=>{
    const {i} = req.body
    
    User.deleteOne({id: i}, (err, user) => {
        if(user){
            res.send("deleted successfully")
        }
        else{
            res.send("error in del")
        }

})
})
app.post("/edit",(req,res)=>{
    const {i,n} = req.body   
   
    User.findOneAndUpdate({id:i}, {$set:{name:n}}, {new: true}, (err, doc) => {
        if (!err) {
            console.log("Successful updation");
            res.send(doc);
        }
        else{
            console.log(err);
        }
        
    });


})



app.listen(5000,() => {
    console.log("BE started at port 5000")
})