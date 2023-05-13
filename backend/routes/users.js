const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');

// GET /api/users
router.get('/', auth.isAdmin, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(
// POST /api/users
router.post(
  '/',
  [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
  'password',
  'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  ],
  auth.isAdmin,
  async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
  }
  
  const { name, email, password, role } = req.body;

try {
  // Check if user already exists
  let user = await User.findOne({ email });

  if (user) {
    return res
      .status(400)
      .json({ errors: [{ msg: 'User already exists' }] });
  }

  // Create new user
  user = new User({
    name,
    email,
    password,
    role,
  });

  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  // Save user to database
  await user.save();

  res.json(user);
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server error');
}
}

// PUT /api/users/:id
router.put('/:id', auth.isAdmin, async (req, res) => {
const { name, email, password, role } = req.body;

// Build user object
const userFields = {};
if (name) userFields.name = name;
if (email) userFields.email = email;
if (password) {
// Encrypt password
const salt = await bcrypt.genSalt(10);
userFields.password = await bcrypt.hash(password, salt);
}
if (role) userFields.role = role;

try {
let user = await User.findById(req.params.id);
if (!user) return res.status(404).json({ msg: 'User not found' });

user = await User.findByIdAndUpdate(
  req.params.id,
  { $set: userFields },
  { new: true }
);

res.json(user);

// POST /api/users
router.post(
  '/',
  [
  body('name', 'Name is required').not().isEmpty(),
  body('email', 'Please include a valid email').isEmail(),
  body(
  'password',
  'Please enter a password with 6 or more characters'
  ).isLength({ min: 6 }),
  ],
  auth.isAdmin,
  async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
  }
  
  
  const { name, email, password, role } = req.body;
  
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
  
    if (user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'User already exists' }] });
    }
  
    // Create new user
    user = new User({
      name,
      email,
      password,
      role,
    });
  
    // Encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
  
    // Save user to database
    await user.save();
  
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
  }
  );
  
  // PUT /api/users/:id
  router.put('/:id', auth.isAdmin, async (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Build user object
  const userFields = {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (password) {
  // Encrypt password
  const salt = await bcrypt.genSalt(10);
  userFields.password = await bcrypt.hash(password, salt);
  }
  if (role) userFields.role = role;
  
  try {
  let user = await User.findById(req.params.id);
  
 
  if (!user) return res.status(404).json({ msg: 'User not found' });
  
  user = await User.findByIdAndUpdate(
    req.params.id,
    { $set: userFields },
    { new: true }
  );
  
  res.json(user);
  } catch (err) {
  console.error(err.message);
  res.status(500).send('Server error');
  }
  });
  
  // DELETE /api/users/:id
  router.delete('/:id', auth.isAdmin, async (req, res) => {
  try {
  let user = await User.findById(req.params.id);if (!user) return res.status(404).json({ msg: 'User not found' });

  await user.remove();
  
  res.json({ msg: 'User removed' });
} catch (err) {
  console.error(err.message);
  res.status(500).send('Server error');
  }
  });
  
  module.exports = router;
  