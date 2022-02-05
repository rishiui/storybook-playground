import React from 'react';
import Message from '../Message/Message';
import PropTypes from 'prop-types';

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

MessageList.propTypes = {
  messageList: PropTypes.arrayOf(Message.propTypes.messageDetails),
  onClickImage: PropTypes.func,
  onClickMessage: PropTypes.func,
}

MessageList.defaultProps = {
  messageList: [],
  onClickImage: ()=>{console.log("please pass onClickImage callback")},
  onClickMessage: ()=>{console.log("please pass onClickMessage callback")}
}
export default MessageList;