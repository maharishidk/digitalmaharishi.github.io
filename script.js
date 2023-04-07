;

// Widget toggle
const widgetContainer = document.querySelector(".widget-container");
const widgetButton = document.querySelector(".widget-button");
const widgetIframe = document.querySelector(".widget-iframe");

widgetButton.addEventListener("click", () => {
  widgetIframe.src = "https://maharishidigital.org/";
  widgetContainer.classList.toggle("widget-container-open");
});

// Close chatbot
const chatbotCloseBtn = document.querySelector(".chatbot-close-btn");

chatbotCloseBtn.addEventListener("click", () => {
  const chatbotContainer = document.querySelector(".chatbot-container");
  chatbotContainer.classList.toggle("chatbot-container-open");
});

// Close chatbot on click outside
document.addEventListener("click", (e) => {
  const chatbotContainer = document.querySelector(".chatbot-container");
  const widgetContainer = document.querySelector(".widget-container");

  if (
    !chatbotContainer.contains(e.target) &&
    !widgetContainer.contains(e.target)
  ) {
    chatbotContainer.classList.remove("chatbot-container-open");
  }
});
