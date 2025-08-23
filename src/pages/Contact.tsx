import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Send, Building2, Download } from "lucide-react";
import { useToast } from "../hooks/use-toast"; // Assuming you have this custom hook
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: ""
  });

  // --- The address for your business ---
  const address = "H.No. 8-107/1, Road No. 2, New Sai Nagar Colony, Peerzadiguda, Hyderabad, Telangana - 500098";
  
  // --- This automatically creates the correct Google Maps URL from the address ---
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const projects = [
    "Elite County",
    "Elite Homes",
    "Elite Reigir",
    "Gid Farms",
    "Red Gold",
    "Other / General Inquiry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "");
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.phone.length > 0 && formData.phone.length < 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_kjd0cjo', // Your EmailJS Service ID
        'template_bbobesp', // Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          project: formData.project,
          message: formData.message,
          to_email: 'garishthainfradevelopersreales@gmail.com',
        },
        'Xh7wrlMmS16k5L9kh' // Your EmailJS Public Key
      );

      toast({
        title: "Thank You for Your Inquiry!",
        description: "We have received your message and will get back to you soon.",
      });

      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        project: "", 
        message: "" 
      });

    } catch (error) { 
      console.error('Email sending failed:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Ready to invest in your future? Contact us today for personalized assistance.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p>
                      <a href="mailto:garishthainfradevelopersreales@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                        garishthainfradevelopersreales@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                {/* === THIS IS THE UPDATED CLICKABLE ADDRESS BLOCK === */}
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Office Address</h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-primary transition-colors">
                       {address}
                    </p>
                  </div>
                </a>

              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-3/5 card-elevated" id="contact-form">
              <h2 className="font-heading text-3xl font-bold text-primary mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    required 
                    disabled={isSubmitting}
                    className="w-full input" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    disabled={isSubmitting}
                    className="w-full input" 
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    required 
                    pattern="[0-9]{10}" 
                    title="Please enter a 10-digit phone number" 
                    disabled={isSubmitting}
                    className="w-full input" 
                    placeholder="Enter your 10-digit phone number"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Interested Project
                  </label>
                  <select 
                    id="project" 
                    name="project" 
                    value={formData.project} 
                    onChange={handleInputChange} 
                    disabled={isSubmitting}
                    className="w-full input"
                  >
                    <option value="" disabled>Select a project</option>
                    {projects.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    rows={4} 
                    disabled={isSubmitting}
                    className="w-full input" 
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 sm:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">Quick Actions</h2>
            <p className="text-muted-foreground">Choose the best way to connect with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-elevated text-center">
              <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Explore Projects</h3>
              <p className="text-muted-foreground mb-4">View our portfolio of premium properties</p>
              <button onClick={() => navigate('/projects')} className="btn-primary">View Now</button>
            </div>
            <div className="card-elevated text-center">
              <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Schedule Visit</h3>
              <p className="text-muted-foreground mb-4">Book a site visit to see our projects</p>
              <a href="#contact-form" className="btn-primary">Book Visit</a>
            </div>
            <div className="card-elevated text-center">
              <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-2">Get Brochure</h3>
              <p className="text-muted-foreground mb-4">Download detailed project information</p>
              <button onClick={() => navigate('/brochures')} className="btn-primary">Download</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;