import React, { useState, useEffect, useCallback } from "react";

const Name = ({ nameSrc, validate, updateName }) => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(-1);
  const [showValidate, setShowValidate] = useState(false);
  useEffect(() => {
    setName(nameSrc);
  }, [nameSrc]);
  const handleName = useCallback((e) => {
    setName(e.target.value);
  });

  const handleValidate = useCallback(async () => {
    setIsValid(await validate(name));
  }, [isValid, name]);

  useEffect(() => {
    if (name !== nameSrc) {
      setShowValidate(true);
    } else {
      setShowValidate(false);
    }
  }, [name, nameSrc]);

  useEffect(() => {
    updateName(name);
  }, [name]);

  return (
    <label>
      Name:
      <div className="nameInput">
        <input
          value={name}
          onChange={handleName}
          placeholder="Enter product name"
        />
        <button
          className={`validateBtn ${showValidate ? "active" : "inactive"}`}
          onClick={handleValidate}
          disabled={!showValidate}
        >
          Validate
        </button>
      </div>
    </label>
  );
};

export default Name;
