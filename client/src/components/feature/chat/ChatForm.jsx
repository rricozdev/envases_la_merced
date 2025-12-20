import SendIcon from "@mui/icons-material/Send";

const ChatForm = ({ setChatHistory, generateBotResponse }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.message.value.trim();
    if (!text) return;

    setChatHistory((prev) => [
      ...prev,
      { role: "user", text },
      { role: "model", text: "__thinking__" },
    ]);

    e.target.reset();
    generateBotResponse(text);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          name="message"
          placeholder="Escribe tu mensaje…"
          autoComplete="off"
          className="w-full px-3.5 py-2.5 pr-11 rounded-full
    border border-gray-300
    bg-white text-[#1e3a5f] placeholder-gray-500
    focus:outline-none focus:ring-0"
        />

        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2
            w-8 h-8 rounded-full flex items-center justify-center
            text-white cursor-pointer"
          style={{ background: "var(--color-brand-accent)" }}
        >
          <SendIcon fontSize="small" />
        </button>
      </div>
    </form>
  );
};

export default ChatForm;
