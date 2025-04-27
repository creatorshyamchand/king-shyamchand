
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-academy-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Crown className="text-white" size={28} />
          <span className="font-bold text-xl md:text-2xl text-white">King Shyam Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-academy-light font-medium">
            Home
          </Link>
          <Link to="/courses" className="text-white hover:text-academy-light font-medium">
            Courses
          </Link>
          <Link to="/about" className="text-white hover:text-academy-light font-medium">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-academy-light font-medium">
            Contact
          </Link>
          <Link to="/admin">
            <Button className="bg-white text-academy-primary hover:bg-academy-light">
              Client Portal
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-academy-primary px-4 py-3 flex flex-col gap-3 shadow-lg">
            <Link 
              to="/" 
              className="text-white py-2 px-3 hover:bg-academy-secondary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="text-white py-2 px-3 hover:bg-academy-secondary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about" 
              className="text-white py-2 px-3 hover:bg-academy-secondary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white py-2 px-3 hover:bg-academy-secondary rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex items-center justify-end py-2">
              <Link 
                to="/admin" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="bg-white text-academy-primary hover:bg-academy-light">
                  Admin Login
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
