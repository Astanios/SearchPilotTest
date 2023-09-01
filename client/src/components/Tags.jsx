import React, { useState, useEffect } from "react";

const Tag = ({
  tagsSrc,
  placeholder,
  type,
  optionsList = null,
  update,
  sameType = false,
}) => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [options, setOptions] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();
    if (
      (key === "," || key === "Enter") &&
      trimmedInput.length &&
      !tags.includes(trimmedInput)
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tempTags = [...tags];
      const poppedTag = tempTags.pop();
      e.preventDefault();
      setTags(tempTags);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };

  useEffect(() => {
    setTags(tagsSrc);
  }, []);

  const handleKeyUp = () => {
    setIsKeyReleased(true);
  };

  const handleDelete = (e, index) => {
    e.preventDefault();
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setTags((prevState) => [...prevState, e.target.value]);
  };

  useEffect(() => {
    update(tags);
    setOptions(optionsList?.filter((tag, i) => !tags.includes(tag)));
  }, [tags]);

  useEffect(() => {
    if (type === "select") {
      const tempOptions = optionsList.filter((item) => !tagsSrc.includes(item));
      setOptions(tempOptions);
    }
  }, [optionsList]);

  useEffect(() => {
    if (type == "select") {
      if (sameType) {
        setTags(tagsSrc);
      } else {
        setTags([]);
      }
    }
  }, [sameType]);

  return (
    <div className="container">
      {type === "select" ? (
        <select value={0} onChange={handleSelect}>
          <option value={0}>Choose sizes</option>
          {options.map((opt, i) => (
            <option value={opt} key={i}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          value={input}
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onChange={handleChange}
        />
      )}
      <div className="tagsContainer">
        {tags.map((tag, i) => (
          <div key={i} className="tag" onClick={(e) => handleDelete(e, i)}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tag;
