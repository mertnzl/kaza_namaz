import React,{useState} from 'react';
import * as Localization from 'expo-localization'
import {translations} from '../../Language' 

import {I18n} from 'i18n-js'


    const  i18n = new I18n(translations)
    i18n.locale = Localization.locale
    i18n.enableFallback = true;

export const LanguageContext = React.createContext();
const LanguageProvider = ({children}) => {

   
    const [locale, setLocale] = useState(i18n.locale)  
    const changeLocale = (locale) => {    
        i18n.locale = locale
        setLocale(locale)
    }



    const value = { changeLocale,i18n};

return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;