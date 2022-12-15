import * as React from 'react';
import { useForm } from '@formspree/react';

import './CartModalBox.scss';
import Button from "../../Ui/Button/Button";
import OrderItem from "../OrderItem/OrderItem";
import {productListMock} from "../../mock-data/productListMock";
import {useHomeActions, useHomeState} from "../../context/HomeContext";

const productList = productListMock;
export default function CartModalBox() {
    const { selectedProductsIds } = useHomeState();
    const { toggleModalBox, getProductsById, setSelectedProductsIds } = useHomeActions();

    const [state, handleSubmit] = useForm(process.env.REACT_APP_KEY)

    if (state.succeeded) {
        return (
            <div className="cart-modal">
                <div className="backdrop" />
                <div className="modal-box">
                    <div className="close-button" onClick={() => toggleModalBox(false)} />
                    <div className="modal-box__wrapper">
                        Thanks for order. Successfully!
                    </div>
                </div>
            </div>
        );
    }

  return (
    <form className="cart-modal" onSubmit={handleSubmit}>
      <div className="backdrop" />
        <div className="modal-box">
            <div className="close-button" onClick={() => toggleModalBox(false)} />
            <div className="modal-box__wrapper">
                <div className="contact-data">
                    <div className="input-field">
                        <div className="input-name">Fullname</div>
                        <label hidden htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            name="fullname"
                        />
                    </div>

                    <div className="input-field">
                        <div className="input-name">Email</div>
                        <label hidden htmlFor="email">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                    </div>

                    <div className="input-field">
                        <div className="input-name">Delivery Address</div>
                        <label hidden htmlFor="email">
                            Delivery Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            name="address"
                        />
                    </div>

                    <Button type="submit" disabled={state.submitting} style={{marginTop: "25px"}}>Order Now</Button>
                    <div className="total">{calculateTotalPrice(selectedProductsIds).toFixed(2)}$</div>
                </div>
                <div className="orders">
                    {renderSelectedProducts(selectedProductsIds)}
                </div>
            </div>
        </div>
    </form>
  );

  function renderSelectedProducts(products) {
      return products.map((itemId) => {
          const selectedItemData = productList.find(product => product.id === itemId);
          return (
              <>
                  <label hidden htmlFor="productN">
                      Delivery Address
                  </label>
                  <input
                      hidden
                      id={`productN`}
                      type="text"
                      name={selectedItemData.title}
                      value={selectedItemData.title}
                  />
                  <OrderItem selectedProductsIds={selectedProductsIds} productInfo={selectedItemData} setSelectedProductsIds={setSelectedProductsIds}  />
              </>
          )
      })
  }

  function calculateTotalPrice(products) {
      return getProductsById(products).reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
  }
}
