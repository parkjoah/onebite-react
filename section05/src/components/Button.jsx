const Button = ({ children, text, color = "black" }) => {
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button style={{ color: color }} onClick={onClickButton}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
