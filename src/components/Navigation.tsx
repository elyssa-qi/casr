import React, { useState, useEffect } from "react";
import { Button } from "./ui/button"; // Already correct for src/components/
import { Link, useLocation } from "gatsby"; // Use Gatsby's Link and useLocation

const Navigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/#about",
      submenu: [
        { name: "Our Team", path: "/our-team" }
      ]
    },
    { name: "Services", path: "/#services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/") {
        return;
      }

      const sections = ["about", "services", "contact"];
      const scrollPosition = window.scrollY;

      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top + window.pageYOffset - 150;
        if (scrollPosition < aboutTop) {
          setActiveSection("home");
          return;
        }
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.pageYOffset - 150;
          const elementBottom = bottom + window.pageYOffset - 150;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/blog") {
      setActiveSection("blog");
    } else if (location.pathname === "/") {
      const scrollPosition = window.scrollY;
      window.scrollTo(scrollPosition, scrollPosition);
    }
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    // If not on the home page, navigate to home first
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`; // Fallback navigation
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 60;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 60;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  const handleNavigation = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.substring(2);
      scrollToSection(sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button
              onClick={() => window.location.href = "/"}
              className="text-2xl font-bold bg-gradient-to-r from-[#4e73b2] via-[#9b4dca] to-[#002a5b] bg-clip-text text-transparent"
            >
              CYASR
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.path.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-bold relative ${
                      activeSection === item.path.substring(2) ? "text-[#4e73b2] underline decoration-2 underline-offset-4" : ""
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e73b2] transition-all duration-300 group-hover:w-full ${
                      activeSection === item.path.substring(2) ? "hidden" : ""
                    }`}></span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-[#002a5b] hover:text-[#4e73b2] transition-colors font-bold relative ${
                      activeSection === item.name.toLowerCase() ? "text-[#4e73b2] underline decoration-2 underline-offset-4" : ""
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-[#4e73b2] transition-all duration-300 group-hover:w-full ${
                      activeSection === item.name.toLowerCase() ? "hidden" : ""
                    }`}></span>
                  </Link>
                )}
                {item.submenu && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-[#4e73b2]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.path.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold ${
                      activeSection === item.path.substring(2) ? "text-[#4e73b2] underline decoration-2 underline-offset-4" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold ${
                      activeSection === item.name.toLowerCase() ? "text-[#4e73b2] underline decoration-2 underline-offset-4" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
                {item.submenu && (
                  <div className="pl-8">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block w-full text-left px-4 py-2 text-[#002a5b] hover:text-[#4e73b2] font-bold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;