import express from 'express';
import mongoose from 'mongoose'
import formInfo from './modules/formInfo.mjs'
import cors from 'cors';
const app = express();
app.use(cors()); // Allow all origins (or configure specific origins if needed)
app.use(express.json()); // Middleware to parse JSON bodies

mongoose.connect('mongodb+srv://ag223pt:0962557173ag@cluster0.3daysor.mongodb.net/myDatabase')
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });


mongoose.connection.once('open', () => {
  console.log('Database connection established');
});


// mongoose.connect('mongodb+srv://ag223pt:0962557173ag@cluster0.3daysor.mongodb.net/').then(() => {
//   console.log('connected to database')
// })

// mongoose.connect('mongodb+srv://ahmadghalia:0962557173ag@cv.i0o4u.mongodb.net/test').then(() => {
  
//   console.log('connected to database')
// })


app.post('/sendFormInfo', async (req, res) => {
  const { name, email, message } = req.body;

  console.log(`Received data: Name: ${name}, Email: ${email}, Message: ${message}`);

  // Create a new instance of the formInfo model
  const newForm = new formInfo({
    name: name,
    email: email,
    message: message,
  });

  try {
    // Save the new form data to the database
    await newForm.save();
    console.log('Saved to database');
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ message: 'Error saving form data.' });
  }
});



app.listen(3001, () => {
  console.log('The server is running on port 3001');
});


// app.get('/user', (req, res) => {
//   newUser.name = 'John Doe'
//   newUser.email = 'ahmad@gmail.com'
//   newUser.age = 29
//   newUser.save()
//   res.send('good')
// })

// app.get('/getUser', async (req, res) => {
//   const u = await User.find()
// res.json(u) 
// })

// app.get('/getUserById/:id', async (req, res) => {
//   const id = req.params.id
//   const u = await User.findById(id)
// res.json(u)
// })