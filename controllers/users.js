const Users = require("../models/users");

const jwt = require("jsonwebtoken")



const find = (query) => Users.find(query , '-password -_id -__v') //done
const create = (query) => Users.create(query) //done
const remove = (_id) => Users.findOneAndDelete({ _id}); //done
const edit = (_id, body) => Users.findOneAndUpdate({_id},body); //done


const login = async ({username,password}) =>{
    const user =  await Users.findOne({username}).exec()
    const isValid = await user.comparePassword(password)

    if(!isValid){
        console.log(isValid);
        throw new Error("UN_AUTH")
    }else{
        const token = jwt.sign({
            username , _id:user.id,
            maxAge: '1d'
        }, 'jhfllhjkbjhvivutvgioujhylk')

        return token
    }
}

module.exports = {
    find,create,remove,edit,login
}