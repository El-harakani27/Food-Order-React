import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
import { useContext } from "react";
export default function Header(){
    const cartCtx=useContext(CartContext)
    const userProgressCtx = useContext(UserProgressContext)
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems,item)=>{
        return totalNumberOfItems+item.quantity
    },0)
    function handleShowCart(){
        userProgressCtx.showCart()
    }
    return (
        <div id="main-header">
            <div id="title">
                <img src={logo} alt="storeLogo"/>
                <h1>REACTFOOD</h1>
                
            </div>
            <nav>
                <Button textOnly={true} onClick={handleShowCart}>cart({totalCartItems})</Button>
            </nav>
            
        </div>
    )
}