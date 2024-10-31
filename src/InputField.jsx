import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 15px;
  font-weight: 800;
  color: #333;
  display: block;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;

  &:focus {
    border-color: #00008d;
    outline: none;
  }
`;

function InputField({
  labelText,
  inputType,
  inputName,
  inputId,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <StyledLabel htmlFor={inputId}>{labelText}</StyledLabel>
      <StyledInput
        type={inputType}
        name={inputName}
        id={inputId}
        onChange={onChange}
        placeholder={placeholder}
        {...(inputType === "number"
          ? { min: "0", max: "99", defaultValue: 0 }
          : {})}
      />
    </div>
  );
}

export default InputField;
