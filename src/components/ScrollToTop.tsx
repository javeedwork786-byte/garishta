import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * This component automatically scrolls the window to the top (coordinates 0,0)
 * every time the user navigates to a new page (i.e., when the URL pathname changes).
 *
 * It should be placed inside the <BrowserRouter> component in your main App file
 * so it can access the router's context and listen for location changes.
 *
 * The component itself renders nothing to the DOM (it returns null).
 */
const ScrollToTop = () => {
  // The useLocation hook returns the current location object. We destructure
  // the pathname from it, which is the part of the URL after the domain.
  // Example: in "http://example.com/about", the pathname is "/about".
  const { pathname } = useLocation();

  // The useEffect hook is used to perform side effects in function components.
  // This effect will run after every render where the `pathname` has changed.
  useEffect(() => {
    // The window.scrollTo(0, 0) method scrolls the document to the specified
    // coordinates. (0, 0) means the top-left corner of the page.
    window.scrollTo(0, 0);
  }, [pathname]); // The dependency array [pathname] tells React to only re-run
                   // this effect if the pathname value changes between renders.

  // This component's sole purpose is to run the effect, so it renders nothing.
  return null;
};

export default ScrollToTop;