import { Link } from "react-router-dom";
import { BookOpen, Globe, Shield, Copyright } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-secondary" />
              <span className="font-montserrat font-bold text-xl">Word-List.com</span>
            </div>
            <p className="text-gray-300">
              Your comprehensive destination for exploring the English language through carefully curated word lists.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Our Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Word Finder
                </Link>
              </li>
              <li>
                <Link to="/anagram-solver" className="text-gray-300 hover:text-secondary transition-colors">
                  Anagram Solver
                </Link>
              </li>
              <li>
                <Link to="/word-unscrambler" className="text-gray-300 hover:text-secondary transition-colors">
                  Word Unscrambler
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Copyright className="h-4 w-4" />
            <span>{new Date().getFullYear()} Word-List.com. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};