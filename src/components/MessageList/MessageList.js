import React from 'react';
import Message from '../Message/Message';

const MessageList = ({messageList, onClickImage, onClickMessage}) => {

  const clickEvents = {
    onClickImage,
    onClickMessage,
  };
  if(!messageList?.length){
    return <div>Seems like you have got no messages yet...</div>
  }

  return messageList.map(msg=><Message key={msg.senderId} messageDetails={msg} {...clickEvents} />)
};

export default MessageList;