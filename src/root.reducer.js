export const initialState = {
  messageList: [
    {
      senderImageUrl:
        "https://appinventiv.com/wp-content/uploads/sites/1/2021/08/chatbot-development-with-deep-nlp.png",
      senderName: "Chatbot",
      senderMessage: "Hi, how can I help?",
      senderId: "123",
    },
  ],
};

export default function (state = initialState, action) {
  return state;
}
