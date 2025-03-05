const express=require("express")
const jwt=require("jsonwebtoken")
const jwtpassword="123456"


const app=express()
app.use(express.json())


const users=[{
    username:"vaishnavitg2@gmail.com",
    password:"123456",
    name:"vaishnavi"
},
{ username:"prathyarthi@gmail.com",
    password:"123764",
    name:"Prathyarthi"
},
{ username:"kiranuuu@gmail.com",
    password:"1986490",
    name:"Pkirana"
}]

function userexits(username,password){
   let userexits=false
   for(let i=0;i<users.length;i++){
    if(users[i].username==username&&users[i].password==password){
        userexits=true
    }
   }
   return userexits
}

app.post("/signin",function(req,res){
    const username=req.body.username
    const password=req.body.password

    if(!userexits(username,password)){
        return res.status(403).json({
            msg:"user dosent exists in our memory database"
        })
    }

    var token=jwt.sign({username:username},jwtpassword)
    return res.json({
        token
    })
})










app.listen(3000)