import * as React from 'react';
import './ListOfProducts.scss';
import ProductItem from "../ProductItem/ProductItem";
import {useHomeState} from "../../context/HomeContext";

export default function ListOfProducts() {
   const { productList } = useHomeState();

  return (
      <div className="list-of-products">
        <div className="heading">
          <div className="title">The Best Food</div>
          <div className="subtitle">Popular Dishes</div>
        </div>

        <div className="products">
            {
                productList.map(product => (
                    <ProductItem
                        key={Math.random()}
                        id={product.id}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    />
                ))
            }
        </div>
      </div>
  );
}
