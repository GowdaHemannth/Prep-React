import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,

  currencyOptions = [],
  selectedCurrency = "usd",
  onCurrencyChange, // I Might Be Wondering what am i doing with Label and ClassNae
  amountDisable = false,
  // Here We Might Be Having Doubt Why We Use These
  // Think in Wesite and User Enters the Amount
  // then Press Buttomn  then THe Inpuit Fies Becomes Disable
  // So NOW HERE MIGHT BE THE QUESTION WHEN DOES IT WILL BECOME FLASE AGAIN
  // SIMPLE LOGIC ADD ANOTHER EDIT BUTTION SO WHEN SOMEONE PREE EDIT BUTTON INPUT FIELS SHOULD BE
  // ENABLED AGAIN
  currencyDisable = false, // Its Nothing But the Props Which we Are Passing Through InputBox
  // Here We will be Re using the Things
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          // Vlue that Should be Displayed on the Uer
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectedCurrency}
        // Here Currency Cahnges it Should be Updated to Current Selected INput 
        // Hee we have Numeros Options From that Selected will bve Choosen
        onChange={(e)=>onCurrencyChange(e.target.value)}
        >
         {currencyOptions.map((currency)=>(
          // key used for performance 
           <option key={currency} value={currency}>{currency}</option>
         ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
