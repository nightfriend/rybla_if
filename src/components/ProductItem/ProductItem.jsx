import * as React from 'react';
import './ProductItem.scss';
import {useHomeActions} from "../../context/HomeContext";

export default function ProductItem({ id, title, description, price }) {
    const { selectProduct } = useHomeActions();
  return (
      <div className="product">
        <div className="product__title">{ title }</div>
        <div className="product__description">{ description }</div>
        <div className="product__buy">
          <div className="product__price">{ price }$</div>
          <div className="product__add" onClick={() => selectProduct(id)} />
        </div>
      </div>
  );
}
