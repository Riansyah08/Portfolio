export default function Footer() {
  const LinkedInIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const GitHubIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );

  const GmailIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-white"
    >
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );

  const CodeIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-cyan-400"
    >
      <path d="M8 3L4 7L8 11L9.4 9.6L6.8 7L9.4 4.4L8 3ZM16 3L14.6 4.4L17.2 7L14.6 9.6L16 11L20 7L16 3Z" />
    </svg>
  );

  const BrainIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-blue-400"
    >
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13 3V6C13 6.6 12.6 7 12 7S11 6.6 11 6V3L9 1L3 7V9H5C5 10.7 6.3 12 8 12S11 10.7 11 9H13C13 10.7 14.3 12 16 12S19 10.7 19 9H21ZM7.5 11C6.7 11 6 10.3 6 9.5S6.7 8 7.5 8S9 8.7 9 9.5S8.3 11 7.5 11ZM16.5 11C15.7 11 15 10.3 15 9.5S15.7 8 16.5 8S18 8.7 18 9.5S17.3 11 16.5 11Z" />
    </svg>
  );

  return (
    <footer className="relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.1) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <BrainIcon />
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
                <CodeIcon />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Riyansyah
              </h3>
              <span className="text-sm text-slate-400 font-medium tracking-wide">
                AI & WEB DEVELOPER
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/muhammadriyansyahafandi/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 hover:from-blue-600 hover:to-blue-700 border border-slate-600 hover:border-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="https://github.com/Riansyah08"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 hover:from-gray-700 hover:to-gray-800 border border-slate-600 hover:border-gray-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="mailto:riyansyah.codes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 hover:from-red-600 hover:to-red-700 border border-slate-600 hover:border-red-500 rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-red-500/25"
              aria-label="Email Contact"
            >
              <GmailIcon />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center space-x-2 text-slate-400">
            <span>© {new Date().getFullYear()}</span>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium">
              Riyansyah
            </span>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center space-x-2 text-slate-500 text-xs">
            <span>Built with</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
              <span className="text-slate-400">Vite + React</span>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </footer>
  );
}
