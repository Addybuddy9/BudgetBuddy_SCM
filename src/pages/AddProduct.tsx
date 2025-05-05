import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowLeft } from 'lucide-react';

const AddProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    category: '',
    condition: '',
    description: '',
    image: null as File | null
  });
  
  // Animation states
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    navigate('/marketplace');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  return (
    <div className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={() => navigate('/marketplace')}
        className={`flex items-center text-indigo-600 mb-6 transition-transform duration-300 hover:-translate-x-1 ${pageLoaded ? 'animate-slide-in' : ''}`}
        style={{ animationDelay: '100ms' }}
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Marketplace
      </button>

      <div className={`bg-white rounded-lg shadow-lg p-8 ${pageLoaded ? 'animate-fade-up' : ''}`}>
        <h1 className={`text-3xl font-bold mb-8 ${pageLoaded ? 'animate-slide-in' : ''}`} 
             style={{ animationDelay: '200ms' }}>
          List Your Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: 'Title', type: 'text', value: formData.title, 
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }) },
            { label: 'Price ($)', type: 'number', value: formData.price, min: "0", step: "0.01",
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, price: e.target.value }) }
          ].map((field, index) => (
            <div key={field.label} 
                 className={`${pageLoaded ? 'animate-slide-in' : ''}`} 
                 style={{ animationDelay: `${300 + index * 100}ms` }}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              <input
                type={field.type}
                required
                min={field.min}
                step={field.step}
                className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ))}

          <div className={`${pageLoaded ? 'animate-slide-in' : ''}`} style={{ animationDelay: '500ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="textbooks">Textbooks</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="clothing">Clothing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={`${pageLoaded ? 'animate-slide-in' : ''}`} style={{ animationDelay: '600ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Condition
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            >
              <option value="">Select condition</option>
              <option value="new">New</option>
              <option value="like-new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          <div className={`${pageLoaded ? 'animate-slide-in' : ''}`} style={{ animationDelay: '700ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div className={`${pageLoaded ? 'animate-slide-in' : ''}`} style={{ animationDelay: '800ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className={`mx-auto h-12 w-12 text-gray-400 ${pageLoaded ? 'animate-bounce-in' : ''}`} 
                        style={{ animationDelay: '900ms' }} />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ${pageLoaded ? 'animate-slide-in transform hover:scale-[1.02]' : ''}`}
            style={{ animationDelay: '1000ms' }}
          >
            List Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;