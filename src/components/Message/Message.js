import React from 'react';
import { StyledDiv } from './style';
import PropTypes from 'prop-types';
import {NO_PROFILE_IMAGE} from './constants';
const Message = ({senderImageUrl, senderName, senderMessage, onClickImage, onClickMessage})=>{
  
  return (
    <StyledDiv>
      <img src={senderImageUrl} alt="" className={'sender-image'} onClick={onClickImage} />
      <div className='sender-info' onClick={onClickMessage}>
        <div className='sender-name'>{senderName}</div>
        <div className='sender-message'>{senderMessage}</div>
      </div>
    </StyledDiv>
  )
};
Message.propTypes = {
  senderImageUrl: PropTypes.string,
  senderName: PropTypes.string.isRequired,
  senderMessage: PropTypes.string.isRequired,
  onClickImage: PropTypes.func,
  onClickMessage: PropTypes.func,
}
Message.defaultProps = {
  senderImageUrl: NO_PROFILE_IMAGE,
}
export default Message;