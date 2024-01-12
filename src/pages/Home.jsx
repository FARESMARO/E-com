import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Home() {
  const { Products } = useContext(ProductContext);
  console.log(Products);
  const filterProducts = Products.filter((i) => {
    i.category === "men's clothing" || i.category === "women's clothing";
  });
  return (
    <div>
      <section>
        <div className="container max-auto">
          {filterProducts.map((product) => {
            return <div key={product.id}>{product.title}</div>;
          })}
        </div>
      </section>
    </div>
  );
}

export default Home;
