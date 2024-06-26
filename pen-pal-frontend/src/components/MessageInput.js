import React, { useState } from 'react';
import axios from 'axios';

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      console.log("User Message:", userMessage);
      onSend(userMessage, 'user'); // Log user message and type
      setInput('');

      try {
        const response = await axios.post('http://127.0.0.1:5000/chat', { message: input });
        console.log("Bot Response:", response.data.response);
        onSend(response.data.response, 'bot'); // Log bot response and type
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
