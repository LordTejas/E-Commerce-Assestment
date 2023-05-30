const Input = ({
  value,
  onChange,
  placeholder,
  fontSize,
  fontWeight,
  color,
  rounded,
  fullWidth,
}) => {
  const InputStyle = {
    width: fullWidth ? "100%" : "auto",
    border: "1px solid #ccc",
    padding: "8px",
    fontSize: (fontSize) ? fontSize : "1rem",
    fontWeight: (fontWeight) ? fontWeight : "400",
    borderRadius: rounded ? "12px" : "0px",
    color: (color) ? color : "black",
  };

  return (
    <>
      <input
        type="text"
        placeholder={!!placeholder && placeholder}
        value={value}
        onChange={onChange}
        style={InputStyle}
      />
    </>
  );
};

export default Input;
