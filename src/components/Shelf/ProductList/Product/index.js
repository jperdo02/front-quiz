import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';


const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  let productInstallment;
  

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>o {product.installments} cuotas de </span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }
  
  const onMouseOver = () => {
  
  var p=require(`../../../../static/products/${product.sku}_2.jpg`);
  var pd=window.location.origin+p;
  document.getElementById(product.sku).setAttribute("src", pd);
	
  };
  
  const onMouseOut = () => {
  
  var p=require(`../../../../static/products/${product.sku}_1.jpg`);
  var pd=window.location.origin+p;
  document.getElementById(product.sku).setAttribute("src", pd);
	
  };

  
  return (
  
    
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
	  onMouseEnter={() => onMouseOver()}
	  onMouseOut={() => onMouseOut()}
	  
      data-sku={product.sku}
	
    >
	
      {product.isFreeShipping && (
        <div className="shelf-stopper">Envío gratis</div>
      )}
	  
	  
      <Thumb
	    id={product.sku}
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
	
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <div className="shelf-item__buy-btn">Añadir al carrito</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
