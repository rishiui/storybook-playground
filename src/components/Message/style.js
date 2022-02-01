import styled from "styled-components";

export const StyledDiv = styled.div`
  height: 100px;
  display:flex;
  background-color: #ece5dd;
  border: 1px solid lightgrey;
  align-items: center;
  padding: 0 20px;
  .sender-image{
    height: 80px;
    width: 80px;
    background-position: top center;
    border: 4px dashed green;
    border-radius: 100%;
  }
  .sender-info{
    margin: 0 20px;
    .sender-name{
      font-weight: bold;
    }
    .sender-message{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 120ch;
    }
  }
`;