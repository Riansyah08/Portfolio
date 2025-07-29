import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const scrollProps = {
    smooth: true,
    duration: 500,
    offset: -80,
    className:
      "relative cursor-pointer transition-all duration-300 hover:text-cyan-400 group",
  };

  const closeMenu = () => setMenuOpen(false);

  const BrainIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13 3V6C13 6.6 12.6 7 12 7S11 6.6 11 6V3L9 1L3 7V9H5C5 10.7 6.3 12 8 12S11 10.7 11 9H13C13 10.7 14.3 12 16 12S19 10.7 19 9H21ZM7.5 11C6.7 11 6 10.3 6 9.5S6.7 8 7.5 8S9 8.7 9 9.5S8.3 11 7.5 11ZM16.5 11C15.7 11 15 10.3 15 9.5S15.7 8 16.5 8S18 8.7 18 9.5S17.3 11 16.5 11Z" />
    </svg>
  );

  const CodeIcon = () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M8 3L4 7L8 11L9.4 9.6L6.8 7L9.4 4.4L8 3ZM16 3L14.6 4.4L17.2 7L14.6 9.6L16 11L20 7L16 3Z" />
    </svg>
  );

  const MenuIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-slate-200"
    >
      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
    </svg>
  );

  const CloseIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-slate-200"
    >
      <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    </svg>
  );

  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl border-b border-slate-800/50 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <BrainIcon />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                <CodeIcon />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="cursor-pointer hover:text-blue-400 transition">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to="home"
                    {...scrollProps}
                    className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Riyansyah
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={{ pathname: "/", hash: "#home" }}
                    className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    Riyansyah
                  </RouterLink>
                )}
              </div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                AI & WEB DEVELOPER
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8 text-slate-200 font-medium">
            {location.pathname === "/" ? (
              <>
                <li>
                  <ScrollLink to="home" {...scrollProps}>
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="About-Section" {...scrollProps}>
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="Experience-Section" {...scrollProps}>
                    <span className="relative z-10">Experience</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="Certificates-Section" {...scrollProps}>
                    <span className="relative z-10">Certificates</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <RouterLink
                    to={{ pathname: "/", hash: "#home" }}
                    className={scrollProps.className}
                    onClick={closeMenu}
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to={{ pathname: "/", hash: "#About" }}
                    className={scrollProps.className}
                    onClick={closeMenu}
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to={{ pathname: "/", hash: "#Experience-Section" }}
                    className={scrollProps.className}
                    onClick={closeMenu}
                  >
                    <span className="relative z-10">Experience</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to={{ pathname: "/", hash: "#certificates" }}
                    className={scrollProps.className}
                    onClick={closeMenu}
                  >
                    <span className="relative z-10">Certificates</span>
                    <div className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </RouterLink>
                </li>
              </>
            )}
            <li>
              <RouterLink
                to="/projects"
                className="relative cursor-pointer transition-all duration-300 hover:text-cyan-400 group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-500/20 hover:to-blue-500/20 border border-slate-700 hover:border-cyan-500/50 px-4 py-2 rounded-lg font-semibold"
                onClick={() => {
                  if (location.pathname === "/projects") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                  closeMenu();
                }}
              >
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </RouterLink>
            </li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden relative w-10 h-10 hover:bg-slate-700 border border-slate-700 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-cyan-500/50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-y-auto transition-all duration-300 ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-6 pb-4">
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-xl border border-slate-800/50 p-6">
              <div className="flex justify-end">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <ul className="flex flex-col space-y-4 text-slate-200 font-medium">
                {location.pathname === "/" ? (
                  <>
                    <li>
                      <ScrollLink
                        to="home"
                        {...scrollProps}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Home</span>
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="About-Section"
                        {...scrollProps}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>About</span>
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="Experience-Section"
                        {...scrollProps}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Experience</span>
                      </ScrollLink>
                    </li>
                    <li>
                      <ScrollLink
                        to="Certificates-Section"
                        {...scrollProps}
                        onClick={closeMenu}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Certificates</span>
                      </ScrollLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <RouterLink
                        to={{ pathname: "/", hash: "#home" }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                        onClick={closeMenu}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Home</span>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        to={{ pathname: "/", hash: "#About" }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                        onClick={closeMenu}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>About</span>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        to={{ pathname: "/", hash: "#experience-section" }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                        onClick={closeMenu}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Experience</span>
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        to={{ pathname: "/", hash: "#Certificate" }}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                        onClick={closeMenu}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Certificates</span>
                      </RouterLink>
                    </li>
                  </>
                )}
                <li className="pt-2 border-t border-slate-700">
                  <RouterLink
                    to="/projects"
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-slate-800 to-slate-700 hover:from-cyan-500/20 hover:to-blue-500/20 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:text-cyan-400"
                    onClick={() => {
                      if (location.pathname === "/projects") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      closeMenu();
                    }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="font-semibold">Projects</span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
