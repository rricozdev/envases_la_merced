import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";

import { findBotResponse } from "../../../feature/chat/ChatbotLogic";

const ChatbotAssistant = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatHistory, isOpen]);

  const generateBotResponse = (userMessage) => {
    setTimeout(() => {
      let botResponse = findBotResponse(userMessage);

      // Si findBotResponse devuelve string, convertirlo en objeto
      if (typeof botResponse === "string") {
        botResponse = { response: botResponse, type: "default" };
      }

      // Agregar el mensaje al historial con el tipo
      setChatHistory((prev) => [
        ...prev.filter((m) => m.text !== "__thinking__"),
        {
          role: "model",
          text: botResponse.response,
          type: botResponse.type,
          payload: botResponse.payload || null,
        },
      ]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      {/* BOTÓN FLOTANTE */}

      <button
        onClick={() => {
          if (isOpen) {
            setChatHistory([]); // Limpia el chat al cerrarlo
          }
          setIsOpen((prev) => !prev);
        }}
        className={`fixed bottom-4 right-4 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-transform duration-500 cursor-pointer hover:scale-110 hover:shadow[0_16px_40px_rgba(0,0,0,0.4)]
active:scale-95  ${isOpen ? "rotate-28" : ""}`}
        style={{
          background: "var(--color-brand-accent)",
          transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {isOpen ? <CloseIcon /> : <WhatsAppIcon />}
      </button>

      {/* POPUP */}
      <div
        className={`fixed bottom-[88px] right-4 z-50 w-[88vw] max-w-[380px] h-[70vh] max-h-[520px] rounded-2xl overflow-hidden flex flex-col shadow-[0_32px_64px_-24px_rgba(0,0,0,0.4)] transition-all duration-700 ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-0 pointer-events-none"
        }`}
        style={{
          transformOrigin: "bottom right",
          transform: isOpen ? "translate(0, 0)" : "translate(20px, 20px)",
          background: "#ffffff",
          color: "#1e3a5f",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* HEADER */}
        <div
          className="flex items-center justify-between px-4 py-3 text-white"
          style={{ background: "var(--color-brand-accent)" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-accent">
              <ChatbotIcon className="w-[18px] h-[18px]" />
            </div>
            <h2 className="text-base font-semibold">ALMA Chatbot</h2>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <KeyboardArrowDownIcon />
          </button>
        </div>

        {/* BODY */}
        <div
          ref={chatBodyRef}
          className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-white"
        >
          {/* Mensaje inicial */}
          <div className="flex gap-2.5 items-start animate-fadeUp">
            <ChatbotIcon className="w-4 h-4 mt-1 opacity-75 shrink-0" />
            <p className="bg-gray-100 text-[#1e3a5f] px-3.5 py-2.5 rounded-[2px_12px_12px_12px] max-w-[80%]">
              Hola 👋 Soy Alma, tu asistente virtual. ¿En qué puedo ayudarte?
            </p>
          </div>

          {/* Chat history */}
          {chatHistory.map((chat, index) =>
            chat.text === "__thinking__" ? (
              <div
                key={index}
                className="flex gap-2.5 items-start animate-fadeUp"
              >
                <ChatbotIcon className="w-4 h-4 mt-1 opacity-75 shrink-0" />

                <div className="inline-flex gap-1.5 px-3.5 py-2.5 bg-gray-100 rounded-[2px_12px_12px_12px]">
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0s", animationDuration: "1s" }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.15s", animationDuration: "1s" }}
                  />
                  <span
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.3s", animationDuration: "1s" }}
                  />
                </div>
              </div>
            ) : (
              <ChatMessage key={index} chat={chat} />
            )
          )}
        </div>

        {/* FOOTER */}
        <div className="border-t border-gray-200 px-3 py-2.5 bg-white">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatbotAssistant;
