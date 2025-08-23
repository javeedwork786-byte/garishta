import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

const Footer = () => {
  // --- The address for your business ---
  const address = "H.No. 8-107/1, Road No. 2, New Sai Nagar Colony, Peerzadiguda, Hyderabad, Telangana - 500098";
  
  // --- This automatically creates the correct Google Maps URL from the address ---
  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)};'

  // A simple handler for the form that prevents page reload.
  const handleDummySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for your interest! Our newsletter is coming soon.");
  };

  return (
    <footer className="bg-[#0F2027] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Link to="/">
                <img 
                  src="/lovable-uploads/4.png"
                  alt="Garishtha Infra Developers"
                  className="h-28 w-auto" 
                />
              </Link>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Transforming dreams into reality since 2019 along the Hyderabad-Warangal Corridor.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#ec4899] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/brochures" className="text-gray-300 hover:text-white transition-colors">Brochures</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">

              {/* === THIS IS THE UPDATED CLICKABLE ADDRESS BLOCK === */}
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 group" // group is used for the hover effect
              >
                <MapPin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300 mt-1 flex-shrink-0" />
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                  {address}
                </p>
              </a>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <a href="mailto:garishthainfradevelopersreales@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                  garishthainfradevelopersreales@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">Join our newsletter for exclusive project updates.</p>
            <form onSubmit={handleDummySubmit} className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email" 
                required
                className="bg-[#1A2F38] text-white placeholder-gray-500 px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-[#E0B86A] focus:outline-none w-full"
              />
              <button type="submit" className="bg-[#E0B86A] text-[#0F2027] p-2.5 rounded-r-md hover:bg-opacity-90 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Garishtha Infra Developers. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;