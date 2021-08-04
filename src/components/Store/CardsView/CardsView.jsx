import React from 'react';
import propTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';

export default function CardsView(props) {
  const { products } = props;
  return (
    <div className="Store-Cards-View" key="Store-Cards-View">
      {products.map((product) => (<ShopCard product={product} key={product.id} />))}
    </div>
  );
}

CardsView.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      price: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
