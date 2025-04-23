import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, User, Tag, Calendar } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();

  // Mock product data - in a real app, this would come from your database
  const product = {
    id: '1',
    title: 'Textbook - Introduction to Psychology',
    price: 45.99,
    description: 'Like new condition, 8th edition. Perfect for PSY101. Includes online access code (unused). Minor highlighting in first two chapters only.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    seller: 'John D.',
    condition: 'Like New',
    postedDate: '2024-02-15',
    category: 'Textbooks',
    location: 'Campus Library'
  };

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
                <span>Posted: {product.postedDate}</span>
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