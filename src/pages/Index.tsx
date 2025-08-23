import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Building, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { projectsData } from "../data/projectsData";

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        let current = 0;
        const increment = end / 100;
        const countTimer = setInterval(() => {
          current += increment;
          if (current >= end) {
            setCount(end);
            clearInterval(countTimer);
          } else {
            setCount(Math.floor(current));
          }
        }, 30);
        setHasAnimated(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [end, hasAnimated]);

  return <span>{count}{suffix}</span>;
};

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "video",
      src: "/lovable-uploads/Sequence 02_1.mp4",
      alt: "Garishtha Infra Development Video",
      duration: 9000 // 9 seconds
    },
    {
      type: "video",
      src: "/lovable-uploads/Sequence 02_2.mp4",
      alt: "Garishtha Infra Modern Development Video",
      duration: 18000 // 18 seconds
    },
    {
      type: "image",
      src: "/lovable-uploads/gha.png",
      alt: "Hyderabad-Warangal Corridor development",
      duration: 5000 // 5 seconds
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play carousel with custom timing
  useEffect(() => {
    const currentSlideDuration = slides[currentSlide].duration;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, currentSlideDuration);
    
    return () => clearInterval(timer);
  }, [currentSlide, slides]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Carousel Images and Video */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-blue-900/60"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transform Your Dreams Into 
                  <span className="text-yellow-400 block">Reality</span>
                </h1>
                <p className="text-xl mb-8 leading-relaxed opacity-90">
                  Prime residential plots and venture layouts along the Hyderabad-Warangal Corridor. 
                  Building trust since 2019 with quality infrastructure and transparent processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/projects"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Schedule Visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Company Logo Overlay */}
        <div className="absolute bottom-8 left-8 z-20">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">GI</span>
            </div>
            <span className="text-lg font-semibold">GARISHTHA INFRA DEVELOPERS</span>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Animated Counters */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-blue-100">Happy Families</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-blue-100">Acres Developed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={20} suffix="+" />
              </div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-blue-100">Clear Title</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Prime Projects - Connected to actual project data */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              OUR PRIME PROJECTS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our premium residential projects along the Hyderabad-Warangal Corridor
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={encodeURI(project.coverImage)}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">
                    📍 {project.location}
                  </p>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-300 text-center group-hover:bg-blue-600">
                    Read More 
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Why Choose Garishtha Infra Developers?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in real estate venture layouts with uncompromising quality and transparency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Satisfaction First</h3>
              <p className="text-gray-600">
                Customer-centric approach ensuring transparency, quality, and timely execution.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Quality Infrastructure</h3>
              <p className="text-gray-600">
                High-quality infrastructure and modern amenities for investment in quality living.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Clear Title Projects</h3>
              <p className="text-gray-600">
                Clean, hassle-free documentation giving you confidence and peace of mind.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Affordable & Value-driven</h3>
              <p className="text-gray-600">
                Top-quality developments at competitive prices. Value without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Strategic Location Advantage
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our projects are strategically located along the Hyderabad-Warangal Corridor, 
                a rapidly developing region with exceptional growth potential. As this highway 
                becomes a hub for economic and residential development, your investment today 
                could become your asset for tomorrow.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Excellent connectivity to major IT hubs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Upcoming infrastructure developments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">High appreciation potential</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Peaceful residential environment</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/real.png"
                alt="Hyderabad-Warangal Corridor development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Your Future Together
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're not just creating plots; we're creating opportunities for growth and prosperity. 
            Secure your place in this thriving future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold flex items-center justify-center transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <Link 
              to="/projects"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;