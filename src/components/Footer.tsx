export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Recipe Collection</h3>
            <p className="text-gray-300 mb-4">
              Discover delicious recipes for every meal and occasion. From quick breakfasts to elaborate dinners, 
              find your next favorite dish in our curated collection.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Categories</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Breakfast</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Lunch</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Dinner</a></li>
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Dessert</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Recipe Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
