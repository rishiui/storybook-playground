import React from "react";
import { StyledDiv } from "./style";
import PropTypes from "prop-types";
import { NO_PROFILE_IMAGE } from "./constants";
const Message = ({
  messageDetails: {
    senderImageUrl = NO_PROFILE_IMAGE,
    senderName,
    senderMessage,
    senderId,
  },
  onClickImage,
  onClickMessage,
}) => {
  return (
    <StyledDiv>
      <img
        src={senderImageUrl}
        alt=""
        className={"sender-image"}
        onClick={() => onClickImage(senderId)}
      />
      <div className="sender-info" onClick={() => onClickMessage(senderId)}>
        <div className="sender-name">{senderName}</div>
        <div className="sender-message">{senderMessage}</div>
      </div>
    </StyledDiv>
  );
};
Message.propTypes = {
  messageDetails: PropTypes.shape({
    senderId: PropTypes.string,
    senderImageUrl: PropTypes.string,
    senderName: PropTypes.string.isRequired,
    senderMessage: PropTypes.string.isRequired,
  }),
  onClickImage: PropTypes.func,
  onClickMessage: PropTypes.func,
};

export default Message;
