import React from 'react';
import shortid from 'shortid';
import products from '../../js/products';
import IconSwitch from './IconSwitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';

export default function Store() {
  const productsIndex = products.map((product) => ({ ...product, id: shortid.generate() }));
  const DEFAULT_STORE_STATE = 'view_module';

  const [storeView, changeStoreView] = React.useState(DEFAULT_STORE_STATE);

  const iconClick = () => {
    changeStoreView((prev) => ((prev === 'view_module') ? 'view_list' : 'view_module'));
  };

  const view = (storeView === 'view_module') ? <CardsView products={productsIndex} /> : <ListView products={productsIndex} />;

  return (
    <div className="Store" key="Store">
      <IconSwitch icon={storeView} iconClick={iconClick} />
      {view}
    </div>
  );
}
