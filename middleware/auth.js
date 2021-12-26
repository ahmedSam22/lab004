const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    const { authorization } = req.headers
    const payload = jwt.verify(authorization , 'jhfllhjkbjhvivutvgioujhylk')
    console.log(payload);
    console.log(authorization );
}
module.exports = {
    auth
} 