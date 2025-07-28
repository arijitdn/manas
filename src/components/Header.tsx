import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Top bar with government info */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Helpline: 1933 (Toll Free)</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>info.ncbmanas@gov.in</span>
              </span>
            </div>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0">
              <Link to="/skip-to-content" className="hover:underline">
                Skip to Content
              </Link>
              <span>|</span>
              <Link to="/screen-reader" className="hover:underline">
                Screen Reader Access
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and title */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/logo.svg"
                alt="Government of India Emblem"
                className="w-44"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-primary font-medium"
            >
              About
            </Link>
            <Link
              to="/submit-tip"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Submit a Tip
            </Link>
            <Link
              to="/awareness"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Awareness
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contact
            </Link>
            <Link
              to="/submit-tip"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Report Now
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/submit-tip"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Submit a Tip
              </Link>
              <Link
                to="/awareness"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Awareness
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/submit-tip"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Report Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
