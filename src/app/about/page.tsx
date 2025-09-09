'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const features = [
    {
      icon: '🍳',
      title: 'Curated Recipes',
      description: 'Hand-picked recipes from professional chefs and home cooks around the world.'
    },
    {
      icon: '⏱️',
      title: 'Quick & Easy',
      description: 'Find recipes that fit your schedule with our time-based filtering system.'
    },
    {
      icon: '👨‍🍳',
      title: 'Chef\'s Choice',
      description: 'Discover our specially selected recipes marked by our culinary experts.'
    },
    {
      icon: '💖',
      title: 'Save Favorites',
      description: 'Create your personal collection of favorite recipes for easy access.'
    },
    {
      icon: '🔍',
      title: 'Smart Search',
      description: 'Find exactly what you\'re looking for with our advanced search and filter options.'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Access your recipes anywhere with our responsive design that works on all devices.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Recipes' },
    { number: '50+', label: 'Categories' },
    { number: '10K+', label: 'Happy Cooks' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mb-6 shadow-lg">
            <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Recipe Collection</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're passionate about bringing you the best recipes from around the world. 
            Our mission is to make cooking accessible, enjoyable, and delicious for everyone.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Recipe Collection, we believe that cooking should be fun, accessible, and rewarding. 
                We've curated a diverse collection of recipes that cater to all skill levels, dietary preferences, 
                and time constraints.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're a seasoned chef or just starting your culinary journey, our platform provides 
                everything you need to create delicious meals that bring joy to your table.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the go-to destination for food lovers worldwide, 
                inspiring creativity in the kitchen and fostering a community of passionate cooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Recipe Collection?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We've built our platform with you in mind, focusing on features that make cooking easier and more enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We're a passionate team of food enthusiasts, developers, and designers 
            working together to bring you the best cooking experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Chef Maria</h3>
              <p className="text-gray-600 mb-4">Head Chef & Recipe Curator</p>
              <p className="text-sm text-gray-500">
                With 15+ years of culinary experience, Maria ensures every recipe meets our high standards.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alex Chen</h3>
              <p className="text-gray-600 mb-4">Lead Developer</p>
              <p className="text-sm text-gray-500">
                Alex brings our platform to life with cutting-edge technology and user-friendly design.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">UI/UX Designer</p>
              <p className="text-sm text-gray-500">
                Sarah creates beautiful, intuitive interfaces that make cooking a delightful experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Cooking?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of home cooks who trust Recipe Collection for their culinary adventures.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Explore Recipes
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

