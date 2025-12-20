import chatbotData from "./chatbot-data.json";

export const findBotResponse = (userMessage = "") => {
  const message = userMessage.toLowerCase().trim();

  for (const item of chatbotData.responses) {
    if (
      item.triggers.some((trigger) => message.includes(trigger.toLowerCase()))
    ) {
      return item;
    }
  }

  const defaultResponse = chatbotData.responses.find(
    (item) => item.type === "default"
  );

  // return defaultResponse.response;
  return defaultResponse;
};
