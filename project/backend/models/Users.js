const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    id: String,
    url: String
})

const UserModel=mongoose.model("user",UserSchema)

module.exports =UserModel