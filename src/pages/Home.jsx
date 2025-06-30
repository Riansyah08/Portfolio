import { Element } from 'react-scroll';
import { certificates } from "./Certificate";
import { additionals } from "./Additional";
import { useEffect, useState } from 'react';
import { Calendar, ExternalLink, Mail, User, Award, Code, Brain, Zap, MapPin, Clock, Trophy, Star } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsVisible(prev => ({
        ...prev,
        certificates: true,
        additionals: true
      }));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen max-w-7xl mx-auto">
      
      {/* Hero Section */}
      <section 
        id="home" 
        data-section 
        className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className={`relative z-10 transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src="/img/MUHAMMAD RIYANSYAH AFANDI.jpg"
                alt="Riyansyah"
                className="relative w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
            </div>

            {/* Hero Content */}
            <div className="text-center lg:text-left space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                  <Brain className="w-4 h-4" />
                  AI Developer & Programmer
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold">
                  <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Riyansyah
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-light">
                  Programmer • AI Developer • Passionate about Tech
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="mailto:riyansyah.codes@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                  <Mail className="w-5 h-5" />
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    <Element name='About-Section'>
      <section 
        id="about" 
        data-section 
        className={`py-20 px-4 transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Muhammad Riyansyah Afandi</span>, 
                an Informatics student at President University, specializing in Artificial Intelligence. 
                My primary interests include Artificial Intelligence, Web Development, and building AI-driven solutions.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                In addition to building Web and AI projects, I have a strong interest in exploring emerging 
                technologies to deepen my understanding of modern systems and their real-world applications.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am committed to continuous learning and actively seek new challenges that allow me to 
                further enhance my technical skills and knowledge.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Machine Learning & Deep Learning Solutions</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Web Development</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Full-Stack Applications & Modern Frameworks</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Emerging Technologies & Research</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                  <Trophy className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Leadership</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Team Management & Collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>

    <Element name='Experience-Section'>
      <section 
        id="experience" 
        data-section 
        className={`py-20 px-4 bg-gray-50 dark:bg-gray-800/50 transition-all duration-1000 ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="space-y-12">
              {/* Experience Item 1 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">2025 - Present</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
                      Active
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Looking for Internship Opportunity</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Actively seeking internship opportunities in AI Development, Software Development, or 
                    related fields to enhance my technical skills and gain real-world industry experience.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">April 2025 - May 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">PT Mattel Indonesia, AI Developer (Academic Collaboration)</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Developed an AI-based defect detection and root cause analysis system as part of a final university project in collaboration with PT Mattel Indonesia.
                  </p>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">October 2024 - September 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">President University Computer and Technology Enthusiast Club, Head of External Division</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Managed external partnerships and represented the organization in technology-related events.
                    Coordinated collaborations with other institutions and communities to expand opportunities for members and promote knowledge sharing.
                  </p>
                </div>
              </div>

              {/* Experience Item 4 */}
              <div className="relative flex items-start gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">November 2023 - October 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">PUMA Informatics, Vice of Student Development and Competition</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Led academic development programs, competitions, and student support initiatives for Informatics students.
                    Promoted student participation in national-level events and project showcases by collaborating with internal committees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>

    <Element name='Certificates-Section'>
      <section 
        id="certificates" 
        data-section 
        className={`py-20 px-4 transition-all duration-1000 ${isVisible.certificates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3 line-clamp-2">
                    {certificate.title}
                  </h3>
                  {certificate.website && (
                    <a
                      href={certificate.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Certificates */}
      <section 
        id="additionalcertificates" 
        data-section 
        className={`py-20 px-4 transition-all duration-1000 ${isVisible.additionalcertificates ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Additional Certificates</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {additionals.map((additional, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={additional.image}
                    alt={additional.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3 line-clamp-2">
                    {additional.title}
                  </h3>
                  {additional.website && (
                    <a
                      href={additional.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
      
      <section 
        id="skills" 
        data-section 
        className={`py-20 px-4 transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I have two years of programming experience, working with a wide range of programming languages, 
                frameworks, and tools. My focus areas include web development and AI development, giving me the 
                ability to contribute across the entire development lifecycle. I continuously strive to stay 
                updated with the latest technologies and industry trends.
              </p>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
              {[
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg", name: "Jupyter" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML5" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS3" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original-wordmark.svg", name: "Firebase" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original-wordmark.svg", name: "Matplotlib" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", name: "Bootstrap" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg", name: "MySQL" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg", name: "NumPy" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", name: "Scikit-learn" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg", name: "OpenCV" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg", name: "Pandas" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg", name: "PyTorch" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg", name: "MATLAB" },
                { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg", name: "Flask" },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-12 h-12 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}