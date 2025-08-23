import { useEffect, useState } from "react";
import "./ui/preloader.css"; // Make sure this path to your CSS is correct

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // The preloader will be visible for this duration
    const timer = setTimeout(() => {
      setIsVisible(false);

      // Wait for the fade-out transition (defined in CSS) to finish before removing the component
      setTimeout(onComplete, 500); 
    }, 2500); // Total visibility time: 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${!isVisible ? 'fade-out' : ''}`}>
      <div className="preloader-container">
        
        {/* === THIS IS THE UPDATED IMAGE === */}
        <img
          src="/lovable-uploads/pre2.png" // The path is now set to your pre2.png image
          alt="Garishtha Infra Developers Logo"
          // The size is controlled by the `preloader-logo` class in your preloader.css file.
          // You can add Tailwind classes like "h-40 w-auto" here for quick size adjustments.
          className="preloader-logo"
        />

      </div>
    </div>
  );
};

export default Preloader;