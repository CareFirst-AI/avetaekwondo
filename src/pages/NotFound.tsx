import { useLocation, Link } from "react-router-dom"; // Added Link here
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // This is great for debugging your site later!
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <div className="max-w-md">
        <h1 className="font-heading text-8xl text-primary mb-4">404</h1>
        <h2 className="font-heading text-2xl uppercase text-foreground mb-4">
          Off the Mats!
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back to the action.
        </p>
        <Link 
          to="/" 
          className="bg-primary text-primary-foreground px-8 py-3 rounded-sm font-heading uppercase tracking-wider hover:opacity-90 transition-opacity inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
