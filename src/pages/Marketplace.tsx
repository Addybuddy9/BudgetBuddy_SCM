import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Plus } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  seller: string;
  condition: string;
}

export const sampleProducts: Product[] = [
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
    title: 'EvoFox Warhammer Semi-Mechanical Gaming Keyboard',
    price: 3225.00,
    description: 'EvoFox Warhammer is Professional and Full Sized LED Semi-Mechanical Gaming Keyboard with the Floating Keycap Design. Besides, the foldable kickstand can let you set the keyboard to your most comfortable position.',
    image: 'https://m.media-amazon.com/images/I/61W8YtRGmQL._SX679_.jpg',
    seller: 'Sandy P.',
    condition: 'Good'
  },
  {
    id: '7',
    title: 'Gaming Mouse RGB LED USB Wired Optical Laser Game Mice For PC Laptop Computer',
    price: 225.00,
    description: 'The 64MP + 2MP dual rear camera setup captures detailed photos, while the 16MP front camera is perfect for selfies. With a 5000 mAh battery and 67W fast charging support, you can stay connected all day long.',
    image: 'https://i.ebayimg.com/images/g/3N4AAOSw5AFhsvZi/s-l1600.webp',
    seller: 'Kalli R.',
    condition: 'Good'
  },
  {
    id: '8',
    title: 'Headphones',
    price: 925.00,
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i5.walmartimages.com/asr/f61f2bc7-0a77-4a57-aa03-8f901db4c06f.9a92b992f4d03b02b17356e3aee015a9.jpeg',
    seller: 'Addy U.',
    condition: 'Good'
  },
  {
    id: '9',
    title: 'Green Soul Beast Gaming Chair',
    price: 525.00,
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://m.media-amazon.com/images/I/71S6O6fJMDL._AC_.jpg',
    seller: 'Addy U.',
    condition: 'Good'
  },
  {
    id: '10',
    title: 'Zebronics ZEB-NC9000',
    price: 25.00,
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://zebronics.com/cdn/shop/products/ZEB-NC9000-pic1.jpg?v=1621063840&width=1200',
    seller: 'Addy U.',
    condition: 'Good'
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Simulate loading data from an API
    setLoading(true);
    setFadeIn(false);
    const timer = setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
      // Trigger fade-in animation after loading is complete
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }, 1500); // 1.5 second delay to show loading state
    
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Skeleton loader component
  const ProductSkeleton = () => (
    <div className="border rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>
      </div>
    </div>
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
            disabled={loading}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : (
        <>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your search term.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <Link 
                  key={product.id} 
                  to={`/product/${product.id}`}
                  className={`opacity-0 ${fadeIn ? 'animate-fade-in' : ''}`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="border rounded-lg overflow-hidden hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
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
          )}
        </>
      )}
    </div>
  );
};

export default Marketplace;