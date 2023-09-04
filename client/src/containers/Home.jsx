import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useItemsStore from "../store/items";

const Home = () => {
  const { fetchItems, itemsList } = useItemsStore();
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <div className="mainContainer">
        <h2 className="productList__title">Products list:</h2>
        <ul className="productList">
          {itemsList.map((item) => (
            <li className="productList__item" key={item.id}>
              <Link to={`item/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="buttonsContainer">
        <Link to={"item"}>
          <div className="backButton">New Item</div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
