import React, { useState } from 'react';
import axios from 'axios';

const MessageInput = ({ onSend }) => {
  const [input, setInput] = useState(''); // State to hold the input message

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = input;
      onSend(userMessage, 'user'); // Send user message to parent component
      setInput(''); // Clear input field

      try {
        const response = await axios.post('http://127.0.0.1:5000/chat', { message: input });
        onSend(response.data.response, 'bot'); // Send bot response to parent component
      } catch (error) {
        console.error('Error sending message:', error); // Log error if message sending fails
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSend(); // Send message on Enter key press
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
