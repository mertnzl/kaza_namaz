//PACKAGE
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

// SCREEN
import InitialScreen from "../screens/InitialScreen"
import FormScreen from "../screens/FormScreen"
import DetailScreen from "../screens/DetailScreen"
import LanguageScreen from "../screens/LanguageScreen"


import { DateContext } from '../contexts/DateProvider';

import React, { useContext ,useEffect} from 'react'



const Stack = createStackNavigator();




const Router = () => {

  const { birincigiriş,setbirincigiriş} = useContext(DateContext);


  

  
//   useEffect(() => {
//     loadCount();
    
//  }, []); 
//   const saveCount = async () => {
//     try {
//       await AsyncStorage.setItem('il', JSON.stringify(birincigiriş));
//     } catch (e) {
//       console.log(e);
//     }
//   };
//  const loadCount = async () => {
//   try {
//     const value = await AsyncStorage.getItem('il');
//     if (value !== null) {
//       setbirincigiriş(JSON.parse(value));
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

//  useEffect(() => {
//     initialRoute();
//    saveCount();
//  }, [birincigiriş],
//  );
//   const initialRoute = () => {
//     if(birincigiriş=='birinci'){
//       return 'Initial'
//     }else if(birincigiriş=='ikinci'){
//       return 'Detail'
//     }
//   }

// console.log("GİRİŞŞŞŞŞŞŞŞ",birincigiriş);



  return (
    <>
    
      <NavigationContainer>
        
        <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName={'Language'}
        > 
        <Stack.Screen name="Language" component={LanguageScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="Form" component={FormScreen}  options={{
           // gestureEnabled: false
        }} />
        <Stack.Screen name="Detail" component={DetailScreen}  options={{
          // gestureEnabled: false
          
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
export default Router