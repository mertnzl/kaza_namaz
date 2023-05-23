import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


const VakitStyle = (props) => {
  
    
  return (
    <View style={styles.timebar}>
        <Text style={styles.timetext}>{props.timeName}</Text>
        <View style={styles.btn}>
        <TouchableOpacity onPress={props.handlePozitifPress}>
        <Ionicons name="add-circle-outline" size={45} color="green"  style={styles.icon}/>
        </TouchableOpacity>

        <View style={styles.ratio}>
          <Text style={styles.ratiotext}>%{props.ratio}</Text>
          </View>
          <Text style={{textAlign:'center'}}>{props.completed}/{props.day} </Text>

        <TouchableOpacity onPress={props.handleNegatifPress}>
        <Ionicons name="ios-remove-circle-outline" size={45} color="green" style={styles.icon}  />
        </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    timetext:{
        marginTop: 14,
        textAlign: 'center',
        color: 'rgb(255, 77, 109)',
        fontSize: 14, 
      },
      timebar:{
        backgroundColor: 'white',
        borderWidth:2,
        borderColor: 'gray',
        borderRadius: 30,
        height: 250,
        width: 70,
      },
      btn :{
        marginTop: 8,
        gap: 3,
        alignItems: 'center',
      },
      ratio:{
        height: 70,
        width: 70,
        justifyContent: 'center',
        borderWidth:3,
        overflow: 'hidden',
        borderColor: 'gray',
        borderRadius: 60,
        backgroundColor: 'white',
        gap: 3,
      },
      ratiotext:{
        color: 'rgb(255, 77, 109)',
        fontSize: 16,
        
        textAlign: 'center',

      
      },
})
export default VakitStyle