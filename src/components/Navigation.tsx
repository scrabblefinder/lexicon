import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-secondary" />
            <span className="font-montserrat font-bold text-2xl text-white">Word-List.com</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/words-starting-with" className="text-white hover:text-secondary transition-colors">
              Starting With
            </Link>
            <Link to="/words-ending-with" className="text-white hover:text-secondary transition-colors">
              Ending With
            </Link>
            <Link to="/words-containing" className="text-white hover:text-secondary transition-colors">
              Containing
            </Link>
            <Link to="/words-by-length" className="text-white hover:text-secondary transition-colors">
              By Length
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};