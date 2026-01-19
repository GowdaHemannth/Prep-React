import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { InputBox } from './Componenst'

// Then Here I Have Created   One Custommade Hook Right We can Use That Here
import {CurrencyINFO} from './hooks'
import './App.css'

function App() {
  const[Amount,SetAmount]=useState(0)
  const [From,SetFrom]=useState("usd")
  const[To,SetTo]=useState("inr")
  const[ConvertedAmount,SetConvertedAmount]=useState(0)
  
  const currencyInfo=useCurrency(From)

  // Here I Will Be Doing That Once 
  // all the keys here keys Means He optains
  // if you Think We can Pas these Optiins to our sELECT bOX 
  const Options= Object.keys(currencyInfo)

  const Swap=()=>{
    // here whatare Doing We Are Jsut wapping Value from here and Thier 
    SetFrom(To)
    SetTo(From) // That All 
  }
  // Then I Need Converted Amount Right 
  const convert=()=>{
    SetConvertedAmount(Amount*currencyInfo(To))
  }
  return (
    <>
      <h1 className='bg-green-400'>Currency Converter</h1>
    </>
  )
}

export default App
