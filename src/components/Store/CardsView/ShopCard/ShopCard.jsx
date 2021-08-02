export default function ShopCard(props) {
    const {product} = props;
    return (
        <div className='Cards-View-Shop-Card' key={`${product.id}-card`}>
            <img className ='Card-Image' src={product.img} key={`${product.id}-image`} alt={product.name}/>
            <div className='Card-Name' key={`${product.id}-name`}>{product.name}</div>
            <div className='Card-Color' key={`${product.id}-color`}>{product.color}</div>
            <div className='Card-Price' key={`${product.id}-price`}>{`$${product.price}`}</div>
            <button className='AddToCart-Button' key={`${product.id}-button`}>Add to cart</button>
        </div>
    )
}