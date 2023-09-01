import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Form from "../components/Form";
import useItemsStore from "../store/items";

const Item = () => {
  const { id } = useParams();
  const { fetchItem, selectedItem, updateItem, validateName } = useItemsStore();
  const [item, setItem] = useState(null);
  const [attributes, setAttributes] = useState(null);

  useEffect(() => {
    if (id) {
      fetchItem(id);
    }
  }, []);

  useEffect(() => {
    if (id) {
      setItem(selectedItem);
    } else {
      setItem({
        name: "",
        type: "",
        brand: "",
        sizes: [],
        features: [],
      });
    }
  }, [selectedItem]);

  const handleValidate = useCallback(async (name) => {
    return await validateName(id, name);
  });

  const handleSubmit = useCallback(async (data) => {
    updateItem(id, attributes);
  });

  return (
    item && (
      <div>
        <div className="mainContainer">
          <h2 className="title">Product detail:</h2>

          <Form
            {...item}
            updateAttributes={setAttributes}
            validate={handleValidate}
          />
        </div>
        <div className="buttonsContainer">
          <button className="backButton" onClick={handleSubmit}>
            Save
          </button>
          <Link to="/">
            <div className="backButton">Go back</div>
          </Link>
        </div>
      </div>
    )
  );
};

export default Item;
