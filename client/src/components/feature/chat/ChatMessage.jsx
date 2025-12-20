import React from "react";
import ReactMarkdown from "react-markdown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatbotIcon from "./ChatbotIcon";
import { openWhatsApp } from "../../../feature/chat/whatsappAction";

const ChatMessage = ({ chat }) => {
  if (!chat) return null;

  const isBot = chat.role === "model";

  return (
    <div
      className={`animate-fadeUp ${
        isBot ? "flex gap-2.5 items-start" : "flex justify-end"
      }`}
    >
      {isBot && <ChatbotIcon className="w-4 h-4 mt-1 opacity-75 shrink-0" />}

      <div className="max-w-[80%]">
        <div
          className={`px-3.5 py-2.5 text-[#1e3a5f] ${
            isBot
              ? "bg-gray-100 rounded-[2px_12px_12px_12px]"
              : "bg-[rgba(16,185,129,0.18)] rounded-[12px_12px_3px_12px]"
          }`}
        >
          <ReactMarkdown>{chat.text}</ReactMarkdown>
        </div>

        {/* Botón de WhatsApp */}
        {isBot && chat.payload?.phone && (
          <button
            onClick={() =>
              openWhatsApp({
                phone: chat.payload.phone,
                message: chat.payload.message,
              })
            }
            className="mt-2 w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600 hover:shadow-md transition"
          >
            <WhatsAppIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
