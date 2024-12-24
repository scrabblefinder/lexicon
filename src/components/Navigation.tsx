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
            <Link to="/" className="text-white hover:text-secondary transition-colors">
              Homepage
            </Link>
            <Link to="/anagram-solver" className="text-white hover:text-secondary transition-colors">
              Anagram Solver
            </Link>
            <Link to="/word-unscrambler" className="text-white hover:text-secondary transition-colors">
              Word Unscrambler
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};