import { styled } from "styled-components";

const StyledButton = styled.button`
  padding: ${({ variant }) =>
    variant === "primary"
      ? "10px 20px"
      : variant === "delete"
      ? "5px 15px"
      : "10px"};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;

  background-color: ${({ variant }) =>
    variant === "primary" ? "#fc0" : variant === "delete" ? "#dc3545" : "#333"};

  color: ${({ variant }) =>
    variant === "primary" ? "#333" : variant === "delete" ? "#fff" : "#000"};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary"
        ? "#ffd633"
        : variant === "delete"
        ? "#ff4d4d "
        : "#ccc"};
  }
`;

function Button({ text, type, name, value, onClick, variant }) {
  return (
    <StyledButton
      type={type}
      name={name}
      value={value}
      onClick={onClick}
      variant={variant}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
