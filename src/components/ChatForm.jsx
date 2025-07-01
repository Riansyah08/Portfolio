import { useState } from "react";

const Chatform = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    setIsLoading(true);
    const newHistory = [...chatHistory, { role: "user", text: message }];
    setChatHistory([...newHistory, { role: "model", text: "Thinking..." }]);
    setMessage("");

    await generateBotResponse(newHistory);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <div className="flex-1 relative">
        <textarea
          value={message}
          onChange={(e) => {
            if (e.target.value.length <= 500) {
              setMessage(e.target.value);
            }
          }}
          placeholder="Ask me anything..."
          className="w-full px-4 py-3 pr-12 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 
            rounded-xl resize-none text-sm placeholder-slate-400 dark:placeholder-slate-500 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200 min-h-[44px] max-h-32 overflow-y-auto"
          rows="1"
          maxLength={500}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">
          {message.length}/500
        </div>
      </div>

        <button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="flex-shrink-0 h-11 w-11 flex items-center justify-center
              bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 
              disabled:from-slate-300 disabled:to-slate-400 dark:disabled:from-slate-600 dark:disabled:to-slate-700
              text-white rounded-xl transition-all duration-200 hover:shadow-lg
              disabled:cursor-not-allowed disabled:hover:shadow-none"
            >     
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <span className="material-symbols-rounded text-lg">send</span>
            )}
        </button>
    </form>
  );
};

export default Chatform;