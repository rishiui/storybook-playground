import React from "react";
import Message from "../Message/Message";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const PureMessageList = ({
  messageList,
  onClickImage,
  onClickMessage,
}) => {
  const clickEvents = {
    onClickImage,
    onClickMessage,
  };
  if (!messageList?.length) {
    return <div>Seems like you have got no messages yet...</div>;
  }

  return messageList.map((msg) => (
    <Message key={msg.senderId} messageDetails={msg} {...clickEvents} />
  ));
};

PureMessageList.propTypes = {
  messageList: PropTypes.arrayOf(Message.propTypes.messageDetails),
  onClickImage: PropTypes.func,
  onClickMessage: PropTypes.func,
};

PureMessageList.defaultProps = {
  messageList: [],
  onClickImage: () => {
    console.log("please pass onClickImage callback");
  },
  onClickMessage: () => {
    console.log("please pass onClickMessage callback");
  },
};

const MessageList = ({ messageList, onClickImage, onClickMessage }) => {
  return (
    <PureMessageList
      messageList={messageList}
      onClickMessage={onClickMessage}
      onClickImage={onClickImage}
    />
  );
};
const mapStateToProps = (state) => {
  return { messageList: state.messageList };
};
export default connect(mapStateToProps)(MessageList);
