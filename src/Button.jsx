function Button({ text, type, name, value, onClick }) {
  return (
    <button type={type} name={name} value={value} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
