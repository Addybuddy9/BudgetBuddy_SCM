import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Plus } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  seller: string;
  condition: string;
}

const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Textbook - Introduction to Psychology',
    price: 45.99,
    description: 'Like new condition, 8th edition',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    seller: 'John D.',
    condition: 'Like New'
  },
  {
    id: '2',
    title: 'Scientific Calculator',
    price: 25.00,
    description: 'Texas Instruments TI-84 Plus',
    image: 'https://watchbrand.in/media/catalog/product/c/a/casio-fx-991-ms-fx-991-ms-original_1.jpeg',
    seller: 'Sarah M.',
    condition: 'Good'
  },
  {
    id: '3',
    title: 'Apple MacBook Air Laptop',
    price: 3000.00,
    description: 'Its 13.3-inch Retina display offers sharp and vibrant visuals. With 8GB of RAM and a 256GB SSD, it ensures smooth performance, whether browsing multiple tabs or handling large graphic files.',
    image: 'https://www.hindustantimes.com/ht-img/img/2024/07/03/550x309/pexels-monoar-rahman-22660-109371_1719999130396_1719999136635.jpg',
    seller: 'Mary K.',
    condition: 'Good'
  },
  {
    id: '4',
    title: 'Apple iPad',
    price: 295.00,
    description: '10th gen',
    image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24128006/226361_Apple_iPad_10.9_10th_gen_DSeifert_0004.jpg?quality=90&strip=all&crop=0,10.732984293194,100,78.534031413613',
    seller: 'Peter S.',
    condition: 'Good'
  },
  {
    id: '5',
    title: 'Men Watch',
    price: 225.00,
    description: 'WINNER Vintage Engraved Gold Skeleton Mechanical Men Watch Carved Stainless Steel Strap 521',
    image: 'https://winner-watch.com/cdn/shop/products/jpg_af32e99b-1afe-4671-8ac9-971af9208245_1024x1024.jpg?v=1643093136',
    seller: 'Bob T.',
    condition: 'Good'
  },
  {
    id: '6',
    title: ' OnePlus Nord CE 4 Lite 5G',
    price: 25.00,
    description: 'The 64MP + 2MP dual rear camera setup captures detailed photos, while the 16MP front camera is perfect for selfies. With a 5000 mAh battery and 67W fast charging support, you can stay connected all day long.',
    image: 'https://blogassets.airtel.in/wp-content/uploads/2024/10/2100184_P6YTO90-1.jpg',
    seller: 'Addy U.',
    condition: 'Good'
  },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = sampleProducts.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <ShoppingBag className="h-8 w-8 mr-2 text-indigo-600" />
          Student Marketplace
        </h1>
        <Link
          to="/add-product"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-1" />
          List Item
        </Link>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search items..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">
                    Seller: {product.seller}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;