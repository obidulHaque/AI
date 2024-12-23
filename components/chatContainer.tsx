import React from "react";

export default function ChatContainer() {
  const messages = [
    { id: 1, sender: "ai", text: "Hello! How can I assist you today?" },
    { id: 2, sender: "user", text: "Tell me about ChatGPT." },
    {
      id: 3,
      sender: "ai",
      text: "ChatGPT is a language model developed by OpenAI.",
    },
    { id: 4, sender: "user", text: "What can you do?" },
    {
      id: 5,
      sender: "ai",
      text: "I can assist with a variety of tasks, including answering questions and more!",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto lg:px-52 px-8 py-12 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-[75%] p-3 rounded-lg ${
              message.sender === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
    </div>
  );
}
