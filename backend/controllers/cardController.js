const { validationResult } = require('express-validator');
const Card = require('../models/card');

const cardController = {
  getAllCards: async (req, res) => {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  },

  getCardById: async (req, res) => {
    try {
      const card = await Card.findById(req.params.id);

      if (!card) {
        return res.status(404).json({ msg: 'Card not found' });
      }

      res.json(card);
    } catch (err) {
      console.error(err.message);

      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Card not found' });
      }

      res.status(500).send('Server error');
    }
  },

  createCard: async (req, res) => {
    const errors
    const { validationResult } = require('express-validator');
    const Card = require('../models/card');
    
    const cardController = {
    getAllCards: async (req, res) => {
    try {
    const cards = await Card.find();
    res.json(cards);
    } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
    }
    },
    
    getCardById: async (req, res) => {
    try {
    const card = await Card.findById(req.params.id);
    if (!card) {
        return res.status(404).json({ msg: 'Card not found' });
      }
    
      res.json(card);
    } catch (err) {
      console.error(err.message);
    
      if (err.kind === 'ObjectId') {
        return res.status(404).json({ msg: 'Card not found' });
      }
    
      res.status(500).send('Server error');
    }
},
createCard: async (req, res) => {
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
            .json({ errors: [{ msg: 'Card already exists' }] });
        }
      
        card = new Card({
          name,
          description,
          image,
          fields
        });
      
        await card.save();
        res.json(card);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    },      
    updateCard: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          
          const { name, description, image, fields } = req.body;
          
          try {
            let card = await Card.findById(req.params.id);
          
            if (!card) {
              return res.status(404).json({ msg: 'Card not found' });
            }
          
            card.name = name;
            card.description = description;
            card.image = image;
            card.fields = fields;
          
            await card.save();
            res.json(card);
          } catch (err) {
            console.error(err.message);
          
            if (err.kind === 'ObjectId') {
              return res.status(404).json({ msg: 'Card not found' });
            }
          
            res.status(500).send('Server error');
          }
        },

        deleteCard: async (req, res) => {
        try {
        const card = await Card.findById(req.params.id);
        if (!card) {
            return res.status(404).json({ msg: 'Card not found' });
          }
        
          await card.remove();
          res.json({ msg: 'Card removed' });
        } catch (err) {
          console.error(err.message);
        
          if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Card not found' });
          }
        
          res.status(500).send('Server error');
        }
    }
};

module.exports = cardController;




