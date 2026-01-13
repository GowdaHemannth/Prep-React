// Here we will be Learning About Hooks Here we might think that creating hooks Means Creating Something 
// But in the Reality its Quiet Different hooks are nothing but things Which Return IN ARRYS 
// bASICALYY ITS aN fUNCTION

// THEN WE CAME TO KNOW THAT HOKKS IS JUSTV A FUNCTION WHICH RETURNS ARRAY OF TWO THINGS 
// BUT IN REALITY ITS NOT THE cASE HOKK!=Function Becuase Hokkk Verty Different from function 
// Function is like whiteboard once written erase again write 
// But Hook is Like DataBase where we keep Or Preserve things 

// tHERE mIGHT BE aNOTHER DOUBT THAT EVEN THOUGH I HAVE DEFINED FUNCTION THEN USE IT HAS HOOKS 
// MY QUESTION IS HOW DOES THE FILES GET KNOW IT HAS CUSTOM hOOKS 
// IT GET TO KNOW BY WE I USE ANY PREBUILT hOOK INSIDE THE FUNCTION 

// Now By Clearing All Doubts We will proceed 

import { useEffect,useState } from "react";

function CurrencyINFO(currency){
    // if didnt pass any hokks then it will be considered as Function 
    // here i trigger something then only API SHOULD CALL 
    // THEN FOR THESE WHATS BETEER THAN USING USEEFFECT
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()) // Here we will be doing these becuase Most of the API CALSS ARE IN string 
        .then((res)=>setData(res[currency]))
        console.log(data)

    },[currency])
    // Here Comes the Doubt that what am i returning we are returing data after setting it 
    return data;


    //
}

// Here we might Confusion that how do i call use effect 
// then if you remmeber we have kept kdependies as currecny we are changing it frequently then its obvios that use effect get calls 
export default CurrencyINFO