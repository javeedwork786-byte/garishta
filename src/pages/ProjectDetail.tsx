import { Link, useParams } from "react-router-dom";
import { Check, MapPin, ArrowLeft } from "lucide-react";
import { projectsData } from "../data/projectsData";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn-primary">Back to All Projects</Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-32 text-white bg-cover bg-center" 
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${encodeURI(project.heroImage)})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">{project.name}</h1>
          <p className="text-xl text-gray-300 mb-2">{project.location}</p>
        </div>
      </section>

      {/* Location Map Section */}
      {project.locationMapImage && (
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-primary">
                Site Location & Layout
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore the strategic location and master plan of {project.name}.
              </p>
            </div>
            {/* --- FIX: Constrained width and centered the map container --- */}
            <div className="max-w-5xl mx-auto shadow-2xl rounded-lg overflow-hidden border">
              <img 
                src={encodeURI(project.locationMapImage)} 
                alt={`Location map for ${project.name}`}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary">
              An Overview of Excellence
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the meticulously planned features and unparalleled location advantages that make {project.name} a landmark investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="font-heading text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">Project Highlights</h3>
              <ul className="space-y-4">
                {project.projectHighlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-3xl font-bold text-primary mb-8 border-l-4 border-primary pl-4">Location Highlights</h3>
              <ul className="space-y-4">
                {project.locationHighlights.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* "Back to All Projects" Button */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center btn-primary"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Projects
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail;