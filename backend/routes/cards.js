const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const Card = require('../models/card');

// GET /api/cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find().select('-fields');
    res.json(cards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST /api/cards
router.post(
  '/',
  [auth.isAdmin, [body('name').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, image, fields } = req.body;

    try {
      let card = await Card.findOne({ name });
      if (card) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Card with this name already exists' }] });
      }

      card = new Card({
        name,
        description,
        image,
        fields,
      });

      await card.save();
      res.json(card);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// PUT /api/cards/:id
router.put(
  '/:id',
  [auth.isAdmin, [body('name').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, image, fields } = req.body;

    try {
      let card = await Card.findById(req.params.id);
      if (!card) {
        return res
          .status(404)
          .json({ errors: [{ msg: 'Card not found' }] });
      }

      card.name = name;
      card.description = description;
      card.image = image;
      card.fields = fields;

      await card.save();
      res.json(card);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// DELETE /api/cards/:id
router.delete('/:id', auth.isAdmin, async (req, res) => {
  try {
    let card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ errors: [{ msg: 'Card not found' }] });
    }

    await card.remove();
    res.json({ msg: 'Card removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
