const form = document.getElementById('expenseForm');
const expenseList = document.getElementById('expenseList');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const expense = {
    amount: document.getElementById('amount').value,
    category: document.getElementById('category').value,
    date: document.getElementById('date').value,
    notes: document.getElementById('notes').value
  };

  await fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(expense)
  });

  loadExpenses();
  form.reset();
});

async function loadExpenses() {
  const res = await fetch('/expenses');
  const data = await res.json();

  expenseList.innerHTML = '';
  data.forEach(exp => {
    const li = document.createElement('li');
    li.textContent = `${exp.date} - ₹${exp.amount} (${exp.category})`;
    expenseList.appendChild(li);
  });
}

loadExpenses();