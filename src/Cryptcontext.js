import React, { useContext, createContext, useEffect, useState } from 'react'

const Crypto = createContext();

const Cryptcontext = ({children}) => {
const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);


  return (
    <Crypto.Provider value={{currency, setCurrency, symbol}}> {children} </Crypto.Provider>
    );
};

export default Cryptcontext;

export const CryptoState = () => {
   return useContext(Crypto);
};
