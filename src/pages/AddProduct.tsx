import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowLeft, Camera, CheckCircle, AlertTriangle, DollarSign, Tag, Star, FileText, PenTool } from 'lucide-react';

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
  const [animateForm, setAnimateForm] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setPageLoaded(true);
      setTimeout(() => {
        setAnimateForm(true);
      }, 400);
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
      <div className="min-h-[80vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center">
        <div className="w-full bg-gradient-to-br from-indigo-100 via-white to-purple-100 p-8 rounded-2xl shadow-xl">
          {submitSuccess ? (
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-25"></div>
                <CheckCircle className="h-24 w-24 text-green-500 animate-bounce-in relative z-10" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
                Your Item Has Been Listed!
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6 animate-fade-up" style={{ animationDelay: '400ms' }}></div>
              <p className="text-gray-600 mb-8 text-center max-w-md animate-fade-up" style={{ animationDelay: '500ms' }}>
                Your product has been successfully added to the marketplace and is now visible to potential buyers.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: '700ms' }}>
                <button
                  onClick={() => navigate('/marketplace')}
                  className="relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
                >
                  <span className="flex items-center">
                    <span className="mr-2">Back to Marketplace</span>
                    <ArrowLeft className="h-5 w-5" />
                  </span>
                  <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 hover:opacity-30 transition-opacity duration-300 blur"></span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative mb-8">
                <div className="h-20 w-20 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 bg-indigo-200 rounded-full animate-ping opacity-20"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Processing Your Listing</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
              <p className="text-gray-600 text-center">Please wait while we add your item to the marketplace...</p>
              <div className="mt-6 flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-indigo-600 animate-bounce"></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 rounded-full bg-indigo-400 animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-[80vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-500 ${pageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <button
        onClick={() => navigate('/marketplace')}
        className={`group flex items-center text-indigo-600 mb-8 transition-all duration-300 hover:-translate-x-1 ${pageLoaded ? 'animate-slide-in' : ''}`}
        style={{ animationDelay: '100ms' }}
      >
        <ArrowLeft className="h-5 w-5 mr-2 group-hover:animate-pulse" />
        <span className="relative">
          <span className="text-lg">Back to Marketplace</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </button>

      {/* Background decoration elements */}
      <div className="absolute top-40 -left-20 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-20 -right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className={`relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${pageLoaded ? 'animate-fade-up' : ''}`}>
        {/* Header decoration */}
        <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        
        <div className="p-8">
          <div className="flex items-center mb-8">
            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-4 shadow-md">
              <Tag className="h-6 w-6 text-white" />
            </div>
            <h1 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 ${pageLoaded ? 'animate-slide-in' : ''}`} 
                style={{ animationDelay: '200ms' }}>
              List Your Item
            </h1>
          </div>
          
          <p className={`text-gray-600 mb-8 ${pageLoaded ? 'animate-slide-in' : ''}`} style={{ animationDelay: '300ms' }}>
            Fill out the details below to list your item in the marketplace. Clear photos and detailed descriptions help items sell faster!
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${animateForm ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <div className="group">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
                  <PenTool className="h-4 w-4 mr-2 text-gray-400 group-focus-within:text-indigo-500" />
                  Item Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="What are you selling?"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:shadow-md"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>

              <div className="group">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-400 group-focus-within:text-indigo-500" />
                  Price
                </label>
                <div className="relative">
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:shadow-md"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${animateForm ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '500ms' }}>
              <div className="group">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
                  <Tag className="h-4 w-4 mr-2 text-gray-400 group-focus-within:text-indigo-500" />
                  Category
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:shadow-md appearance-none"
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
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
                  <Star className="h-4 w-4 mr-2 text-gray-400 group-focus-within:text-indigo-500" />
                  Condition
                </label>
                <div className="relative">
                  <select
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:shadow-md appearance-none"
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
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${animateForm ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
              <div className="group">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2 transition-colors duration-300 group-focus-within:text-indigo-600">
                  <FileText className="h-4 w-4 mr-2 text-gray-400 group-focus-within:text-indigo-500" />
                  Description
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your item in detail (condition, features, etc.)"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:shadow-md"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>
            </div>

            <div className={`${animateForm ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '700ms' }}>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <Camera className="h-4 w-4 mr-2 text-gray-400" />
                Images
              </label>
              <div 
                className={`relative mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-all duration-300 bg-white
                  ${dragActive ? 'border-indigo-500 bg-indigo-50 shadow-inner' : 'border-gray-300'} 
                  ${previewUrl ? 'border-indigo-500 shadow-md' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {previewUrl ? (
                  <div className="relative w-full">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-h-60 mx-auto rounded-lg shadow-md animate-fade-in object-contain" 
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewUrl(null);
                        setFormData({...formData, image: null});
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-red-600 shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30"></span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2 text-center">
                    <div className="mx-auto h-20 w-20 text-indigo-400 relative">
                      <Camera className={`mx-auto h-full w-full ${pageLoaded ? 'animate-bounce-in' : ''} ${dragActive ? 'text-indigo-500' : ''}`} 
                            style={{ animationDelay: '800ms' }} />
                      <div className="absolute inset-0 bg-indigo-100 rounded-full -z-10 animate-ping opacity-20"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row text-sm text-gray-600 justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none transition-all duration-300"
                      >
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-300">
                          <span className="animate-pulse-slow">Upload a file</span>
                          <Upload className="ml-1 h-4 w-4" />
                        </span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="mt-2 sm:mt-0 sm:ml-2 flex items-center">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                    {dragActive && (
                      <div className="mt-2 text-indigo-600 font-medium animate-pulse">
                        Drop your image here
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className={`pt-4 ${animateForm ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '900ms' }}>
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
              >
                <span className="relative inline-flex items-center justify-center">
                  <span className="mr-2 text-lg font-medium">List Your Item</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;