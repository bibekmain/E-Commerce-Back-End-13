const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

//fild all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag
    }]
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

// create a new tag
router.post('/', (req, res) => {
  /*Example request body: 
    {
      tag_name: "new_tag_name"
    }
  */
  Tag.create(req.body).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

// delete a tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => res.json(data))
  .catch((err) => res.json(err));
});

module.exports = router;
