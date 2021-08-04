import React from 'react';
import propTypes from 'prop-types';
import ShopItem from './ShopItem/ShopItem';

export default function ListView(props) {
  const { products } = props;
  return (
    <div className="Store-List-View">
      {products.map((product) => (<ShopItem product={product} key={product.id} />))}
    </div>
  );
}

ListView.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      price: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
