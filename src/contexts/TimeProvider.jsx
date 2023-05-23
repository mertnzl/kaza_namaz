import React, { useState ,useEffect} from "react";

export const TimeContext = React.createContext();


const TimeProvider = ({children}) => {
    const [completed,setCompleted] = useState(0);
    const [sabahCompleted, setSabahCompleted] = useState(0)
    const [ogleCompleted, setOgleCompleted] = useState(0)
    const [ikindiCompleted, setIkindiCompleted] = useState(0)
    const [aksamCompleted, setAksamCompleted] = useState(0)
    const [yatsiComplated, setYatsiCompleted] = useState(0)



    const value = {
        completed, setCompleted,
        sabahCompleted, setSabahCompleted,
        ogleCompleted, setOgleCompleted,
        ikindiCompleted, setIkindiCompleted,
        aksamCompleted, setAksamCompleted,
        yatsiComplated, setYatsiCompleted,
        
};

return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
};

export default TimeProvider;