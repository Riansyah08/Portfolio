import { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./project/Projects";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatMessage from "./components/ChatMessage";
import ChatForm from "./components/ChatForm";
import { MyselfInfo } from "./MyselfInfo";

export default function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    const lastUserMessage = history[history.length - 1]?.text.toLowerCase();

    const updatedHistory = [...history];

    const greetingRegex = /\b(hello|hi|hey)\b/i;
    if (greetingRegex.test(lastUserMessage)) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: "Hello!" },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("who are you") ||
      lastUserMessage.includes("about yourself") ||
      lastUserMessage.includes("tell me about him") ||
      lastUserMessage.includes("who is riyansyah") ||
      lastUserMessage.includes("applicant") ||
      lastUserMessage.includes("biodata") ||
      lastUserMessage.includes("Biodata") ||
      lastUserMessage.includes("siapa dia") ||
      lastUserMessage.includes("siapa riyansyah") ||
      lastUserMessage.includes("pelamar") ||
      lastUserMessage.includes("Pelamar")
      
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        {
          role: "model",
          text: `${MyselfInfo.name}, ${MyselfInfo.education} ${MyselfInfo.interests}`,
        },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("nama") ||
      lastUserMessage.includes("name") 
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His name is:\n${MyselfInfo.name}` },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("semester") ||
      lastUserMessage.includes("Semester") ||
      lastUserMessage.includes("university") ||
      lastUserMessage.includes("University") ||
      lastUserMessage.includes("universitas") ||
      lastUserMessage.includes("Universitas") ||
      lastUserMessage.includes("kuliah") ||
      lastUserMessage.includes("Kuliah") 
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His name is:\n${MyselfInfo.education}` },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("interest") ||
      lastUserMessage.includes("Interest") ||
      lastUserMessage.includes("minat") ||
      lastUserMessage.includes("Minat") ||
      lastUserMessage.includes("ketertarikan") ||
      lastUserMessage.includes("Ketertarikan")
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His name is:\n${MyselfInfo.interests}` },
      ]);
      return;
    }
    
    if (
      lastUserMessage.includes("contact info") ||
      lastUserMessage.includes("how can i contact") ||
      lastUserMessage.includes("where can i contact") ||
      lastUserMessage.includes("how do i reach") ||
      lastUserMessage.includes("email") ||
      lastUserMessage.includes("linkedin") ||
      lastUserMessage.includes("kontak info")
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `You can contact him via:\n${MyselfInfo.contact}` },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("motivation") ||
      lastUserMessage.includes("Motivation") ||
      lastUserMessage.includes("motivasi") ||
      lastUserMessage.includes("Motivasi")
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His Motivation is:\n${MyselfInfo.motivation}` },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("Github") ||
      lastUserMessage.includes("github")
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His Github is:\n${MyselfInfo.Github}` },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("skill") ||
      lastUserMessage.includes("skills") ||
      lastUserMessage.includes("Skill") ||
      lastUserMessage.includes("Skills")
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His Skills include:\n${MyselfInfo.skills}` },
      ]);
      return;
    }

    if (
      lastUserMessage.includes("certificate") ||
      lastUserMessage.includes("Certificate") ||
      lastUserMessage.includes("sertifikat") ||
      lastUserMessage.includes("Sertifikat") ||
      lastUserMessage.includes("sertifikasi") ||
      lastUserMessage.includes("Sertifikasi")
    ) {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text: `His Certificate include:\n${MyselfInfo.certificate} He also holds additional certificates in:\n${MyselfInfo.additionalTitles}` },
      ]);
      return;
    }

    const formattedHistory = updatedHistory.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: formattedHistory }),
    };

    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong!");

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();

      updateHistory(apiResponseText);
    } catch (error) {
      updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [chatHistory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100 flex flex-col relative">
      <Navbar />
      <main className="flex-grow pt-20 px-4 sm:px-6 md:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />

      {showChatbot && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
          onClick={() => setShowChatbot(false)}
        ></div>
      )}

      <button
        onClick={() => setShowChatbot((prev) => !prev)}
        className={`fixed bottom-6 right-6 group h-14 w-14 flex items-center justify-center rounded-full overflow-visible
          bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
          shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out z-50 
          ${showChatbot ? "rotate-180 scale-110" : "hover:scale-105"}`}
      >
        <div className="relative">
          <span
            className={`material-symbols-rounded text-white text-xl transition-all duration-300 ${
              showChatbot ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
            }`}
          >
            psychology
          </span>
          <span
            className={`material-symbols-rounded absolute inset-0 text-white text-xl transition-all duration-300 ${
              showChatbot ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
            }`}
          >
            close
          </span>
        </div>
        {!showChatbot && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-ping opacity-20"></div>
        )}
      </button>

      <div
        className={`fixed bottom-24 right-6 w-[480px] max-w-[calc(100vw-3rem)] 
          bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl 
          border border-slate-200/50 dark:border-slate-700/50 shadow-2xl 
          transform origin-bottom-right overflow-hidden transition-all duration-300 ease-out
          ${
            showChatbot
              ? "scale-100 opacity-100 pointer-events-auto translate-y-0"
              : "scale-95 opacity-0 pointer-events-none translate-y-4"
          } z-50`}
      >
        <div className="flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 px-6 py-4 border-b border-slate-200/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
              <ChatbotIcon />
            </div>
            <div>
              <h2 className="text-white text-lg font-semibold tracking-tight">AI Assistant</h2>
              <p className="text-slate-300 text-xs">Professional AI Support</p>
            </div>
          </div>
          <button
            onClick={() => setShowChatbot(false)}
            className="h-9 w-9 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
          >
            <span className="material-symbols-rounded text-lg">
              keyboard_arrow_down
            </span>
          </button>
        </div>

        <div className="px-6 py-2 bg-slate-50/50 dark:bg-slate-700/30 border-b border-slate-200/30 dark:border-slate-600/30">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>AI Assistant Online</span>
            <span className="ml-auto">End-to-End Encrypted</span>
          </div>
        </div>

        <div
          ref={chatBodyRef}
          className="flex flex-col gap-4 h-[520px] overflow-y-auto p-6 pb-24 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600 scrollbar-track-transparent hover:scrollbar-thumb-slate-400 dark:hover:scrollbar-thumb-slate-500"
        >
          <div className="flex items-start gap-3 animate-fadeIn">
            <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mt-1">
              <ChatbotIcon />
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-800 dark:text-slate-100 p-4 rounded-2xl rounded-tl-md shadow-sm">
                <p className="text-sm leading-relaxed">
                  <span className="font-medium">Hello! 👋</span>
                  <br />
                  I'm your AI assistant, ready to help with technical questions, code reviews, architecture discussions, and more.
                </p>
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 ml-1">
                Just now
              </div>
            </div>
          </div>

          {chatHistory
            .filter((chat) => !chat.hideInChat)
            .map((chat, index) => (
              <div key={index} className="animate-fadeIn">
                <ChatMessage chat={chat} />
              </div>
            ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-t border-slate-200/50 dark:border-slate-700/50 p-4">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgb(203 213 225);
          border-radius: 3px;
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: rgb(71 85 105);
        }
        .scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background-color: rgb(148 163 184);
        }
        .dark .scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background-color: rgb(100 116 139);
        }
      `}</style>
    </div>
  );
}
