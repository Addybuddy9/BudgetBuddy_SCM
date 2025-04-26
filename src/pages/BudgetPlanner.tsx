
import { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSection from "@/components/HeroSection";

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
  
  // Calculate data for pie chart
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
    <div className="min-h-screen">
      <HeroSection
        title="Budget Planner"
        subtitle="Visualize and manage your monthly budget effectively"
      />
      
     
    </div>
  );
};

export default BudgetPlanner;
