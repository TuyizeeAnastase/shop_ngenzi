import React from "react";
import items from "../../mockData/items.json";
import ItemList from "../itemList/ItemList";
import Banner from "../banner/Banner";


function HomePage() {
  return (
    <section>
    <Banner/>
      <ItemList items={items} />
    </section>
  );
}

export default HomePage;
