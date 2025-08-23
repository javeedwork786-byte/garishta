import { useState, useEffect } from "react";
import { MessageCircle, X, Phone, Clock, Users } from "lucide-react";

const WhatsAppBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // --- THIS IS THE UPDATED LINE ---
  const whatsappNumber = "+917095359396"; // Your actual number is now integrated here.

  const message = "Hi! I'm interested in Garishtha Infra Developers projects. Can you provide more information?";

  useEffect(() => {
    // Show welcome message after 3 seconds
    const timer = setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    }, 3000);

    // Update current time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message);
    // This URL structure opens WhatsApp directly with the number and message
    const whatsappURL = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  const closeBot = () => {
    setIsOpen(false);
    setShowMessage(false);
  };

  return (
    <>
      {/* WhatsApp Bot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Welcome Message Popup */}
        {showMessage && !isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-[messageSlide_0.5s_ease-out] border border-border">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground mb-1">
                  Need help with property inquiry?
                </p>
                <p className="text-xs text-muted-foreground">
                  Chat with our property consultant now!
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{currentTime}</span>
                </div>
              </div>
              <button 
                onClick={() => setShowMessage(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Expanded Bot Interface */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl w-80 animate-[scaleIn_0.3s_ease-out] border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-success text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Property Consultant</h3>
                    <div className="flex items-center gap-1 text-xs text-white/80">
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                      <span>Online now</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={closeBot}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
              <div className="bg-secondary rounded-lg p-3 text-sm">
                <p className="text-foreground mb-2">
                  👋 Welcome to Garishtha Infra Developers!
                </p>
                <p className="text-muted-foreground text-xs">
                  We're here to help you find your dream property. How can we assist you today?
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <button 
                  onClick={openWhatsApp}
                  className="bg-success/10 text-success p-3 rounded-lg text-left text-sm hover:bg-success/20 transition-colors border border-success/20"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">Start WhatsApp Chat</span>
                  </div>
                  <p className="text-xs text-success/70 mt-1">
                    Get instant response from our experts
                  </p>
                </button>
                
                <div className="bg-primary/5 text-primary p-3 rounded-lg text-sm border border-primary/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">50+ Happy Families</span>
                  </div>
                  <p className="text-xs text-primary/70">
                    Join our satisfied customers
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-secondary border-t border-border">
              <p className="text-xs text-center text-muted-foreground">
                Available 9 AM - 8 PM | Response within 2 minutes
              </p>
            </div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-success rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-success/90 transition-all duration-300 animate-[whatsappPulse_2s_infinite] group"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
          )}
        </button>

        {/* Floating Action Indicators */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WhatsAppBot