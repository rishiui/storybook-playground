import React from 'react'
import {StyledDiv} from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = ({size, text, ...props})=>{
  return (
  <StyledDiv
    className={classNames('tag',`tag-${size}`)}
    {...props}>{text}</StyledDiv>
    )
};

Tag.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md' , 'lg']),
  margin: PropTypes.string,
  fontColor: PropTypes.string,
  borderColor: PropTypes.string,
};

Tag.defaultProps = {
  backgroundColor: '#0065ff',
  fontColor: '#FBF8F1',
  size: 'md',
}

export default Tag;