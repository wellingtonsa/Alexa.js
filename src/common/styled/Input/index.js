
import React, { useEffect,  useState, useCallback } from "react";
import { Container } from "./styles";

const Input = ({ placeholder, value = "", onChangeValue, type = "text", name = "", disabled = false, onBlur = () => {} }) => {
  
  const [focused, setFocused] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleFocus = useCallback((focus) => {
    value === ""?setFocused(focus):setFocused(true)
  });

  useEffect(() => {
    handleFocus(false);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [value]);
  


  const handleBlur = (e) => {
    handleFocus(false);
    onBlur(e);
  }

  return (
    <Container isFocused={focused} isDisabled={disabled} placeholderEnabled={value}>
        <div className="input-placeholder">{placeholder}</div>
        <div className="styled-input">
          <input
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            type={type}
            name={name}
            onFocus={() => handleFocus(true)}
            onBlur={handleBlur}
            onChange={(e) => onChangeValue(e.target.value)}
          />
      </div>
    </Container>
  );
};

export default Input;
