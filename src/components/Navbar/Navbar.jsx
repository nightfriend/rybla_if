import * as React from 'react';

import './Navbar.scss';

import logoImg from '../../assets/ryba.png';
import cartImg from '../../assets/cart.png';
import {isEmpty} from "lodash/lang";
import {useHomeActions, useHomeState} from "../../context/HomeContext";

export default function Navbar() {
    const { selectedProductsIds } = useHomeState();
    const { toggleModalBox } = useHomeActions();

    return (
    <div className="navbar">
      <div className="navbar__logotype">
        <img src={logoImg} alt="logotype" />
        <h2>Rybka If</h2>
      </div>
      <div className="navbar-list">
        <div className="navbar-list__item">Home</div>
        <div className="navbar-list__item">Sets</div>
        <div className="navbar-list__item">Popular</div>
      </div>
      <div className="navbar-cart">
        <img src={cartImg} alt="cart" onClick={() => toggleModalBox(true)} />
          { !isEmpty(selectedProductsIds) && <div className="navbar-list__mark">{selectedProductsIds.length}</div> }
      </div>
    </div>
  );
}
