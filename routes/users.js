const express = require("express");

const router = express.Router()
const { find, create, remove, edit, login } = require('../controllers/users')


router.get('/', (req, res, next) => {
    find({}).then(doc => res.json(doc)).catch(e => next(e))
})

router.post('/', async (req, res, next) => {
    const newUser = req.body
    await create(newUser).then(doc => res.json(doc)).catch(e => next(e))
})

router.patch('/:id', async (req, res, next) => {
    const id = req.params.id
    const newUser = req.body
    await edit(id,newUser).then(doc => res.json(doc)).catch(e => next(e))
})
router.delete('/:id', async (req, res, next) => {
    const id = req.params.id

    await remove(id).then(doc => res.json(doc)).catch(e => next(e))

})
router.post('/login' , async (req,res,next)=>{
        const { username,password } = req.body;
         const nowTest = await login({username,password})
})


module.exports = router