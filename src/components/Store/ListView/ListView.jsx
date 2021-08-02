import ShopItem from "./ShopItem/ShopItem";

export default function ListView(props) {

    return(
        <div className = 'Store-List-View'>
            {props.products.map((product) => (<ShopItem product={product} key={product.id}/>))}
        </div>
    )
}