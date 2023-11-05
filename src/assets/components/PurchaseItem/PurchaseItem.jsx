const PurchaseItem = ({ id, amount, duration, price }) => {

    return (
        <div>
            <p>Service: {id}</p>
            <p>Amount: {amount}</p>
            <p>Duration: {duration} days</p>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
};

export default PurchaseItem;