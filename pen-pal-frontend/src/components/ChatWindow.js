import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message, type) => {
    console.log("Adding Message:", message, "Type:", type);
    setMessages(prevMessages => [...prevMessages, { text: message, type }]);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} type={msg.type} />
        ))}
      </div>
      <MessageInput onSend={addMessage} />
    </div>
  );
};

export default ChatWindow;
