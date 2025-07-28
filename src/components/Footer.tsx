import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About MANAS</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              MANAS is an initiative by the Narcotics Control Bureau to combat
              drug abuse and trafficking. Report drug-related activities
              anonymously and help make India drug-free.
            </p>
            <div className="flex items-center space-x-2">
              <img
                src="/gov.svg"
                alt="Government of India"
                className="h-10 w-10 bg-white p-2"
              />
              <span className="text-sm text-gray-300">Government of India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About NCB
                </Link>
              </li>
              <li>
                <Link
                  to="/submit-tip"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Submit a Tip
                </Link>
              </li>
              <li>
                <Link
                  to="/awareness"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Drug Awareness
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-white font-medium">MANAS Helpline</p>
                  <p className="text-gray-300">1933 (Toll Free)</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300">info.ncbmanas@gov.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-white font-medium">Address</p>
                  <p className="text-gray-300">
                    Narcotics Control Bureau
                    <br />
                    West Block-IV, Wing-6, 2nd Floor
                    <br />
                    R.K. Puram, New Delhi - 110066
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Government Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.india.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>India.gov.in</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Ministry of Home Affairs</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.digitalindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Digital India</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link
                  to="/accessibility"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <div className="mb-2 md:mb-0">
              <p>
                © {new Date().getFullYear()} Narcotics Control Bureau,
                Government of India. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <span>|</span>
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/help" className="hover:text-white transition-colors">
                Help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
