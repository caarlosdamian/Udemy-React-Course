import styled, {css } from "styled-components";

const Button = styled.button`
  border: none;
  ${(props) =>
    props.color &&
    css`
      background-color: ${(props) =>
        props.checking > 2
          ? props.theme[props.color]
          : props.checking < 2
          ? "red"
          : "pink"};
      color: ${(props) => (props.checking <= 1 ? "white" : "black")};
      font-weight: ${(props) => (props.checking <= 1 ? "bold" : "normal")};
    `}
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default Button;
