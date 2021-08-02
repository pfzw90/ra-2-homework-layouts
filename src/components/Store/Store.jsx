import products from '../../js/products'
import shortid from 'shortid'
import { useState } from 'react'
import IconSwitch from './IconSwitch/IconSwitch'
import CardsView from './CardsView/CardsView'
import ListView from './ListView/ListView'

export default function Store() {
    const productsIndex = products.map((product) => ({...product, id: shortid.generate()}) )
    const DEFAULT_STORE_STATE = 'view_module';

    const [storeView, changeStoreView] = useState(DEFAULT_STORE_STATE)

    const iconClick = () => {
        changeStoreView((prev) => (prev === 'view_module') ? 'view_list' : 'view_module');
    }

    switch (storeView) {
        case 'view_module':
            return (
                <div className = 'Store' key='Store'>
                    <IconSwitch icon={storeView} iconClick={iconClick}/>
                    <CardsView products={productsIndex}/>
                </div>    
            )
        default:
            return (
                <div className = 'Store' key='Store'>
                    <IconSwitch icon={storeView} iconClick={iconClick}/>
                    <ListView products={productsIndex}/>
                </div>    
            )
    }
   
}