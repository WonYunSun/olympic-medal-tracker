import styled from "styled-components";

// styled-components로 스타일링된 label과 input 컴포넌트 생성
const StyledLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: block;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  /* width: 100%; */
  box-sizing: border-box;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

function InputField({ labelText, inputType, inputName, inputId, onChange }) {
  return (
    <>
      <StyledLabel htmlFor={inputId}>{labelText}</StyledLabel>
      <StyledInput
        type={inputType}
        name={inputName}
        id={inputId}
        onChange={onChange}
        {...(inputType === "number" ? { min: "0", max: "99" } : {})}
      />
    </>
  );
}

export default InputField;
