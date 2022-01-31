import styled from "styled-components";

export const StyledDiv = styled.div`
  display: inline-block;
  margin: ${props=>props?.margin ? props?.margin : '2px'};
  padding: 3px 8px;
  background-color: ${props=>props?.backgroundColor};
  color: ${props=>props?.fontColor};
  border: ${props=>`1px solid ${props?.borderColor}`};
  border-radius: 5px;

  &.tag{
    &.tag-sm{
      font-size: 12px;
    };
    &.tag-md{
      font-size: 14px;
    };
    &.tag-lg{
      font-size: 16px;
    };
  }
`;
