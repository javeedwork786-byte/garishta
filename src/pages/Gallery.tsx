import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X, PlayCircle, Search, ChevronLeft, ChevronRight, CameraOff } from 'lucide-react';
import Slider from 'react-slick';

// --- Import Slick Carousel CSS files ---
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// --- A professional hero image for the top of the gallery page ---
const heroImageUrl = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop';

// --- FULLY POPULATED MASTER MEDIA DATABASE (ALL 56 ITEMS) ---
const allProjectMedia = [
  // Project 1: Elite County_vangapalli (7 items)
  { id: 1, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country1.mp4", type: 'video', alt: "Elite County Fly-through", thumbnail: "/Elite County_vangapalli/country5.jpeg" },
  { id: 2, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country2.mp4", type: 'video', alt: "Elite County Amenities", thumbnail: "/Elite County_vangapalli/country6.jpeg" },
  { id: 3, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country3.mp4", type: 'video', alt: "Project Walkthrough", thumbnail: "/Elite County_vangapalli/country4.jpeg" },
  { id: 4, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country4.jpeg", type: 'image', alt: "Project Layout" },
  { id: 5, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country5.jpeg", type: 'image', alt: "Entrance View" },
  { id: 6, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country6.jpeg", type: 'image', alt: "Greenery and Landscaping" },
  { id: 7, projectId: 'elite-county-vangapalli', src: "/Elite County_vangapalli/country7.mp4", type: 'video', alt: "Drone Shot", thumbnail: "/Elite County_vangapalli/country4.jpeg" },
  
  // Project 2: Elite homes_vangapally (4 items)
  { id: 8, projectId: 'elite-homes-vangapally', src: "/Elite homes_vangapally/vangapally.mp4", type: 'video', alt: "Elite Homes Tour", thumbnail: "/Elite homes_vangapally/vangapally2.jpeg" },
  { id: 9, projectId: 'elite-homes-vangapally', src: "/Elite homes_vangapally/vangapally2.jpeg", type: 'image', alt: "Model Villa Exterior" },
  { id: 10, projectId: 'elite-homes-vangapally', src: "/Elite homes_vangapally/vangapally3.jpeg", type: 'image', alt: "Street View" },
  { id: 11, projectId: 'elite-homes-vangapally', src: "/Elite homes_vangapally/vangapally4.jpeg", type: 'image', alt: "Interior Living Space" },

  // Project 3: elite_reigir (25 items)
  { id: 12, projectId: 'elite-raigiri', src: "/elite_reigir/Raigir1.mp4", type: 'video', alt: "Raigiri Project Overview", thumbnail: "/elite_reigir/Raigir2.jpeg" },
  ...Array.from({ length: 24 }, (_, i) => ({
    id: 13 + i,
    projectId: 'elite-raigiri',
    src: `/elite_reigir/Raigir${i + 2}.jpeg`,
    type: 'image',
    alt: `Elite Raigiri Site Image ${i + 2}`
  })),

  // Project 4: Gid Farms _veeravvelly (11 items)
  { id: 37, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly1.jpg", type: 'image', alt: "Gid Farms Entrance" },
  { id: 38, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly2.jpg", type: 'image', alt: "Farm Plot View" },
  { id: 39, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly3.jpg", type: 'image', alt: "Lush Greenery" },
  { id: 40, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly4.mp4", type: 'video', alt: "Gid Farms Drone View", thumbnail: "/Gid Farms _veeravvelly/veeravvelly1.jpg" },
  { id: 41, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly5.jpeg", type: 'image', alt: "Internal Roads" },
  { id: 42, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly6.jpeg", type: 'image', alt: "Plot Markings" },
  { id: 43, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly7.jpeg", type: 'image', alt: "Amenities Area" },
  { id: 44, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly8.jpeg", type: 'image', alt: "Water Connection" },
  { id: 45, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly9.jpeg", type: 'image', alt: "Electricity Lines" },
  { id: 46, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly10.jpeg", type: 'image', alt: "Compound Wall" },
  { id: 47, projectId: 'gid-farms-veeravvelly', src: "/Gid Farms _veeravvelly/veeravvelly11.jpeg", type: 'image', alt: "Serene Environment" },

  // Project 5: Red gold_motakondur (5 items)
  { id: 48, projectId: 'red-gold-motakondur', src: "/Red gold_motakondur/motakondur1.mp4", type: 'video', alt: "Red Gold Project Feature", thumbnail: "/Red gold_motakondur/motakondur2.jpeg" },
  { id: 49, projectId: 'red-gold-motakondur', src: "/Red gold_motakondur/motakondur2.jpeg", type: 'image', alt: "Red Gold Layout" },
  { id: 50, projectId: 'red-gold-motakondur', src: "/Red gold_motakondur/motakondur3.jpeg", type: 'image', alt: "Investment Plots" },
  { id: 51, projectId: 'red-gold-motakondur', src: "/Red gold_motakondur/motakondur4.jpeg", type: 'image', alt: "Roads and Infrastructure" },
  { id: 52, projectId: 'red-gold-motakondur', src: "/Red gold_motakondur/motakondur5.jpeg", type: 'image', alt: "Location Advantage" },

  // Project 6: Elite City (4 items)
  { id: 53, projectId: 'elite-city', src: "/Elitecity/elitecity1.jpg", type: 'image', alt: "Elite City Image 1" },
  { id: 54, projectId: 'elite-city', src: "/Elitecity/elitecity2.jpg", type: 'image', alt: "Elite City Image 2" },
  { id: 55, projectId: 'elite-city', src: "/Elitecity/elitecity3.jpg", type: 'image', alt: "Elite City Image 3" },
  { id: 56, projectId: 'elite-city', src: "/Elitecity/elitecity4.jpg", type: 'image', alt: "Elite City Image 4" },
];

const projects = [
  { id: 'elite-county-vangapalli', name: "Elite County" },
  { id: 'elite-homes-vangapally', name: "Elite Homes" },
  { id: 'elite-raigiri', name: "Elite Raigiri" },
  { id: 'gid-farms-veeravvelly', name: "Gid Farms" },
  { id: 'red-gold-motakondur', name: "Red Gold" },
  { id: 'elite-city', name: "Elite City" },
];

const Gallery = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const { projectId } = useParams();

  const activeProjectId = projectId || projects[0].id;
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0];
  const filteredMedia = allProjectMedia.filter(media => media.projectId === activeProjectId);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    asNavFor: nav2,
    prevArrow: <ChevronLeft className="slick-arrow slick-prev" />,
    nextArrow: <ChevronRight className="slick-arrow slick-next" />,
  };

  // --- THUMBNAIL SLIDER SETTINGS (WITH MOBILE IMPROVEMENTS) ---
  const thumbSliderSettings = {
    slidesToShow: 7, // Default for large desktops
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768, // Small Tablets / Large Phones
        settings: {
          slidesToShow: 3, // Shows 3 slides, making them larger
        }
      },
      {
        breakpoint: 480, // Most Mobile Phones
        settings: {
          slidesToShow: 2.5, // KEY CHANGE: Shows 2.5 slides for a much better mobile view
          centerPadding: '20px', // Adds some space
        }
      }
    ]
  };

  return (
    <>
      <style>{`
        .gallery-container .slick-arrow {
          position: absolute; top: 50%; transform: translateY(-50%); z-index: 10; cursor: pointer;
          color: white; background-color: rgba(0, 0, 0, 0.4); border-radius: 50%;
          width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
          transition: all 0.3s;
        }
        .gallery-container .slick-arrow:hover { background-color: rgba(0, 0, 0, 0.7); transform: translateY(-50%) scale(1.1); }
        .gallery-container .slick-prev { left: 16px; }
        .gallery-container .slick-next { right: 16px; }
        .thumbnail-slider .slick-slide {
          padding: 0 5px; transform: scale(0.9); transition: all 0.4s ease;
        }
        .thumbnail-slider .slick-current { transform: scale(1); }
        .thumbnail-slider .thumbnail-content {
          border: 3px solid transparent; border-radius: 8px; transition: border-color 0.4s ease;
          overflow: hidden;
        }
        .thumbnail-slider .slick-current .thumbnail-content {
          border-color: #0d3d5f; /* Your primary brand color */
        }
        @media (max-width: 768px) {
          .gallery-container .slick-arrow {
            display: none !important;
          }
        }
      `}</style>
      
      <section 
        className="relative h-[40vh] md:h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-4">
            <h1 className="font-heading text-4xl md:text-7xl font-bold tracking-tight">Project Galleries</h1>
            <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl">A visual journey through our landmark developments.</p>
        </div>
      </section>

      <section className="py-8 bg-secondary sticky top-[79px] z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {projects.map((project) => (
              <Link key={project.id} to={`/gallery/${project.id}`}
                className={`px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold text-sm sm:base transition-all duration-300 ${
                  activeProjectId === project.id ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {project.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMedia.length > 0 ? (
            <div key={activeProjectId} className="gallery-container">
              <Slider {...mainSliderSettings} ref={(slider) => setNav1(slider)}>
                {filteredMedia.map((media) => (
                  <div key={media.id} className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src={encodeURI(media.type === 'image' ? media.src : media.thumbnail)}
                      alt={media.alt}
                      className="w-full h-full object-cover" 
                    />
                    <div 
                      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => setSelectedMedia(media)}
                    >
                      {media.type === 'video' 
                        ? <PlayCircle className="h-20 w-20 text-white/90" />
                        : <Search className="h-20 w-20 text-white/90" />
                      }
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="mt-6 thumbnail-slider">
                <Slider {...thumbSliderSettings} ref={(slider) => setNav2(slider)}>
                  {filteredMedia.map((media) => (
                    <div key={media.id}>
                      <div className="thumbnail-content relative aspect-video cursor-pointer bg-gray-200">
                        <img
                          src={encodeURI(media.type === 'image' ? media.src : media.thumbnail)}
                          alt={media.alt}
                          className="w-full h-full object-cover"
                        />
                        {media.type === 'video' && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-1">
                            <PlayCircle className="h-6 w-6" />
                            <span className="text-xs font-semibold text-center mt-1">{media.alt}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto py-24 px-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                    <CameraOff className="h-8 w-8 text-gray-500" />
                </div>
                <h2 className="mt-8 text-3xl font-heading font-semibold text-gray-800 tracking-tight">
                    Gallery Coming Soon
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                    Media for the "{activeProject.name}" project is being prepared and will be available shortly.
                </p>
                <Link 
                    to="/projects" 
                    className="mt-10 inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-sm hover:bg-primary/90 transition-colors duration-300"
                >
                    Back to All Projects
                </Link>
            </div>
          )}
        </div>
      </section>

      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedMedia(null)}>
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white hover:text-accent transition-colors" onClick={() => setSelectedMedia(null)}><X className="h-8 w-8" /></button>
            {selectedMedia.type === 'image' ? (
              <img src={encodeURI(selectedMedia.src)} alt="Enlarged gallery view" className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto"/>
            ) : (
              <video src={encodeURI(selectedMedia.src)} className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto" controls autoPlay loop/>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;