
// Code  for mongoose config in backend
// Filename - backend/index.js
 
// To connect with your mongoDB database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Book', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB!');
})
.catch(err => console.error('Error connecting to MongoDB:', err));
// Get the default connection
const db = mongoose.connection;

// Check for MongoDB connection errors
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true,
    },
    accountType:{
        type:String,
        required:true,
    }
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// Schema for users of app
const BookSchema = new mongoose.Schema({
    author_id: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    genre:{
        type:String,
        required:true,
    },
    publishDate: {
        type: String,
        required:true,
    },
    price: {
        type: String,
        required:true,
    },
    tags: {
        type: String,
        required:true,
    },
    status: {
        type: String,
        required:true,
    },
});
const bookCollection = mongoose.model('books', BookSchema);
bookCollection.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});
  // Define Express routes and handle MongoDB operations here

  // Example:
// Assuming you have connected to MongoDB using MongoClient

app.post('/SignupAuthor', async (req, res) => {
    try {
        const result = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            accountType: "Author"
        });
        res.send(result);
        console.log("Author Data inserted successfully:", result);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.post('/SignupReader', async (req, res) => {
    try {
        const result = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            accountType: "Reader"
        });
        res.send(result);
        console.log("Author Data inserted successfully:", result);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.post('/Login', async (req, res) => {
  try {
      const user = await User.findOne({
          email: req.body.email,
          password: req.body.password
      });
      if (user) {
          console.log("Login successful");
          res.send({ ...user, isAuthor: user.accountType === "Author" });
      } else {
          res.status(401).json({ message: "Incorrect username or password" });
      }
  } catch (err) {
      console.error("Error", err);
      res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post('/Create', async (req, res) => {
    try {
        const result = await bookCollection.create({
            author_id: req.body.author_id,
            cover: req.body.cover,
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            publishDate: req.body.publishDate,
            price: req.body.price,
            tags: req.body.tags,
            status: req.body.status
        });
        res.send(result);
        console.log("Create successful:", result);
    } catch (err) {
        console.error("Error", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
app.get('/ShowAndId', async (req, res) => {
  try {
      const data = await bookCollection.find({});
      if (data.length > 0) {
          console.log("Data shown successfully");
          res.json(data);
      } else {
          res.json({ message: "No data found" });
      }
  } catch (err) {
      console.error("Error", err);
      res.status(500).json({ message: "Failed to show data" });
  }
});




// Similarly, handle SignupReader endpoint


  // Start the Express server
  app.listen(8081, () => {
      console.log('Server is running on port');
  });

























