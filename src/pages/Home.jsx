import { Element } from "react-scroll";
import { certificates } from "./Certificate";
import { additionals } from "./Additional";
import { useEffect, useState } from "react";
import {
  ExternalLink,
  Mail,
  User,
  Award,
  Code,
  Brain,
  Zap,
  Layout,
  Trophy,
  Download,
} from "lucide-react";
import BorderGlow from "../Animation/BorderGlow";
import RotatingText from "../TextAnimation/RotatingText";
import SplitText from "../TextAnimation/SplitText";
import BlurText from "../TextAnimation/BlurText";
import TiltedCard from "../Animation/TiltedCard";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Pre-show certificates and additionals on mobile
    if (window.innerWidth < 640) {
      setTimeout(() => {
        setIsVisible((prev) => ({
          ...prev,
          certificates: true,
          additionals: true,
        }));
      }, 100); // Short delay allows the browser to render initial hidden state
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting || prev[entry.target.id], // Preserve manual true for mobile
          }));

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
  <div className="relative min-h-screen isolate">
    <div className="relative z-10">
      {/* Hero Section */}
      <section
        id="home"
        data-section
        className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-24 bg-transparent"
      >

        <div
          className={`relative transition-all duration-1000 ${
            isVisible.home
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center mb-30 gap-12 max-w-6xl mx-auto">
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
                  AI Developer, Web Developer & Programmer
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold">
                  <span className="text-gray-900 dark:text-white">
                    <SplitText text="Hi, I'm"/>
                    {" "}
                  </span>
                  <BlurText 
                    text="Riyansyah" 
                    className="inline-flex"
                    textClassName="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  />
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl font-light">
                  I'm an{" "}
                  <RotatingText texts={['Programmer', 'AI Developer', 'Web Developer']}
                    mainClassName="overflow-hidden inline-flex text-blue-800 bg-purple-200 dark:bg-purple-400 dark:bg-purple-800 rounded dark:text-blue-200 font-medium"/>
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
                <a
                  href="/CV/MUHAMMAD_RIYANSYAH_AFANDI_CV_ATS.pdf"
                  download="MUHAMMAD RIYANSYAH AFANDI CV ATS.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Element name="About-Section">
        <section
          id="about"
          data-section
          className={`py-20 px-4 bg-transparent transition-all duration-1000 ${
            isVisible.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Muhammad Riyansyah Afandi
                  </span>
                  , an Informatics student at President University, specializing
                  in Artificial Intelligence. My primary interests include
                  Artificial Intelligence, Web Development, and building
                  AI-driven solutions.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  In addition to building Web and AI projects, I have a strong
                  interest in exploring emerging technologies to deepen my
                  understanding of modern systems and their real-world
                  applications.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am committed to continuous learning and actively seek new
                  challenges that allow me to further enhance my technical
                  skills and knowledge.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    AI Development
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Machine Learning & Deep Learning Solutions
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Web Development
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Full-Stack Applications & Modern Frameworks
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Innovation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Emerging Technologies & Research
                  </p>
                </div>

                <div className="bg-white/80 dark:bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-4">
                    <Trophy className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Leadership
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Team Management & Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="Experience-Section">
        <section
          id="experience"
          data-section
          className={`py-20 px-4 bg-transparent transition-opacity duration-1000 ${
            isVisible.experience
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="relative py-4">
              {/* Timeline Line (Centered on Desktop, Left-aligned on Mobile) */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-600 to-purple-600"></div>

              <div className="space-y-12 relative">
                
                {/* Experience Item 1 - Left on Desktop */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                  {/* Icon Node */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg left-8 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                    <Brain className="w-8 h-8 text-slate-800 dark:text-white" />
                  </div>
                  {/* Card Content Wrapper */}
                  <BorderGlow 
                    className="w-full md:w-[calc(65%-2.5rem)] ml-16 md:-ml-45 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    backgroundColor="bg-white dark:bg-gray-800" // Safely detected & applied now!
                    animated={true}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        September 2025 - June 2026
                      </span>
                     {/* <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full">
                        Active
                      </span> */}
                    </div>
                      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        PT Alpabit Digital Inovasi • On-site
                      </h3>

                      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                        Backend Engineer Intern
                      </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        Developed a Flight Membership & Rewards System using <strong>Oracle OSB 14c</strong> and <strong>Oracle BPM 14c</strong>.
                      </li>
                      <li>
                        Built and integrated <strong>SOAP</strong> web services with <strong>XML</strong>, <strong>WSDL</strong>, and <strong>SOA</strong> principles.
                      </li>
                      <li>
                        Managed <strong>Oracle WebLogic</strong>, <strong>Oracle Database</strong>, and <strong>Oracle Coherence</strong> to support enterprise applications. 
                      </li>
                      <li>
                        Delivered technical demonstrations and knowledge-sharing sessions to the company employees.
                      </li>
                    </ul>
                  </BorderGlow>
                </div>

                {/* Experience Item 2 - Right on Desktop */}
                <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8 w-full">
                  {/* Icon Node */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg left-8 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                    <Layout className="w-8 h-8 text-slate-800 dark:text-white" />
                  </div>
                  {/* Card Content Wrapper */}
                  <BorderGlow 
                    className="w-full md:w-[calc(65%-2.5rem)] ml-16 md:-mr-45 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    backgroundColor="bg-white dark:bg-gray-800" // Safely detected & applied now!
                    animated={true}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        August 2025 - October 2025
                      </span>
                    </div>
                      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        PT. Ngontenin Digital Indonesia • Remote
                      </h3>

                      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                        Frontend Engineering Intern
                      </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        Fixed bugs and improved the functionality of the company's main website.
                      </li>
                      <li>
                        Implemented new UI features and refined existing functionality using React.
                      </li>
                      <li>
                        Improved responsiveness and usability across desktop and mobile devices.
                      </li>
                      <li>
                        Collaborated with Backend Team to test, debug, and deploy frontend enhancements.
                      </li>
                    </ul>
                  </BorderGlow>
                </div>

                {/* Experience Item 3 - Left on Desktop */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                  {/* Icon Node */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg left-8 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                    <User className="w-8 h-8 text-slate-800 dark:text-white" />
                  </div>
                  {/* Card Content Wrapper */}
                  <BorderGlow 
                    className="w-full md:w-[calc(65%-2.5rem)] ml-16 md:-ml-45 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    backgroundColor="bg-white dark:bg-gray-800" // Safely detected & applied now!
                    animated={true}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        October 2024 - September 2025
                      </span>
                    </div>
                      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        President University Computer and Technology Enthusiast Club
                      </h3>

                      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                        Head of External Division
                      </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        Led external relations and partnership initiatives to support club activities.
                      </li>
                      <li>
                        Managed collaboration for events and workshops.
                      </li>
                      <li>
                        Managed division members and delegated responsibilities to ensure successful program execution.
                      </li>
                      <li>
                        Conducted research and content preparation for the club's Instagram to support promotions and knowledge sharing.
                      </li>
                    </ul>
                  </BorderGlow>
                </div>

                {/* Experience Item 4 - Right on Desktop */}
                <div className="relative flex flex-col md:flex-row-reverse items-start md:items-center gap-8 w-full">
                  {/* Icon Node */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg left-8 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                    <Brain className="w-8 h-8 text-slate-800 dark:text-white" />
                  </div>
                  {/* Card Content Wrapper */}
                  <BorderGlow 
                    className="w-full md:w-[calc(65%-2.5rem)] ml-16 md:-mr-45 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    backgroundColor="bg-white dark:bg-gray-800" // Safely detected & applied now!
                    animated={true}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        April 2025 - May 2025
                      </span>
                    </div>
                      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        PT Mattel Indonesia • Academic Collaboration
                      </h3>

                      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                        AI Developer
                      </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        Developed an AI-powered defect detection system using <strong>RCNN</strong> with <strong>Detectron2</strong> to support quality control.
                      </li>
                      <li>
                        Developed an integrated root cause analysis module to identify potential causes of detected defects.
                      </li>
                      <li>
                        Collected, preprocessed, and annotated datasets to improve model performance and reliability.
                      </li>
                      <li>
                        Completed as an AI Concentration final project in collaboration with PT Mattel Indonesia.
                      </li>
                    </ul>
                  </BorderGlow>
                </div>

                {/* Experience Item 5 - Left on Desktop */}
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                  {/* Icon Node */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center shadow-lg left-8 md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                    <Award className="w-8 h-8 text-slate-800 dark:text-white" />
                  </div>
                  {/* Card Content Wrapper */}
                  <BorderGlow 
                    className="w-full md:w-[calc(65%-2.5rem)] ml-16 md:-ml-45 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
                    backgroundColor="bg-white dark:bg-gray-800" // Safely detected & applied now!
                    animated={true}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        November 2023 - October 2024
                      </span>
                    </div>
                      <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        PUMA Informatics
                      </h3>

                      <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-4">
                        Vice of Student Development and Competition
                      </h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>
                        Coordinated division members and delegated responsibilities to ensure effective team execution.
                      </li>
                      <li>
                        Led the organization of IT workshops, competitions, and student development programs.
                      </li>
                      <li>
                        Facilitated mentoring sessions to prepare students for national tech competitions.
                      </li>
                      <li>
                        Collaborated with university departments to deliver student development initiatives.
                      </li>
                    </ul>
                  </BorderGlow>
                </div>

              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="Certificates-Section">
        <section
          id="certificates"
          data-section
          className={`py-20 px-4 bg-transparent transition-all duration-1000 ${
            isVisible.certificates
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Certificates
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {certificates.map((certificate, index) => (
                <TiltedCard
                  key={index}
                  scaleOnHover={1.05}
                  rotateAmplitude={5}
                  className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-19.2px)]"
                >
                  {/* Visual Container Inner Shell */}
                  <div className="group h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-gray-100/20 hover:dark:bg-purple-950/20 flex flex-col">
                    
                    <div className="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center p-2">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3 line-clamp-2">
                        {certificate.title}
                      </h3>
                      
                      {certificate.website && (
                        <a
                          href={certificate.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium mt-auto"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      )}
                    </div>

                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Certificates */}
        <section
          id="additionalcertificates"
          data-section
          className={`py-20 px-4 bg-transparent transition-all duration-1000 ${
            isVisible.additionalcertificates
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Additional Certificates
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {additionals.map((additional, index) => (
                <TiltedCard
                  key={index}
                  scaleOnHover={1.05}
                  rotateAmplitude={5}
                  className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-19.2px)]"
                >
                  {/* Visual Container Inner Shell */}
                  <div className="group h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-gray-100/20 hover:dark:bg-purple-950/20 flex flex-col">
                    
                    <div className="aspect-square overflow-hidden bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center p-2">
                      <img
                        src={additional.image}
                        alt={additional.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3 line-clamp-2">
                        {additional.title}
                      </h3>
                      {additional.website && (
                        <a
                          href={additional.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium mt-auto"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      )}
                    </div>
                    
                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </section>
      </Element>

      <section
        id="skills"
        data-section
        className={`py-20 px-4 bg-transparent transition-all duration-1000 ${
          isVisible.skills
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                I have two years of programming experience, working with a wide
                range of programming languages, frameworks, and tools. My focus
                areas include web development and AI development, giving me the
                ability to contribute across the entire development lifecycle. I
                continuously strive to stay updated with the latest technologies
                and industry trends.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
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
                { src: "https://cdn.simpleicons.org/laravel/FF2D20", name: "Laravel" },
              ].map((skill, index) => (
                <TiltedCard
                  key={index}
                  scaleOnHover={1.05}
                  rotateAmplitude={15}
                  className="w-[calc(25%-18px)] sm:w-[calc(16.666%-20px)] md:w-[calc(12.5%-21px)] lg:w-[calc(10%-21.6px)]"
                >
                  <div className="group flex flex-col items-center h-32 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 w-full">
                    <div className="flex-grow flex items-center justify-center max-h-12 w-full mb-2">
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="w-12 h-12 object-contain mt-7 mb-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <span className="text-[11px] sm:text-xs font-medium text-gray-700 dark:text-gray-300 text-center select-none line-clamp-2 min-h-[2rem] flex items-center justify-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </TiltedCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
