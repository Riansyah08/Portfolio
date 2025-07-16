import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./project/Projects";
import Chatbot from "./chatbots/Chatbot";
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 flex flex-col relative">
      <Navbar />
      <main className="flex-grow pt-20 px-4 sm:px-6 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Chatbot />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
