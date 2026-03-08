const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect("mongodb+srv://expenseUser:Fide25610279@cluster0.kyigtv6.mongodb.net/?appName=Cluster0");

const Expense = mongoose.model('Expense', {
  amount: Number,
  category: String,
  date: String,
  notes: String
});

app.post('/add', async (req, res) => {
  await Expense.create(req.body);
  res.sendStatus(200);
});

app.get('/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});


const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect("mongodb+srv://expenseUser:Fide25610279@cluster0.kyigtv6.mongodb.net/?appName=Cluster0");

const Expense = mongoose.model('Expense', {
  amount: Number,
  category: String,
  date: String,
  notes: String
});

app.post('/add', async (req, res) => {
  await Expense.create(req.body);
  res.sendStatus(200);
});

app.get('/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
