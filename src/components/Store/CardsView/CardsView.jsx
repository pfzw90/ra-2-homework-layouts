import ShopCard from "./ShopCard/ShopCard";

export default function CardsView(props) {
    return(
        <div className = 'Store-Cards-View' key='Store-Cards-View'>
            {props.products.map((product) => (<ShopCard product={product} key={product.id}/>))}
        </div>
    )
}