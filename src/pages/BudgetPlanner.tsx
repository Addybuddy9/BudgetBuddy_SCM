import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const COLORS = ['#8B5CF6', '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899'];

const BudgetPlanner = () => {
  const [formData, setFormData] = useState({
    income: "",
    rent: "",
    utilities: "",
    groceries: "",
    transportation: "",
    savings: "",
    investments: "",
    entertainment: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateBudgetData = () => {
    const data = [
      { name: 'Rent', value: Number(formData.rent) || 0 },
      { name: 'Utilities', value: Number(formData.utilities) || 0 },
      { name: 'Groceries', value: Number(formData.groceries) || 0 },
      { name: 'Transportation', value: Number(formData.transportation) || 0 },
      { name: 'Savings', value: Number(formData.savings) || 0 },
      { name: 'Investments', value: Number(formData.investments) || 0 },
      { name: 'Entertainment', value: Number(formData.entertainment) || 0 }
    ].filter(item => item.value > 0);

    return data;
  };

  const data = calculateBudgetData();
  const totalExpenses = data.reduce((sum, item) => sum + item.value, 0);
  const hasData = data.length > 0;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
      {/* Hero Section */}
      <section className="bg-violet-700 text-white text-center py-12">
        <h1 className="text-4xl font-bold mb-2">Budget Planner</h1>
        <p className="text-lg">Visualize and manage your monthly budget effectively</p>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Budget Form */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Enter Your Budget Details</h3>
            <div className="space-y-4">
              {[
                { label: "Monthly Income", name: "income" },
                { label: "Rent", name: "rent" },
                { label: "Utilities", name: "utilities" },
                { label: "Groceries", name: "groceries" },
                { label: "Transportation", name: "transportation" },
                { label: "Savings", name: "savings" },
                { label: "Investments", name: "investments" },
                { label: "Entertainment", name: "entertainment" }
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-white/70 mb-2">{field.label}</label>
                  <input
                    type="number"
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none"
                    placeholder="Enter amount"
                  />
                </div>
              ))}

              <button className="mt-4 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg">
                Update Budget
              </button>
            </div>
          </div>

          {/* Budget Chart */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-6">Your Budget Visualization</h3>

            {hasData ? (
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-80 flex items-center justify-center">
                <p className="text-white/50 text-center">
                  Enter your budget details on the left to see your visualization
                </p>
              </div>
            )}

            {hasData && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Total Monthly Expenses:</span>
                  <span className="text-white font-semibold">₹{totalExpenses}</span>
                </div>

                {formData.income && (
                  <>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/70">Income:</span>
                      <span className="text-white font-semibold">₹{formData.income}</span>
                    </div>

                    <div className="flex justify-between items-center mt-2">
                      <span className="text-white/70">Remaining:</span>
                      <span className={`font-semibold ${Number(formData.income) - totalExpenses >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        ₹{Number(formData.income) - totalExpenses}
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BudgetPlanner;
