import express from 'express';
import mongoose from 'mongoose';
import formInfo from './modules/formInfo.mjs';
import cors from 'cors';
import dotenv from 'dotenv';  

dotenv.config(); // Load environment variables

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

const PORT = process.env.PORT || 5000; // Default to port 5000 if undefined
const DB_URI = process.env.CONNECTING_STRING;

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((error) => console.error('❌ Database connection error:', error));

// Log when MongoDB is connected
mongoose.connection.once('open', () => {
  console.log('✅ Database connection established');
});

// POST route to save form data
app.post('/sendFormInfo', async (req, res) => {
  const { name, email, message } = req.body;

  console.log(`📩 Received: Name: ${name}, Email: ${email}, Message: ${message}`);

  // Create new form entry
  const newForm = new formInfo({ name, email, message });

  try {
    await newForm.save();
    console.log('✅ Saved to database');
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('❌ Error saving data:', error);
    res.status(500).json({ message: 'Error saving form data.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
