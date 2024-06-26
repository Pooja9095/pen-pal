import React from 'react';

const Message = ({ text, type }) => {
  console.log("Rendering Message:", text, "Type:", type); // Add console log for debugging
  return <div className={`message ${type}`}>{text}</div>;
};

export default Message;
