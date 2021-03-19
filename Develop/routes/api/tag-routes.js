const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model:Product,
      through:ProductTag
    }]
  })
  .then((data)=>{
    console.log("getRoute Tag", data)
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.fineOne({
    where: {
      id: req.params.id
    },
    include: [{
      model:Product,
      through:ProductTag
    }]
  })
  .then((data)=>{
    console.log("getRoute Tag", data)
    res.json(data)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((data)=>{
    console.log("Tag", data)
    res.json(data)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body,{
    where: {
   id: req.params.id
     },
   })
 .then((data)=>{
   console.log("Tag", data)
   res.json(data)
 })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(req.body,{
    where: {
   id: req.params.id
     },
   })
 .then((data)=>{
   console.log("Tag", data)
   res.json(data)
 })
});

module.exports = router;
