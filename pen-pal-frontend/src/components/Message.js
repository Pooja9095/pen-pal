import React from 'react';

const Message = ({ text, type }) => {
  console.log("Rendering Message:", text, "Type:", type); 
  return <div className={`message ${type}`}>{text}</div>;
};

export default Message;
