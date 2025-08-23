import { CheckCircle, Target, Eye, Users, Building2, Award } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-5xl font-bold mb-6">
              About Garishtha Infra Developers
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your Trusted Partner in Real Estate Venture Layouts
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                Welcome to Garishtha Infra Developers
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since our inception in 2019, Garishtha Infra Developers has been dedicated to 
                transforming dreams into reality by providing prime residential plots and 
                well-planned venture layouts. With a strong foundation in customer satisfaction, 
                transparency, and top-notch infrastructure, we specialize in crafting spaces 
                that align with your needs and vision for the future.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our projects are strategically located along the Hyderabad-Warangal Corridor, 
                a rapidly developing region with exceptional growth potential. As this highway 
                becomes a hub for economic and residential development, your investment today 
                could become your asset for tomorrow.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2019</div>
                  <div className="text-muted-foreground">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Garishtha Infra Developers office"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Why Choose Garishtha Infra Developers?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Customer Satisfaction First</h3>
                  <p className="text-muted-foreground">
                    Our customer-centric approach ensures that every project is designed and 
                    delivered with transparency, quality, and timely execution. Your peace of 
                    mind is our top priority.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Quality Infrastructure</h3>
                  <p className="text-muted-foreground">
                    Every plot we develop is backed by high-quality infrastructure and modern 
                    amenities, offering you a place that's not just a plot of land, but an 
                    investment in quality living.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Clear Title Projects</h3>
                  <p className="text-muted-foreground">
                    We guarantee clean, hassle-free documentation for every project, giving you 
                    confidence and peace of mind in your investment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-elevated">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">Affordable & Value-driven</h3>
                  <p className="text-muted-foreground">
                    We understand the importance of budget in decision-making, which is why we 
                    provide top-quality developments at competitive prices. With Garishtha Infra, 
                    you're getting value without compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card-elevated bg-gradient-to-br from-primary/5 to-primary-light/5">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To be the most trusted and preferred real estate developer in the Hyderabad-Warangal 
                Corridor, creating sustainable communities that enhance the quality of life for our 
                customers while delivering exceptional value and returns on their investment.
              </p>
            </div>
            
            <div className="card-elevated bg-gradient-to-br from-accent/10 to-accent-light/10">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                To transform dreams into reality by developing prime residential plots with 
                world-class infrastructure, maintaining the highest standards of transparency, 
                quality, and customer service while contributing to the growth of thriving communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Let's Build Your Future Together
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-4xl mx-auto">
            At Garishtha Infra Developers, we're not just creating plots; we're creating 
            opportunities for growth and prosperity. By investing along the Hyderabad-Warangal 
            Corridor, you're positioning yourself in one of the most exciting and rapidly 
            developing regions in the state.
          </p>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Let us help you secure a place in this thriving future.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;