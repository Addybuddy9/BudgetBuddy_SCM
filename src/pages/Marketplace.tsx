import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Plus, ChevronUp, Filter, Tag, DollarSign, Grid, List, RefreshCw } from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  seller: string;
  condition: string;
  category?: string; // Adding optional category field
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    title: 'Textbook - Introduction to Psychology',
    price: 45.99,
    description: 'Like new condition, 8th edition',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    seller: 'John D.',
    condition: 'Like New',
    category: 'textbooks'
  },
  {
    id: '2',
    title: 'Scientific Calculator',
    price: 25.00,
    description: 'Texas Instruments TI-84 Plus',
    image: 'https://watchbrand.in/media/catalog/product/c/a/casio-fx-991-ms-fx-991-ms-original_1.jpeg',
    seller: 'Sarah M.',
    condition: 'Good',
    category: 'electronics'
  },
  {
    id: '3',
    title: 'Apple MacBook Air Laptop',
    price: 3000.00,
    description: 'Its 13.3-inch Retina display offers sharp and vibrant visuals. With 8GB of RAM and a 256GB SSD, it ensures smooth performance, whether browsing multiple tabs or handling large graphic files.',
    image: 'https://www.hindustantimes.com/ht-img/img/2024/07/03/550x309/pexels-monoar-rahman-22660-109371_1719999130396_1719999136635.jpg',
    seller: 'Mary K.',
    condition: 'Good',
    category: 'electronics'
  },
  {
    id: '4',
    title: 'Apple iPad',
    price: 295.00,
    description: '10th gen',
    image: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24128006/226361_Apple_iPad_10.9_10th_gen_DSeifert_0004.jpg?quality=90&strip=all&crop=0,10.732984293194,100,78.534031413613',
    seller: 'Peter S.',
    condition: 'Good',
    category: 'electronics'
  },
  {
    id: '5',
    title: 'Men Watch',
    price: 225.00,
    description: 'WINNER Vintage Engraved Gold Skeleton Mechanical Men Watch Carved Stainless Steel Strap 521',
    image: 'src/assests/image.png',
    seller: 'Bob T.',
    condition: 'Good',
    category: 'clothing'
  },
  {
    id: '6',
    title: 'EvoFox Warhammer Semi-Mechanical Gaming Keyboard',
    price: 3225.00,
    description: 'EvoFox Warhammer is Professional and Full Sized LED Semi-Mechanical Gaming Keyboard with the Floating Keycap Design. Besides, the foldable kickstand can let you set the keyboard to your most comfortable position.',
    image: 'https://m.media-amazon.com/images/I/61W8YtRGmQL._SX679_.jpg',
    seller: 'Sandy P.',
    condition: 'Good',
    category: 'electronics'
  },
  {
    id: '7',
    title: 'Gaming Mouse RGB LED USB Wired Optical Laser Game Mice For PC Laptop Computer',
    price: 225.00,
    description: 'The 64MP + 2MP dual rear camera setup captures detailed photos, while the 16MP front camera is perfect for selfies. With a 5000 mAh battery and 67W fast charging support, you can stay connected all day long.',
    image: 'https://i.ebayimg.com/images/g/3N4AAOSw5AFhsvZi/s-l1600.webp',
    seller: 'Kalli R.',
    condition: 'Good',
    category: 'electronics'
  },
  {
    id: '8',
    title: 'Headphones',
    price: 925.00,
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://i5.walmartimages.com/asr/f61f2bc7-0a77-4a57-aa03-8f901db4c06f.9a92b992f4d03b02b17356e3aee015a9.jpeg',
    seller: 'Addy U.',
    condition: 'Good',
    category: 'electronics'
  },
  {
    id: '9',
    title: 'Green Soul Beast Gaming Chair',
    price: 525.00,
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://m.media-amazon.com/images/I/71S6O6fJMDL._AC_.jpg',
    seller: 'Addy U.',
    condition: 'Good',
    category: 'furniture'
  },
  {
    id: '10',
    title: 'Zebronics ZEB-NC9000',
    price: 25.00,
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://zebronics.com/cdn/shop/products/ZEB-NC9000-pic1.jpg?v=1621063840&width=1200',
    seller: 'Addy U.',
    condition: 'Good',
    category: 'electronics'
  }
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [fadeIn, setFadeIn] = useState(false);
  const [scrollVisible, setScrollVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

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

  useEffect(() => {
    // Show/hide scroll to top button based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollVisible(true);
      } else {
        setScrollVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleRefresh = () => {
    setLoading(true);
    setFadeIn(false);
    setTimeout(() => {
      setProducts(sampleProducts);
      setLoading(false);
      setTimeout(() => {
        setFadeIn(true);
      }, 100);
    }, 1000);
  };

  const filteredProducts = products.filter(product => {
    // Filter by search term
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    // Filter by price range
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Item must match all filters
    return matchesSearchTerm && matchesCategory && matchesPrice;
  });

  // Skeleton loader component
  const ProductSkeleton = () => (
    <div className="border rounded-lg overflow-hidden animate-pulse bg-white shadow-sm">
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

  // Available categories for filtering
  const categories = [
    { id: 'all', name: 'All Items', icon: <ShoppingBag className="h-4 w-4" /> },
    { id: 'textbooks', name: 'Textbooks', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
    { id: 'electronics', name: 'Electronics', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { id: 'furniture', name: 'Furniture', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0H6" /></svg> },
    { id: 'clothing', name: 'Clothing', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v-2m-8 2v2m0-6V4m8 6V4m2 14h.01M6 20h.01" /></svg> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background decoration elements */}
      <div className="fixed top-40 -left-20 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="fixed top-20 -right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="fixed bottom-40 left-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="flex justify-between items-center mb-8 animate-fade-down">
          <h1 className="text-3xl font-bold flex items-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-4 shadow-md">
              <ShoppingBag className="h-6 w-6 text-white animate-swing" />
            </div>
            Student Marketplace
          </h1>
          <Link
            to="/add-product"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-full flex items-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px]"
          >
            <Plus className="h-5 w-5 mr-2" />
            <span className="font-medium">List Item</span>
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 opacity-0 hover:opacity-20 transition-opacity duration-300 blur"></span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-right relative overflow-hidden" style={{ animationDelay: '200ms' }}>
          {/* Decorative accent */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-500 h-5 w-5" />
              <input
                type="text"
                placeholder="Search items..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 focus:shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                disabled={loading}
              />
            </div>
            
            <div className="flex gap-2">
              <button 
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-4 py-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-all duration-300"
              >
                <Filter className={`h-5 w-5 mr-2 transition-colors duration-300 ${showFilters ? 'text-indigo-600' : 'text-gray-500'}`} />
                <span className={`font-medium transition-colors duration-300 ${showFilters ? 'text-indigo-600' : 'text-gray-700'}`}>Filters</span>
              </button>
              
              <button
                onClick={handleRefresh}
                className="flex items-center justify-center p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-all duration-300 group"
                disabled={loading}
              >
                <RefreshCw className={`h-5 w-5 text-gray-500 group-hover:text-indigo-600 ${loading ? 'animate-spin' : ''}`} />
              </button>
              
              <div className="flex rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors duration-300 ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-indigo-50'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors duration-300 ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500 hover:bg-indigo-50'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-100 animate-fade-down">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-grow">
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        min="0"
                        className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-md"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">Min</span>
                    </div>
                    <span className="text-gray-500">to</span>
                    <div className="relative flex-grow">
                      <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="number"
                        min="0"
                        className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-md"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500">Max</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <div className="flex flex-wrap gap-2">
                    {['All', 'New', 'Like New', 'Good', 'Fair', 'Poor'].map(condition => (
                      <button 
                        key={condition}
                        className="px-3 py-1 border border-gray-200 rounded-full text-sm font-medium hover:bg-indigo-50 hover:border-indigo-300 transition-colors duration-300"
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Category filter buttons */}
        <div className="flex flex-wrap gap-2 mb-6 animate-fade-right" style={{ animationDelay: '400ms' }}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:shadow-md ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:text-indigo-600 border border-gray-200'
              }`}
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <span className={selectedCategory === category.id ? 'text-white' : 'text-indigo-500'}>
                {category.icon}
              </span>
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {[...Array(9)].map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center animate-fade-up">
                <div className="inline-flex justify-center items-center w-20 h-20 bg-indigo-100 rounded-full mb-6">
                  <ShoppingBag className="h-10 w-10 text-indigo-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">We couldn't find any items matching your current filters. Try adjusting your search term or filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 5000]);
                  }}
                  className="px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full hover:bg-indigo-200 transition-colors duration-300 font-medium"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
                {filteredProducts.map((product, index) => (
                  <Link 
                    key={product.id} 
                    to={`/product/${product.id}`}
                    className={`opacity-0 ${fadeIn ? 'animate-fade-in' : ''} block`}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:translate-y-[-4px] transition-all duration-300 group ${
                      viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                    }`}>
                      <div className={`relative overflow-hidden ${viewMode === 'list' ? 'md:w-1/3' : 'h-48'}`}>
                        <img
                          src={product.image}
                          alt={product.title}
                          className={`w-full ${viewMode === 'list' ? 'h-full md:h-48' : 'h-48'} object-cover transition-transform duration-500 group-hover:scale-110`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium px-4 py-2 rounded-full bg-indigo-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            View Details
                          </span>
                        </div>
                        <div className="absolute top-2 right-2 flex flex-col gap-2 items-end">
                          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                            {product.condition}
                          </span>
                          {product.category && (
                            <span className="bg-white/80 backdrop-blur-sm text-indigo-600 text-xs px-3 py-1 rounded-full shadow-sm">
                              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className={`p-5 flex flex-col ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">{product.title}</h3>
                        <p className="text-gray-600 mb-4 flex-grow line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 text-indigo-600 mr-1" />
                            <span className="text-xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300 inline-block">
                              {product.price.toFixed(2)}
                            </span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 gap-1">
                            <Tag className="h-4 w-4" />
                            <span>{product.seller}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop} 
          className={`fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
            scrollVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <ChevronUp className="h-6 w-6" />
          <span className="absolute -inset-1 rounded-full bg-indigo-500 animate-ping opacity-20"></span>
        </button>
      </div>
    </div>
  );
};

export default Marketplace;