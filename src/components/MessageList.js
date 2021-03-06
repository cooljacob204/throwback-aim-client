import React from 'react';
import MessageItem from '../components/MessageItem';
import ChatCable from "../components/ChatCable";

const MessageList = (props) => {
  const { message, messageData, screenName, chatName, user_id, handleReceivedMessage, allCurrentUserChats} = props;
  let allMessages = messageData.map(oneMessage => <MessageItem key={oneMessage.id} user_id={user_id} message={oneMessage} className="message-item--other" screenName={chatName}/>)
  return (
    <div className="message-list">
      <div className="message-list__container">
      <ChatCable message={message} handleReceivedMessage={handleReceivedMessage} allCurrentUserChats={allCurrentUserChats} />
        {allMessages}
      </div>
    </div>
  );
}

export default MessageList
