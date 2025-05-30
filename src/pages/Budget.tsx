import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, PieChart, Target, TrendingUp } from 'lucide-react';

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
}

interface BudgetGoal {
  category: string;
  limit: number;
  current: number;
}

const Budget = () => {
  const navigate = useNavigate();

  const [totalBudget, setTotalBudget] = useState<number>(1000);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: '',
    description: ''
  });
  const [goals, setGoals] = useState<BudgetGoal[]>([
    { category: 'Food', limit: 300, current: 150 },
    { category: 'Transportation', limit: 200, current: 80 },
    { category: 'Entertainment', limit: 100, current: 45 }
  ]);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.category || !newExpense.amount) return;

    const expense: Expense = {
      id: Date.now().toString(),
      category: newExpense.category,
      amount: parseFloat(newExpense.amount),
      date: new Date().toISOString(),
      description: newExpense.description
    };

    setExpenses([expense, ...expenses]);
    setNewExpense({ category: '', amount: '', description: '' });
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = totalBudget - totalExpenses;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center">
        <DollarSign className="h-8 w-8 mr-2 text-indigo-600" />
        Budget Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Total Budget</h2>
            <DollarSign className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">${totalBudget.toFixed(2)}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Spent</h2>
            <TrendingUp className="h-6 w-6 text-red-600" />
          </div>
          <p className="text-3xl font-bold text-red-600">${totalExpenses.toFixed(2)}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Remaining</h2>
            <PieChart className="h-6 w-6 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">${remainingBudget.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add Expense</h2>
          <form onSubmit={handleAddExpense} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                className="w-full p-2 border rounded-md"
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                required
              >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={newExpense.description}
                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Add Expense
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Budget Goals</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {goals.map((goal) => (
              <div key={goal.category} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{goal.category}</span>
                  <span className="text-sm text-gray-600">
                    ${goal.current} / ${goal.limit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${(goal.current / goal.limit) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="mt-16 ml-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-3 rounded-2xl shadow-lg hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transform transition duration-300 ease-in-out"
            onClick={() => navigate('/budget-planner')}
          >
            Check your Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
