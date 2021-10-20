import styled from "styled-components";

export const Eye = styled.div`
  color: #000;
  margin-left: 3px;
  margin-top: 3px;
  width: 12px;
  height: 12px;
  border-radius: 70% 15%;
  border: solid 1px currentColor;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);

  &:before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: solid 1px currentColor;
    background-color: currentColor;
  }

  &:hover {
    color: #000;
    margin-left: 3px;
    margin-top: 3px;
    width: 12px;
    height: 12px;
    border-radius: 70% 15%;
    border: solid 1px currentColor;
    background-color: currentColor;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);

    :before {
      content: "";
      position: absolute;
      left: 3px;
      top: 3px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      color: white;
      background-color: currentColor;
    }
  }
`;
