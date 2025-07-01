import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;

  const isBot = chat.role === "model";
  const isError = chat.isError;

  return (
    <div
      className={`flex ${
        isBot ? "items-start" : "flex-col items-end"
      } gap-3 ${isError ? "text-red-500" : ""} animate-fadeIn`}
    >
      {/* Bot Icon */}
      {isBot && (
        <div className="flex-shrink-0 p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mt-1">
          <ChatbotIcon />
        </div>
      )}

      {/* Message Bubble */}
      <div className="flex-1 max-w-[85%]">
        <div
          className={`p-4 break-words whitespace-pre-line text-sm leading-relaxed shadow-sm ${
            isBot
              ? "bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-800 dark:text-slate-100 rounded-2xl rounded-tl-md"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl rounded-br-md ml-auto"
          }`}
        >
          {chat.text}
        </div>

        {/* AI Assistant Label */}
        {isBot && (
          <div className="text-xs text-slate-400 dark:text-slate-500 mt-1 ml-1">
            AI Assistant
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
