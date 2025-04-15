import React, { useState } from 'react';
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
  const [totalBudget, setTotalBudget] = useState<number>(1000);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [newExpense, setNewExpense] = useState({
    category: '',
    amount: '',
    description: ''
  });

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
    </div>
  );
};

export default Budget;