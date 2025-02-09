// ChatContainer.js
import React from "react";
import Header from "./Header";
import ChatArea from "./ChatArea";
import ChatInput from "./ChatInput";

const ChatContainer = () => {
 



  return (
    <div className="chat-container">
      
      
      {/* Header */}
     <Header/>

      {/* Chat Area */}
     <ChatArea />

      {/* Chat Input */}
      <ChatInput />
      
    </div>
  );
};

export default ChatContainer;
