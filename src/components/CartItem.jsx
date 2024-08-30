import { currancyformatter } from "../util/formatter";

export default function CartItem({name,quantity,price,onIncrease,onDecrease}){
    return <li className="cart-item">
        <p>{name} - {quantity} x {currancyformatter.format(price)}</p>
        <p className="cart-item-action">
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
}