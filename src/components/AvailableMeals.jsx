import { useEffect,useState } from "react"
import Meal from "./Meal"
import useHttp from "../Hoocks/useHttp"
import Error from "./Error"
const CONFIG={}
export default function AvailableMeals(){
    const {data:availableData,isLoading,error}=useHttp("http://localhost:3000/meals",CONFIG,[])
    console.log(availableData)

    if (isLoading){
        return <p className="center">Fetching data...</p>
    }
    if (error){
        return <Error title="Failed to fetch meals" message={error}/>
    }
    return (
        <ul id="meals">
        {availableData.map(meal=>(
        <Meal
            product={meal}
            key={meal.id}
          
        />
        ))}

        </ul>
    )
}