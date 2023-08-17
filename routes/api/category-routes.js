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

// create a new category
router.post('/', (req, res) => {
  /*
  {
    "category_name": "new_category_name"
  }
  */
  Category.create(req.body)
  .then((data) => res.json(data))
  .catch((err) => res.json(err));
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  /*
  {
    "category_name": "new_category_name"
  }
  */
  Category.update(req.body, {
    where: {
      id: req.params.id
    },
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

// delete a category by its `id` values
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

module.exports = router;
