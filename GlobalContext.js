// // GlobalContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const GlobalContext = createContext();

// export const GlobalProvider = ({ children }) => {
//   const [dose, setDose] = useState(0);
//   const [bodyweight, setBodyweight] = useState(0);
//   const [isMale, setIsMale] = useState(true);

//   // Set initial values on startup
//   useEffect(() => {
//     setDose(150); // Example dose value
//     setBodyweight(70); // Example bodyweight value
//     setIsMale(true); // Example gender value
//   }, []);

//   return (
//     <GlobalContext.Provider value={{ dose, setDose, bodyweight, setBodyweight, isMale, setIsMale }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobal = () => {
//   const context = useContext(GlobalContext);
//   if (!context) {
//     throw new Error('useGlobal must be used within a GlobalProvider');
//   }
//   return context;
// };



// NAVIGATION VERSION BELOW

//GlobalContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [dose, setDose] = useState(0);
  const [bodyweight, setBodyweight] = useState(0);
  const [isMale, setIsMale] = useState(true);

  // Set initial values on startup
  useEffect(() => {
    setDose(150); // Example dose value
    setBodyweight(70); // Example bodyweight value
    setIsMale(true); // Example gender value
  }, []);

  return (
    <GlobalContext.Provider value={{ dose, setDose, bodyweight, setBodyweight, isMale, setIsMale }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};
