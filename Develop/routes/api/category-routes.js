const router = require('express').Router();
const { Category, Product } = require('../../models');
const { restore } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated 
  Category.findAll({
    include: [Product]
  })
  .then((data)=>{
    console.log("getRoute", data)
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then((data)=>{
    console.log("get by id", data)
    res.json(data)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data)=>{
    console.log("post", data)
    res.json(data)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,{
     where: {
    id: req.params.id
      },
    })
  .then((data)=>{
    console.log("put", data)
    res.json(data)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(req.body,{
    where: {
   id: req.params.id
     },
   })
 .then((data)=>{
   console.log("delete", data)
   res.json(data)
 })
});

module.exports = router;
