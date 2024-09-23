import { addToStore } from '../redux/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

export function TicketingApp() {
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.cartReducer.items);

    const handleAddToCart = () => {
        console.log('ww');
        dispatch(addToStore());
    };
    return (
        <div>
            ticketing:
            {JSON.stringify(items)}
            <br />
            <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
}

export default TicketingApp;
