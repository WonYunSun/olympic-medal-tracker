// import React from "react";

function InputField({ labelText, inputType, inputName, inputId, onChange }) {
  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type={inputType}
        name={inputName}
        id={inputId}
        onChange={onChange}
      />
    </>
  );
}

export default InputField;
