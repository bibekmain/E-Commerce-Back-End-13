const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

//get one catagory based on id
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((data) => res.json(data))
  .catch((err) => res.json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

module.exports = router;
