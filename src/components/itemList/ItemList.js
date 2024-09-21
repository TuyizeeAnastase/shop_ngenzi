import React from "react";
import Item from "../item/Item";
import "./ItemList.css";
import { Link } from "react-router-dom";

function ItemList({ items }) {
  const sections = [
    { title: "Featured Products", items: items.slice(0, 5) },
    { title: "Made in Rwanda", items: items.slice(5, 10) },
    { title: "Women", items: items.slice(10, 15) },
    { title: "Men", items: items.slice(15, 20) },
  ];
  return (
    <div className="item-list-container">
      {sections.map((section, index) => (
        <div key={index} className="section">
          <h1 className="header">{section.title}</h1>
          <div className="item-list">
            {section.items.map((item) => (
              <Link to={`/item/${item.id}`} key={item.id}>
                <Item
                  name={item.name}
                  rating={item.rating}
                  price={item.price}
                  saleDiscount={item.saleDiscount}
                  image={item.image}
                  brand={item.brand}
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
