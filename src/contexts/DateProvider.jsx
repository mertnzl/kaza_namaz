import React, { useState,useEffect } from "react";



export const DateContext = React.createContext();
 const DateProvider = ({children}) => {
 const [birincigiriş,setbirincigiriş]=useState('birinci');      
 const [year,setYear]=useState('');
 const [month,setMonth]=useState('');
 const [day,setDay]=useState('');
 const [starteryear,setStarterYear]=useState('');
 const [startermonth,setStarterMonth]=useState('');
 const [starterday,setStarterDay]=useState('');
 const [regl ,setRegl]=useState(5);
 const [puberty,setPuberty]=useState(12);
 const [selectedGender, setSelectedGender] = useState('erkek');

 const currentYear = new Date().getFullYear();
 const currentMonth = new Date().getMonth() + 1;
 const currentDay = new Date().getDate();




 let continueNamazYear =currentYear-starteryear
 let continueNamazMonth =currentMonth-startermonth
 let continueNamazDay =currentDay-starterday

 
  
  let resultYear = currentYear - year - puberty - continueNamazYear;
  let resultMonth = currentMonth - month-continueNamazMonth;
  let resultDay = currentDay - day-continueNamazDay;


  resultMonth < 0 ? resultYear-- :null;
  resultMonth < 0 ? resultMonth = resultMonth + 12 :null;
  resultDay < 0 ? resultMonth-- :null;
  resultDay < 0 ? resultDay = resultDay + 30 :null;



 
  const value = {
          year,month,day,
          setYear,setMonth,setDay,
          puberty,setPuberty,
          regl,setRegl,
          setSelectedGender,selectedGender,
          resultYear,resultMonth,resultDay,
          starteryear,setStarterYear,
          startermonth,setStarterMonth,
          starterday,setStarterDay,
          birincigiriş,setbirincigiriş,
          
          

  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export default DateProvider;

