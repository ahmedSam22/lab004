const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 8,
        unique : true
    },
    // dob: Date,
    password: {
        type: String,
        required: true
    },
    // todos: [
    //     { type: mongoose.Schema.Types.ObjectId, ref: 'Todo' }
    // ]
}, {
    timestamps: true

}
)

userSchema.pre('save', function () {
    const hash = bcrypt.hashSync('password', 8)
    this.password = hash

})
userSchema.methods.comparePassword = function (password){
    const isValid = bcrypt.compareSync(password,this.password)
    return isValid

}

const Users = mongoose.model('Users', userSchema)


module.exports = Users;