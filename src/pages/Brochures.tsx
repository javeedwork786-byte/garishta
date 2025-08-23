// src/pages/Brochures.tsx

import { Link } from "react-router-dom";
import { Download, ArrowRight, Building, Home, LandPlot } from "lucide-react";

// --- Brochure Data ---
const brochures = [
  {
    title: "Elite city",
    description: "Discover opulent living in our signature villa collection, where luxury meets tranquility.",
    icon: Home,
    file: "/lovable-uploads/broucher1.pdf",
  },
  {
    title: "Elite Homes",
    description: "Explore modern, high-rise apartments designed for a contemporary urban lifestyle.",
    icon: Building,
    file: "/lovable-uploads/broucher2.pdf",
  },
  {
    title: "Garishtha Farms",
    description: "Find the perfect plot to build your custom dream home in our exclusive, gated community.",
    icon: LandPlot,
    file: "/lovable-uploads/broucher3.pdf",
  },
  {
    title: "Garishtha red gold",
    description: "Breathtaking views and premium amenities await you at our luxury sky residences.",
    icon: Building,
    file: "/lovable-uploads/broucher4.pdf",
  },
  {
    title: "Garishtha Elite",
    description: "An exclusive estate offering unparalleled privacy, craftsmanship, and bespoke design.",
    icon: Home,
    file: "/lovable-uploads/broucher5.pdf",
  },
];


const Brochures = () => { // Changed component name to Brochures to match filename
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-24 sm:py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Explore Our Exclusive Properties
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-white/90">
            Download our detailed brochures to discover the unparalleled luxury and meticulous design of Garishtha's signature projects.
          </p>
        </div>
      </section>

      {/* Brochures Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Collections</h2>
            <p className="mt-4 text-lg text-muted-foreground">Click on any brochure to download and view the details.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brochures.map((brochure, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary transition-colors duration-300">
                    <brochure.icon className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{brochure.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">{brochure.description}</p>
                  
                  <a
                    href={brochure.file}
                    download
                    className="inline-flex items-center font-semibold text-primary group-hover:text-accent-foreground"
                  >
                    Download PDF
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}

             <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Have a Project in Mind?</h3>
                <p className="text-muted-foreground mb-6 text-sm">Let's discuss how we can bring your vision to life.</p>
                <Link to="/contact" className="btn-primary">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

          </div>
        </div>
      </section>

       <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Experience Garishtha Luxury?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your dream home is just a visit away. Schedule a private tour with our property consultants to experience the craftsmanship firsthand.
            </p>
            <div className="mt-8">
            <Link to="/contact" className="btn-primary btn-lg">
                Schedule a Site Visit
            </Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default Brochures;