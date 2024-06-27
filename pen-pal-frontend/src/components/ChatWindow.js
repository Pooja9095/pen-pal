import React, { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]); // State to hold the list of messages

  // Function to add a new message to the messages state
  const addMessage = (message, type) => {
    console.log("Adding Message:", message, "Type:", type);
    setMessages(prevMessages => [...prevMessages, { text: message, type }]);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} type={msg.type} />  // Render each message
        ))}
      </div>
      <MessageInput onSend={addMessage} /> // Pass the addMessage function to the MessageInput component
    </div>
  );
};

export default ChatWindow;
