import { useEffect, useState,useCallback } from "react";
async function sendHttpRequest(url,config){
    const response = await fetch(url,config)
    const resData = await response.json()
    if (!response.ok){
        throw new Error(resData.message || "There is Somthing wrong")
    }
    return resData
}
export default function useHttp(url,config,intialState){
    const [isLoading,setIsLoading]=useState(false)
    const [data,setData] = useState(intialState)
    const [error,SetError] = useState()
    const sendRequest = useCallback(async function sendRequest(){
        setIsLoading(true)
        try{
            const resData= await sendHttpRequest(url,config)
            console.log(resData)
            setData(resData)
        }
        catch(err){
            SetError(err.message)
        }
        setIsLoading(false)
    },[url,config])
    useEffect(()=>{
        if ((config&&(config.method==='GET' || !config.method)) || !config){
            sendRequest()
        }
    },[sendRequest,config])
    return {
        data,
        isLoading,
        error,
        sendRequest
    }
} 