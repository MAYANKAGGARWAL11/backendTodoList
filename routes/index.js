var express = require('express');
var router = express.Router();
const userModel = require("./users") ;
const port = 3000 ;
const uuid = require("uuid") ;
const cors = require("cors") ;
router.use(cors()) ;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/todos',async function(req, res, next) {
 try{
  const todos = await userModel.find() ;
  res.json(todos) ;
 }catch(error){
  console.error(error) ;
  res.status(500).json({error:'internal server'})
 }
});
router.get('/todos/:id',async function(req, res, next) {
 const todoid = req.params.id ;
  try{
  const todos = await userModel.findById(todoid) ;
  res.json(todos) ;
 }catch(error){
  console.error(error) ;
  res.status(500).json({error:'internal server'})
 }
});
router.post('/todos', async function(req, res, next) {
  try {
    const ans = await userModel.create({
      id: req.body.id,
      desc: req.body.desc,
      completed: req.body.completed
    });
    return res.json(ans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.put('/todos/:id', async function(req, res, next) {
  const todoId = req.params.id;
  try {
    const todo = await userModel.findById(todoId);
    if (todo) {
      todo.desc = req.body.desc;
      todo.completed = req.body.completed;
      await todo.save();
      res.json(todo);
    } else {
      res.status(404).json({ error: 'Todo with the given ID is not present' });
    }
  } catch (error) {
    console.error(error.stack); 
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.delete('/todos/:id', async function(req, res, next) {
  const todoId = req.params.id;

  try {
    const todo = await userModel.findById(todoId);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Todo exists, create an instance and then proceed with deletion
    const todoInstance = new userModel(todo);
    await todoInstance.deleteOne();

    res.status(200).json({ id: todoId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message || 'Unknown error' });
  }
});



module.exports = router;
