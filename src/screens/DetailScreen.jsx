import {View,StyleSheet,Button} from 'react-native'
import React, { useContext,useState } from 'react'
import FemaleDetail from '../components/FemaleDetail';
import MaleDetail from '../components/MaleDetail';
import { DateContext } from '../contexts/DateProvider';


const DetailScreen = () => {
    const {selectedGender} = useContext(DateContext);



  
  return (

     

  <View style={styles.container}>

       { selectedGender === 'kadın' && (
        <View >
        <FemaleDetail />
       </View>
       )}
       
       
       { selectedGender === 'erkek' && (
        <View>
           <MaleDetail />
        </View>
       )} 
    
  </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'rgb(87, 204, 153)'
  },
  
})
export default DetailScreen

