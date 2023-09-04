import React, { useCallback, useState, useEffect } from "react";
import { typeInput, capitalize } from "../utils/products";

const CustomInput = ({ type, valueSrc, update }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);
  useEffect(() => {
    if (valueSrc) setInputValue(valueSrc);
  }, [valueSrc]);

  useEffect(() => {
    update({ [typeInput[type]]: inputValue });
  }, [inputValue, update, type]);
  return (
    typeInput[type] && (
      <>
        <label>{capitalize(typeInput[type])}:</label>
        <br />
        <input value={inputValue} onChange={handleInputValue} />
      </>
    )
  );
};

export default CustomInput;
