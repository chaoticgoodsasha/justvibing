import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Menu, X, Star, Heart, Zap, Users, Clock, Award, ArrowRight, ChevronDown, Mail, GitHub, Twitter, Instagram } from 'lucide-react';
import ParticleEffect from '../components/ParticleEffect';

function HomePage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'signin' | 'signup'>('signin');
  const [scrollY, setScrollY] = useState(0);
  const particlesContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="gradient-bg">
      {/* Particles Background */}
      <div ref={particlesContainerRef} className="particles-container"></div>
      <ParticleEffect count={30} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden" id="hero">
        <div className="container mx-auto text-center z-10 py-20">
          <div className="relative">
            <Star className="absolute -top-20 -left-10 w-12 h-12 text-yellow-400 opacity-80 sparkle" />
            <Star className="absolute top-0 right-0 w-8 h-8 text-pink-400 opacity-70 sparkle" style={{animationDelay: '0.5s'}} />
            <Star className="absolute bottom-0 left-10 w-6 h-6 text-purple-400 opacity-60 sparkle" style={{animationDelay: '1s'}} />
            
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold gradient-text mb-8 fade-in">
              Just Vibing
            </h1>
            
            <div className="relative mb-16">
              <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium mb-12 fade-in delay-200 max-w-3xl mx-auto">
                Where Creative Vision Meets Opportunity
              </p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 fade-in delay-400">
              <button className="gradient-button group flex items-center justify-center relative overflow-hidden">
                <span className="flex items-center z-10">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button className="relative overflow-hidden border-2 border-gray-700 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all hover:bg-gray-700 hover:text-white hover:scale-105 group">
                <span className="flex items-center">
                  Learn More
                  <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in delay-800">
          <button 
            onClick={() => scrollToSection('showcase')} 
            className="text-gray-700 hover:text-purple-600 transition-colors duration-300 animate-bounce"
          >
            <ChevronDown className="w-10 h-10" />
          </button>
        </div>
      </section>

      {/* Creator Showcase */}
      <section id="showcase" className="py-32 px-6 relative">
        <div className="container mx-auto">
          <h2 className="section-title">
            Showcase Your Creative Vision
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                title: "Digital Artist",
                image: 1,
                quote: "Just Vibing helped me showcase my digital art to a global audience and connect with amazing collaborative opportunities.",
                delay: 0
              },
              {
                name: "Samira Chen",
                title: "Music Producer",
                image: 2,
                quote: "Within weeks of joining, I connected with other musicians and landed my first major production contract. The exposure is incredible!",
                delay: 200
              },
              {
                name: "Jordan Taylor",
                title: "Content Creator",
                image: 3,
                quote: "The platform's intuitive design makes it so easy to highlight my best work and reach people who truly appreciate my creative style.",
                delay: 400
              }
            ].map((creator, i) => (
              <div key={i} className={`glass-card rounded-xl p-6 shadow-lg fade-in delay-${creator.delay}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg flex items-center justify-center overflow-hidden">
                    <span className="text-white font-bold">{creator.image}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{creator.name}</h3>
                    <p className="text-gray-600">{creator.title}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "{creator.quote}"
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" fill="#facc15" />
                    ))}
                  </div>
                  <button className="text-purple-600 font-medium hover:underline flex items-center">
                    View Profile <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="gradient-button">
              Join Our Creative Community
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-32 px-6 relative">
        <div className="container mx-auto">
          <h2 className="section-title">
            Powerful Features for Creators
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                icon: <Zap className="w-10 h-10 text-pink-500" />,
                title: "Intuitive Platform",
                description: "Our user-friendly interface makes showcasing your work effortless, allowing you to focus on what matters most: your creativity.",
                delay: 0
              },
              {
                icon: <Users className="w-10 h-10 text-purple-500" />,
                title: "Global Community",
                description: "Connect with like-minded creators, collaborate on projects, and expand your network across borders and disciplines.",
                delay: 200
              },
              {
                icon: <Award className="w-10 h-10 text-yellow-500" />,
                title: "Exclusive Opportunities",
                description: "Gain access to unique projects, funding opportunities, and partnerships available only to our vibrant community members.",
                delay: 400
              }
            ].map((feature, i) => (
              <div key={i} className={`glass-card rounded-xl p-8 text-center fade-in delay-${feature.delay} group hover:transform hover:translate-y-[-10px] transition-all duration-300`}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white bg-opacity-30 backdrop-blur-sm transform group-hover:rotate-12 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 relative">
        <div className="container mx-auto">
          <h2 className="section-title">
            How It Works
          </h2>
          
          <div className="relative mt-20">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded hidden md:block"></div>
            
            {/* Steps */}
            <div className="space-y-24">
              {[
                {
                  number: "01",
                  title: "Create Your Profile",
                  description: "Sign up and build your personalized creator profile in minutes. Highlight your skills, showcase your portfolio, and tell your unique story.",
                  icon: <Users className="w-8 h-8" />,
                  align: "right",
                  delay: 0
                },
                {
                  number: "02",
                  title: "Upload Your Best Work",
                  description: "Share your creative projects with our community. Our platform supports various media formats to perfectly showcase your talents.",
                  icon: <Zap className="w-8 h-8" />,
                  align: "left",
                  delay: 200
                },
                {
                  number: "03",
                  title: "Connect & Collaborate",
                  description: "Engage with fellow creators, receive feedback, and discover collaboration opportunities that align with your creative vision.",
                  icon: <Heart className="w-8 h-8" />,
                  align: "right",
                  delay: 400
                },
                {
                  number: "04",
                  title: "Grow Your Audience",
                  description: "Expand your reach through our global network. Gain visibility with potential clients, partners, and fans who appreciate your work.",
                  icon: <Award className="w-8 h-8" />,
                  align: "left",
                  delay: 600
                }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col ${step.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center fade-in delay-${step.delay}`}>
                  <div className={`md:w-1/2 ${step.align === 'left' ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="mb-4 text-5xl font-extrabold text-gray-200">{step.number}</div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center my-8 md:my-0 relative">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg z-10 glass pulse">
                      {step.icon}
                    </div>
                    {/* Connector for mobile */}
                    <div className="absolute h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 md:hidden"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section id="success" className="py-32 px-6 relative">
        <div className="container mx-auto">
          <h2 className="section-title">
            Success Stories
          </h2>
          
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`glass-card rounded-xl p-6 shadow-lg fade-in delay-${(i % 3) * 200}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg flex items-center justify-center overflow-hidden">
                    <span className="text-white font-bold">{i}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Success Story #{i}</h3>
                    <p className="text-gray-600">
                      {["Filmmaker", "Designer", "Musician", "Photographer", "Illustrator", "Writer"][i % 6]}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Thanks to Just Vibing, I was able to connect with {i % 2 === 0 ? "industry professionals" : "other creators"} and {i % 3 === 0 ? "secure my dream project" : i % 3 === 1 ? "build my brand" : "expand my audience"} within just a few months!"
                </p>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} className="w-4 h-4 text-yellow-400" fill="#facc15" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {["2 months ago", "1 week ago", "3 days ago", "Yesterday", "Just now", "4 weeks ago"][i % 6]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call To Action */}
      <section className="py-32 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Join thousands of creators already thriving in our community. Your creative future starts here.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="gradient-button text-lg py-4 px-8"
              >
                <span className="flex items-center">
                  Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </button>
              <button className="border-2 border-gray-700 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-all hover:bg-gray-700 hover:text-white text-lg">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-16 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-bold">Just Vibing</span>
                <Sparkles className="w-6 h-6 sparkle text-yellow-400" />
              </div>
              <p className="text-gray-700 mb-6">
                Where creative vision meets opportunity. Join our vibrant community today.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                  <GitHub className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Platform</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Just Vibing. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors">
                <Mail className="w-5 h-5 mr-2" /> Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      {isAuthOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="glass-card rounded-xl p-8 max-w-md w-full mx-4 fade-in">
            <div className="flex justify-between mb-6">
              <h2 className="text-2xl font-bold gradient-text">{authTab === 'signin' ? 'Welcome Back' : 'Join Our Community'}</h2>
              <button 
                onClick={() => setIsAuthOpen(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex mb-8">
              <button
                className={`flex-1 py-3 transition-all duration-300 ${authTab === 'signin' ? 'border-b-2 border-purple-500 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setAuthTab('signin')}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-3 transition-all duration-300 ${authTab === 'signup' ? 'border-b-2 border-purple-500 font-bold' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setAuthTab('signup')}
              >
                Sign Up
              </button>
            </div>

            {authTab === 'signin' ? (
              <div className="space-y-5 fade-in">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" id="password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" placeholder="Your password" />
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-500 mr-2" />
                    Remember me
                  </label>
                  <a href="#" className="text-purple-600 hover:text-purple-800 transition-colors">Forgot password?</a>
                </div>

                <button className="w-full gradient-button py-3">Sign In</button>
                
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-600">or continue with</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <span>Google</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5 fade-in">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="signup-email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" placeholder="Your email" />
                  </div>
                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" id="signup-password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all" placeholder="Create a password" />
                  </div>
                </div>
                
                <div className="text-sm">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded text-purple-500 mr-2" />
                    I agree to the <a href="#" className="text-purple-600 hover:text-purple-800 ml-1">Terms of Service</a> and <a href="#" className="text-purple-600 hover:text-purple-800">Privacy Policy</a>
                  </label>
                </div>

                <button className="w-full gradient-button py-3">Create Account</button>
                
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-600">or sign up with</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <span>Google</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <span>GitHub</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;