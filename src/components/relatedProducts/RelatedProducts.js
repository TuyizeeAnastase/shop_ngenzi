import React from "react";
import Item from "../item/Item";
import "../itemList/ItemList";
import { Link } from "react-router-dom";

function GetRelatedProducts ({items}) {
  const limitedItems = items.slice(0, 4);
    return (
        <div className="item-list-container">
        <h1 className="header">Related Products</h1>
        <div className="item-list">
          {limitedItems .map((item) => (
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
      );
};

export default GetRelatedProducts;
