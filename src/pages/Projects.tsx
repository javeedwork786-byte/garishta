import { Link } from "react-router-dom";
// --- 1. IMPORT THE Calendar ICON ---
import { MapPin, TrendingUp, CheckCircle, Calendar } from "lucide-react";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  const projects = projectsData;

  // Helper function to format the date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6">Our Esteemed Projects</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover prime residential plots and venture layouts along the Hyderabad-Warangal Corridor.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="card-elevated group block"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img src={encodeURI(project.coverImage)} alt={project.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">{project.name}</h3>
                  {/* --- 2. UPDATED METADATA SECTION TO INCLUDE DATE --- */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{formatDate(project.launchDate)}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6 h-10">{project.description}</p>
                  <div className="text-center bg-primary/10 text-primary py-2 px-4 rounded-md font-semibold group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    View Project
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Why Invest in Our Projects?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* High Appreciation */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">High Appreciation</h3>
              <p className="text-muted-foreground">Located along the rapidly developing Hyderabad-Warangal Corridor.</p>
            </div>
            
            {/* Clear Documentation */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Clear Documentation</h3>
              <p className="text-muted-foreground">All projects come with clear titles and hassle-free documentation.</p>
            </div>

            {/* Prime Locations */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">Prime Locations</h3>
              <p className="text-muted-foreground">Strategic locations with excellent connectivity to major IT hubs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;