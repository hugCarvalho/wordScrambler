import style from "styled-components";

const ButtonHint = style.button`
  background-color: ${props =>
    props.disabled || !props.playing ? "gray" : "rgb(223, 223, 210)"};
  cursor: ${props => (props.disabled || !props.playing ? "not-allowed" : "")};
  color: rgb(47, 48, 47);
  height: 27px;
  width: 60px;
  position: absolute;
  top: -28px;
  right: -1px;
  padding: 0px 6px;
  border: 1px solid gray;
  border-bottom: none;
  border-radius: 3px 3px 0 0;
  transition: all 0.5s ease;
  opacity: 1;
  letter-spacing: 1px;

  &:hover {
    background-color: ${props =>
      props.disabled || !props.playing ? "" : "rgb(242, 242, 228)"}
  }
`;

export default ButtonHint;
