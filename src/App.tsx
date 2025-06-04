import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="fixed w-full glass z-50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Just Vibing</span>
            <Sparkles className="w-6 h-6 sparkle text-yellow-400" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#showcase" className="hover:text-gray-600">Showcase</a>
            <a href="#features" className="hover:text-gray-600">Features</a>
            <a href="#how-it-works" className="hover:text-gray-600">How it Works</a>
            <a href="#success" className="hover:text-gray-600">Success Stories</a>
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="gradient-button"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass p-4">
            <div className="flex flex-col space-y-4">
              <a href="#showcase" className="hover:text-gray-600">Showcase</a>
              <a href="#features" className="hover:text-gray-600">Features</a>
              <a href="#how-it-works" className="hover:text-gray-600">How it Works</a>
              <a href="#success" className="hover:text-gray-600">Success Stories</a>
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="gradient-button"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-6">
            Just Vibing
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12">
            Where Creative Vision Meets Opportunity
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="gradient-button">
              Get Started
            </button>
            <button className="border-2 border-gray-700 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Creator Showcase */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                  <div>
                    <h3 className="text-xl font-semibold">Creator Name</h3>
                    <p className="text-gray-600">Digital Artist</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Just Vibing helped me showcase my work to a global audience and connect with amazing opportunities."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      {isAuthOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="glass-card rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold">Welcome Back</h2>
              <button onClick={() => setIsAuthOpen(false)}>
                <X />
              </button>
            </div>

            <div className="flex mb-6">
              <button
                className={`flex-1 py-2 ${authTab === 'signin' ? 'border-b-2 border-purple-500' : ''}`}
                onClick={() => setAuthTab('signin')}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2 ${authTab === 'signup' ? 'border-b-2 border-purple-500' : ''}`}
                onClick={() => setAuthTab('signup')}
              >
                Sign Up
              </button>
            </div>

            <div className="space-y-4">
              <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center space-x-2">
                <span>Continue with Google</span>
              </button>
              <button className="w-full border border-gray-300 rounded-lg py-3 flex items-center justify-center space-x-2">
                <span>Continue with GitHub</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;