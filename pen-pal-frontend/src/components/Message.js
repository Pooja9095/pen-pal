import React from 'react';

const Message = ({ text, type }) => {
  console.log("Rendering Message:", text, "Type:", type);  // Log the message text and type
  return <div className={`message ${type}`}>{text}</div>; // Render the message with appropriate class
};

export default Message;
