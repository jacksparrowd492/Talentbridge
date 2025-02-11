const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define User model
const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  companyName: String,
  sector: String,
  password: String, // Consider hashing passwords in real applications
  location: String,
  userType: String
});

const User = mongoose.model('users', UserSchema); // Collection name is 'users'

// Sign-up route
app.post('/api/signup', async (req, res) => {
    try {
      const { name, phoneNumber, companyName, sector, password, confirmPassword, location, userType } = req.body;
  
      if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
  
      const newUser = new User({ name, phoneNumber, companyName, sector, password, location, userType });
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: error.message || 'An error occurred during registration' });
    }
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
