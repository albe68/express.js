const express=require('express');
const app=express();
require('dotenv').config();
const  port = process.env.PORT || 3000;

app.use((req,res,next)=>
{
    console.log("first")
    next()
})

console.log(process.env.USER_ID)

app.get('/',hii)
function hii(){
    console.log("asjaklsjakls")
}
app.listen(port,()=>{
    console.log(`Server running on port  http://localhost:${port}/`)
})


