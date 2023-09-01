import React, { useState, useEffect, useCallback } from "react";
import Tags from "./Tags";
import CustomInput from "./CustomInput";
import Name from "./Name";
import { footwearSizes, clothingSizes } from "../utils/products";
import { typeInput, capitalize } from "../utils/products";

const Form = ({
  type,
  brand,
  features,
  sizes,
  name,
  id,
  updateAttributes,
  validate,
  ...props
}) => {
  const [newName, setNewName] = useState("");
  const [showRest, setShowRest] = useState(false);
  const [newType, setNewType] = useState("");
  const [newBrand, setNewBrand] = useState("");
  const [customInput, setCustomInput] = useState({});
  const [newSizes, setNewSizes] = useState([]);
  const [newFeatures, setNewFeatures] = useState([]);

  useEffect(() => {
    setNewType(type);
    setNewBrand(brand);
    setNewSizes(sizes);
    setNewFeatures(features);
    setCustomInput({ [typeInput[type]]: props[typeInput[type]] });
  }, [brand, features, sizes, type]);

  const handleType = useCallback(
    (e) => {
      setNewType(e.target.value);
      setShowRest(true);
    },
    [newType, showRest]
  );

  const handleBrand = useCallback(
    (e) => {
      setNewBrand(e.target.value);
    },
    [brand]
  );

  useEffect(() => {
    console.log("updateAttributes", customInput);
    updateAttributes({
      name: newName,
      type: newType,
      brand: newBrand,
      sizes: newSizes,
      features: newFeatures,
      ...customInput,
    });
  }, [newType, newBrand, newSizes, newFeatures, newName, customInput]);

  return (
    <div>
      <Name nameSrc={name} validate={validate} updateName={setNewName} />
      <br />
      <div className="inputContainer">
        <label>
          Type:
          <br />
          <select value={newType} onChange={handleType}>
            <option value="" disabled="disabled">
              Select a type
            </option>
            <option value={"footwear"}>Footwear</option>
            <option value={"activewear"}>Activewear</option>
            <option value={"outerwear"}>Outerwear</option>
            <option value={"dress"}>Dress</option>
            <option value={"top"}>Top</option>
          </select>
        </label>
      </div>
      {showRest && (
        <>
          <div className="inputContainer">
            <label>
              Brand: <br />
              <input
                type="text"
                value={newBrand}
                onChange={handleBrand}
                placeholder="Enter product brand"
              />
            </label>
          </div>

          <div className="inputContainer">
            <label>
              Sizes: <br />
              <Tags
                tagsSrc={sizes}
                placeholder="Enter product sizes"
                type="select"
                optionsList={
                  newType === "footwear" ? footwearSizes : clothingSizes
                }
                update={setNewSizes}
                sameType={type === newType}
              />
            </label>
          </div>
          <div className="inputContainer">
            <label>
              Features: <br />
              <Tags
                tagsSrc={newFeatures}
                type="text"
                placeholder="Enter product features"
                update={setNewFeatures}
              />
            </label>
          </div>
          <CustomInput
            type={newType}
            valueSrc={
              props[typeInput[newType]] ? props[typeInput[newType]] : null
            }
            update={setCustomInput}
          />
        </>
      )}
    </div>
  );
};

export default Form;
