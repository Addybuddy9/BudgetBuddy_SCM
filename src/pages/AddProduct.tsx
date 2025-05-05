import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowLeft, Camera, CheckCircle, AlertTriangle } from 'lucide-react';

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
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    setFormSubmitted(true);
    
    // Simulate successful submission after a delay
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      // Navigate after success animation completes
      setTimeout(() => {
        navigate('/marketplace');
      }, 1500);
    }, 1000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle drag events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };
  
  const handleDragLeave = () => {
    setDragActive(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (formSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center animate-fade-up">
        {submitSuccess ? (
          <>
            <CheckCircle className="h-20 w-20 text-green-500 animate-bounce-in mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              Your Item Has Been Listed!
            </h2>
            <p className="text-gray-600 mb-8 text-center animate-fade-up" style={{ animationDelay: '500ms' }}>
              Your product has been successfully added to the marketplace.
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '700ms' }}>
              <button
                onClick={() => navigate('/marketplace')}
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Back to Marketplace
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="animate-spin mb-6">
              <div className="h-16 w-16 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Processing Your Listing</h2>
            <p className="text-gray-600">Please wait while we add your item to the marketplace...</p>
          </>
        )}
      </div>
    );
  }

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
            { label: 'Title', type: 'text', value: formData.title, icon: null,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value }) },
            { label: 'Price ($)', type: 'number', value: formData.price, min: "0", step: "0.01", icon: null,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, price: e.target.value }) }
          ].map((field, index) => (
            <div key={field.label} 
                 className={`${pageLoaded ? 'animate-slide-in' : ''} group`} 
                 style={{ animationDelay: `${300 + index * 100}ms` }}>
              <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
                {field.label}
              </label>
              <div className="relative">
                <input
                  type={field.type}
                  required
                  min={field.min}
                  step={field.step}
                  className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:shadow-md"
                  value={field.value}
                  onChange={field.onChange}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-focus-within:w-full"></div>
              </div>
            </div>
          ))}

          <div className={`${pageLoaded ? 'animate-slide-in' : ''} group`} style={{ animationDelay: '500ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
              Category
            </label>
            <div className="relative">
              <select
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:shadow-md appearance-none"
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
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-focus-within:w-full"></div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className={`${pageLoaded ? 'animate-slide-in' : ''} group`} style={{ animationDelay: '600ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
              Condition
            </label>
            <div className="relative">
              <select
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:shadow-md appearance-none"
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
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-focus-within:w-full"></div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className={`${pageLoaded ? 'animate-slide-in' : ''} group`} style={{ animationDelay: '700ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
              Description
            </label>
            <div className="relative">
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:shadow-md"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-focus-within:w-full"></div>
            </div>
          </div>

          <div className={`${pageLoaded ? 'animate-slide-in' : ''}`} style={{ animationDelay: '800ms' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Images
            </label>
            <div 
              className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md transition-all duration-300
                ${dragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'} 
                ${previewUrl ? 'border-indigo-500' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {previewUrl ? (
                <div className="relative w-full">
                  <img 
                    src={previewUrl} 
                    alt="Preview" 
                    className="max-h-48 mx-auto rounded animate-fade-in" 
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewUrl(null);
                      setFormData({...formData, image: null});
                    }}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full transform transition-transform duration-300 hover:scale-110"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <Camera className={`mx-auto h-12 w-12 text-gray-400 ${pageLoaded ? 'animate-bounce-in' : ''} ${dragActive ? 'text-indigo-500' : ''}`} 
                          style={{ animationDelay: '900ms' }} />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 transition-all duration-300"
                    >
                      <span className="animate-pulse-slow">Upload a file</span>
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
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 ${pageLoaded ? 'animate-slide-in transform hover:scale-[1.02]' : ''}`}
            style={{ animationDelay: '1000ms' }}
          >
            <span className="relative inline-flex items-center">
              <span className="mr-2">List Item</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;