import { projects } from "./Project";
import { useEffect, useState } from "react";
import { Github, ExternalLink, Code, Cpu, Database, Globe } from "lucide-react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getTagColor = (tag) => {
    const colors = {
      'Python': 'bg-blue-600 text-blue-100',
      'JavaScript': 'bg-yellow-600 text-yellow-100',
      'React': 'bg-cyan-600 text-cyan-100',
      'CSS': 'bg-green-600 text-green-100',
      'Jupyter Notebook': 'bg-orange-600 text-orange-100',
      'Firebase': 'bg-red-600 text-red-100',
      'Laravel': 'bg-blue-700 text-blue-100',
      'Java': 'bg-orange-500 text-orange-100',
      'HTML': 'bg-green-700 text-green-100',
      'MySQL': 'bg-blue-800 text-blue-100',
      'Arduino': 'bg-red-500 text-red-100',
      'C++': 'bg-indigo-600 text-indigo-100',
      'Robotics': 'bg-emerald-600 text-emerald-100',

      'OSB': 'bg-red-700 text-red-100',
      'Coherence': 'bg-amber-600 text-amber-100',
      'WebLogic': 'bg-rose-600 text-rose-100',

      'K-Means': 'bg-purple-600 text-purple-100',
      'Scikit-Learn': 'bg-orange-700 text-orange-100',
      'Scikit-learn': 'bg-orange-700 text-orange-100',
      'Clustering': 'bg-violet-600 text-violet-100',

      'Detectron2': 'bg-pink-600 text-pink-100',
      'Mask R-CNN': 'bg-fuchsia-600 text-fuchsia-100',
      'Flask': 'bg-gray-800 text-gray-100',

      'Machine Learning': 'bg-indigo-500 text-indigo-100',
      'Regression': 'bg-blue-500 text-blue-100',
      'Linear Regression': 'bg-sky-600 text-sky-100',

      'PyTorch': 'bg-orange-800 text-orange-100',
      'OpenCV': 'bg-lime-600 text-lime-100',
      'CNN': 'bg-purple-800 text-purple-100',

      'BERT': 'bg-teal-600 text-teal-100',
      'RoBERTa': 'bg-cyan-700 text-cyan-100',
      'FAISS': 'bg-sky-700 text-sky-100',

      'Tkinter': 'bg-blue-500 text-blue-100',

      'default': 'bg-gray-600 text-gray-100'
    };

    return colors[tag] || colors.default;
  };

  return (
    <div className="relative min-h-screen">
    <div className="relative z-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="relative px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              Portfolio Showcase
            </div>
            
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Here are some of the projects I've worked on since I started programming. 
              You can find the source code for these and other projects on my{" "}
              <a 
                href="https://github.com/Riansyah08" 
                className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 underline decoration-2 underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`group relative flex flex-col h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  hoveredIndex === index ? '-translate-y-2' : ''
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative p-6 flex flex-col h-full">
                  {/* Header */}
                  {/* Project Image */}
                  <div className="mb-5 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-44 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                        <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h2 className="text-m font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition"
                          title="View Source Code"
                        >
                          <Github className="w-7 h-7" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-6 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mb-2 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`${getTagColor(tag)} px-4 py-2 rounded-full text-sm font-semibold`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 h-12 flex items-center">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="px-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-blue-100 mb-6">
              I'm always excited to work on innovative projects and solve complex technical challenges.
            </p>
            <a
              href="https://github.com/Riansyah08?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              View More Projects
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}