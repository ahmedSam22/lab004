const express = require("express");

const router = express.Router()

const { find, create, remove, edit } = require('../controllers/todos')


router.get('/', (req, res, next) => {
  find({}).then(doc => res.json(doc)).catch(e => console.log(e))
})

router.post('/', async (req, res, next) => {
  const todo = req.body
  await create(todo).then(doc => res.json(doc)).catch(e => next(e))
})


router.patch('/:id', async (req, res, next) => {
  const id = req.params.id
  const todo = req.body
  await edit(id, todo).then(doc => res.send(doc)).catch(e => console.log(e))
})
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  remove(id).then((doc) => res.json(doc))
    .catch((e) => next(e));


})
module.exports = router