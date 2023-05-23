import React from "react";
import DateProvider from "./DateProvider";
import TimeProvider from "./TimeProvider";
import LanguageProvider from "./LanguageProvider";


const Providers = ({ children }) => {
  return (
    <LanguageProvider>
     <TimeProvider>
       <DateProvider>
         {children}
       </DateProvider>
     </TimeProvider>
    </LanguageProvider>
  );
};

export default Providers;