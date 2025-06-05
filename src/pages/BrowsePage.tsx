import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  Heart, 
  Menu, 
  X,
  TrendingUp,
  Clock,
  Users
} from 'lucide-react';
import ParticleEffect from '../components/ParticleEffect';

const FILTER_OPTIONS = [
  "All",
  "Existing Product", 
  "Original Concept"
];

const SORT_OPTIONS = [
  { label: "Trending", icon: TrendingUp },
  { label: "Newest", icon: Clock },
  { label: "Most Popular", icon: Users }
];

const SAMPLE_PROTOTYPES = [
  {
    id: 1,
    title: "Neural Canvas",
    creator: "Alex Rivera",
    type: "Original Concept",
    image: "/api/placeholder/400/300",
    votes: 245,
    rating: 4.9,
    description: "An AI-powered digital canvas that transforms your sketches into beautiful artwork using advanced neural networks."
  },
  {
    id: 2,
    title: "SoundScape Pro",
    creator: "Samira Chen",
    type: "Existing Product",
    image: "/api/placeholder/400/300",
    votes: 189,
    rating: 4.7,
    description: "Interactive music visualization app that responds to ambient sounds in your environment with real-time visual effects."
  },
  {
    id: 3,
    title: "EcoTracker Dashboard",
    creator: "Jordan Taylor",
    type: "Original Concept",
    image: "/api/placeholder/400/300",
    votes: 321,
    rating: 4.8,
    description: "Track and visualize your personal environmental impact with customizable dashboards and actionable insights."
  },
  {
    id: 4,
    title: "Dreamscape VR",
    creator: "Maya Johnson",
    type: "Existing Product",
    image: "/api/placeholder/400/300",
    votes: 412,
    rating: 5.0,
    description: "Immersive virtual reality experience that brings your dreams to life with cutting-edge haptic feedback."
  },
  {
    id: 5,
    title: "Pixel Kingdom",
    creator: "Liam Wilson",
    type: "Original Concept",
    image: "/api/placeholder/400/300",
    votes: 278,
    rating: 4.6,
    description: "Retro-inspired strategy game with modern gameplay mechanics and procedurally generated worlds."
  },
  {
    id: 6,
    title: "Fluent UI Kit",
    creator: "Sophie Garcia",
    type: "Existing Product",
    image: "/api/placeholder/400/300",
    votes: 156,
    rating: 4.5,
    description: "Comprehensive UI component library with customizable themes and accessibility features for modern apps."
  },
  {
    id: 7,
    title: "Quantum Notes",
    creator: "Dev Patel",
    type: "Original Concept",
    image: "/api/placeholder/400/300",
    votes: 203,
    rating: 4.4,
    description: "Next-generation note-taking app with AI-powered organization and cross-platform synchronization."
  },
  {
    id: 8,
    title: "Mindful Meditation",
    creator: "Elena Rodriguez",
    type: "Existing Product",
    image: "/api/placeholder/400/300",
    votes: 167,
    rating: 4.6,
    description: "Personalized meditation experience with biometric feedback and progress tracking for mindfulness."
  },
  {
    id: 9,
    title: "CodeFlow IDE",
    creator: "Ryan Kim",
    type: "Original Concept",
    image: "/api/placeholder/400/300",
    votes: 298,
    rating: 4.7,
    description: "Revolutionary code editor with AI-assisted programming and collaborative real-time editing features."
  }
];

function BrowsePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Trending");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPrototypes, setFilteredPrototypes] = useState(SAMPLE_PROTOTYPES);
  const [scrollY, setScrollY] = useState(0);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter and search functionality
  useEffect(() => {
    let filtered = SAMPLE_PROTOTYPES;
    
    // Filter by type
    if (selectedFilter !== "All") {
      filtered = filtered.filter(proto => proto.type === selectedFilter);
    }
    
    // Search functionality
    if (searchQuery.trim() !== "") {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(proto => 
        proto.title.toLowerCase().includes(lowerQuery) || 
        proto.creator.toLowerCase().includes(lowerQuery) ||
        proto.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    // Sort functionality
    switch (selectedSort) {
      case "Trending":
        filtered = [...filtered].sort((a, b) => b.votes - a.votes);
        break;
      case "Newest":
        filtered = [...filtered].sort((a, b) => b.id - a.id);
        break;
      case "Most Popular":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
    }
    
    setFilteredPrototypes(filtered);
  }, [selectedFilter, selectedSort, searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="gradient-bg min-h-screen">
      {/* Particles Background */}
      <div ref={particlesContainerRef} className="particles-container"></div>
      <ParticleEffect count={30} />

      {/* Glassmorphism Header */}
      <header 
        className={`fixed w-full glass z-50 transition-all duration-300 ${
          scrollY > 50 ? 'py-2 bg-opacity-30' : 'py-4 bg-opacity-10'
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-500">
              Just Vibing
            </span>
            <Sparkles className="w-6 h-6 sparkle text-yellow-400 transition-transform group-hover:scale-125" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="relative py-2 overflow-hidden group">
              <span className="relative z-10 text-gray-800 font-medium transition-colors duration-300 group-hover:text-purple-600">
                Home
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button className="relative py-2 overflow-hidden group">
              <span className="relative z-10 text-purple-600 font-medium">
                Browse
              </span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></span>
            </button>
            <button className="relative py-2 overflow-hidden group">
              <span className="relative z-10 text-gray-800 font-medium transition-colors duration-300 group-hover:text-purple-600">
                Create
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button className="gradient-button">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mx-4 mt-4 rounded-xl p-6 fade-in">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-800 font-medium hover:text-purple-600 transition-colors">
                Home
              </a>
              <button className="text-purple-600 font-medium text-left">
                Browse
              </button>
              <button className="text-gray-800 font-medium hover:text-purple-600 transition-colors">
                Create
              </button>
              <button className="gradient-button mt-4">
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text mb-6 fade-in">
              Browse Prototypes
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-3xl mx-auto fade-in delay-200">
              Discover innovative prototypes from our creative community
            </p>
          </div>

          {/* Search Box with Glassmorphism */}
          <div className="glass-card rounded-xl p-6 mb-8 fade-in delay-300">
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search prototypes, creators, or keywords..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg glass border border-white border-opacity-20 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 fade-in delay-400">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {FILTER_OPTIONS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'gradient-button text-white'
                      : 'glass-card text-gray-800 hover:bg-white hover:bg-opacity-30 hover:transform hover:scale-105'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Sort Buttons */}
            <div className="flex flex-wrap gap-3 md:ml-auto">
              {SORT_OPTIONS.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  onClick={() => setSelectedSort(label)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedSort === label
                      ? 'gradient-button text-white'
                      : 'glass-card text-gray-800 hover:bg-white hover:bg-opacity-30 hover:transform hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 fade-in delay-500">
            <p className="text-gray-700 font-medium">
              Showing {filteredPrototypes.length} prototype{filteredPrototypes.length !== 1 ? 's' : ''}
              {selectedFilter !== "All" && ` in ${selectedFilter}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>

          {/* Prototype Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrototypes.length > 0 ? (
              filteredPrototypes.map((prototype, index) => (
                <div 
                  key={prototype.id} 
                  className={`glass-card rounded-xl overflow-hidden hover:transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300 fade-in delay-${(index % 3) * 100 + 600}`}
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Sparkles className="w-12 h-12 mx-auto mb-2 opacity-80" />
                        <p className="text-sm font-medium opacity-90">Prototype Preview</p>
                      </div>
                    </div>
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-white">{prototype.type}</span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{prototype.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">by {prototype.creator}</p>
                    <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">{prototype.description}</p>
                    
                    {/* Card Footer */}
                    <div className="flex justify-between items-center">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition-colors group">
                        <Heart className="w-5 h-5 transition-transform group-hover:scale-110" />
                        <span className="font-medium">{prototype.votes}</span>
                      </button>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium text-gray-700">{prototype.rating}</span>
                        </div>
                        <button className="text-purple-600 font-medium hover:text-purple-800 transition-colors flex items-center group">
                          View Details 
                          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 fade-in">
                <div className="glass-card rounded-xl p-12 max-w-md mx-auto">
                  <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">No prototypes found</h3>
                  <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
                  <button 
                    onClick={() => {
                      setSelectedFilter("All");
                      setSelectedSort("Trending");
                      setSearchQuery("");
                    }}
                    className="gradient-button"
                  >
                    View All Prototypes
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPrototypes.length > 0 && (
            <div className="flex justify-center mt-16 fade-in delay-800">
              <div className="flex space-x-2">
                {[1, 2, 3].map((page) => (
                  <button 
                    key={page}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-medium transition-all duration-300 ${
                      page === 1 
                        ? 'gradient-button text-white' 
                        : 'glass-card text-gray-700 hover:bg-white hover:bg-opacity-30 hover:transform hover:scale-110'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-gray-700 hover:bg-white hover:bg-opacity-30 hover:transform hover:scale-110 transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowsePage;