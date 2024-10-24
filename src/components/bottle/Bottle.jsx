import './bottle.css'
const Bottle = ({bottle, handleCard}) => {
    const {name, img, seller, price, stock, ratings}=bottle;
    return (
        <div className="bottle">
            <h5> Name: {name}</h5>
            <img src={img} alt="" />
            <p>Price: {price}$</p>
            <p><small>Stock: {stock}</small></p>
            <p><small>Rating: {ratings}</small></p>
            <button onClick={()=>handleCard(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;