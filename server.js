const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Error:", err));

// ✅ Schema & Model
const Expense = mongoose.model('Expense', {
  amount: Number,
  category: String,
  date: String,
  notes: String
});

// ✅ Routes
app.post('/add', async (req, res) => {
  try {
    await Expense.create(req.body);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send("Error saving expense");
  }
});

app.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).send("Error fetching expenses");
  }
});

// ✅ Port for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));

