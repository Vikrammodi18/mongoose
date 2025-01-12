const mongoose = require('mongoose')

main()
.then(()=>{
    console.log("connection successful:")
})
.catch((err)=> console.log(err))

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Test')
}
const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User = mongoose.model('User',userSchema)

const user2 = User({
    name : "Eve",
    email: "adam123@gmail.com",
    age : 25,
})
user2.save().then((res)=>
    console.log(res)
).catch((err)=>console.log(err))
