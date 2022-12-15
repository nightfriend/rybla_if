import * as React from 'react';

import './OrderItem.scss';
import productPreviewImg from "../../assets/product_sushi1.png";
import Button from "../../Ui/Button/Button";
import {useHomeActions} from "../../context/HomeContext";

export default function OrderItem({ productInfo }) {
    const { removeProduct } = useHomeActions();
    const {  title, price, id } = productInfo;

    return (
      <div className="order">
          <img src={productPreviewImg} className="order__image"  alt="product"/>
          <div className="order__information">
              <div className="order__name">{title}</div>
              <div className="order__price">{price}$</div>
          </div>
          <div className="order__close">
              <Button
                  variation="secondary"
                  style={{width: '50px', height: '50px'}}
                  onClick={() => removeProduct(id)}
              >
                  X
              </Button>
          </div>
      </div>
  );


}
