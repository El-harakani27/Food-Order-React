import { useContext, useState } from "react"
import Button from "./UI/Button"
import { currancyformatter } from "../util/formatter"
import CartContext from "../store/CartContext"
export default function Meal({product}){
    const cartCtx=useContext(CartContext)
    function handleAddMealToCart(){
        cartCtx.addItem(product)
    }
    return (
        <>
        
        
            

            <li className="meal-item">
            <article>
            <img src={`http://localhost:3000/${product.image}`} alt={product.name}/>
            <h3>{product.name}</h3> 
            <p className="meal-item-price">{currancyformatter.format(product.price)}</p>
            <p className="meal-item-description">{product.description}</p>
            
            
            <p className="meal-item-actions"><Button onClick={handleAddMealToCart}>Add To Cart</Button></p>
            </article>
            </li>
           
       
       

       
</>
        

        
    )
}