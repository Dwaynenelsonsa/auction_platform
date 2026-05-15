
const BidForm = ({ productId }) => {
    const handleBid = () => {
        api.post('/bids', { productId, amount: 100 });
    };
    return <button onClick={handleBid}>Place Bid</button>;
};
