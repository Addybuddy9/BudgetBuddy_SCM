import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, User, Tag, Calendar } from 'lucide-react';

// Import the sample products data from Marketplace
import { sampleProducts } from '../pages/Marketplace';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product with matching ID from sampleProducts
    const foundProduct = sampleProducts.find(p => p.id === id);
    
    // In a real app, this would be an API call to fetch product details
    setTimeout(() => {
      setProduct(foundProduct || null);
      setLoading(false);
    }, 300); // Simulate a slight delay like an API call would have
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/marketplace" className="flex items-center text-indigo-600 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Marketplace
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/marketplace" 
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
          >
            Browse Marketplace
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/marketplace" className="flex items-center text-indigo-600 mb-6">
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Marketplace
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 text-indigo-600 mr-2" />
              <span className="text-2xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-500 mr-2" />
                <span>Seller: {product.seller}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-5 w-5 text-gray-500 mr-2" />
                <span>Condition: {product.condition}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span>Posted: {new Date().toLocaleDateString()}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;