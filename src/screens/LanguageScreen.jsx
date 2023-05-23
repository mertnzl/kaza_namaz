import { SafeAreaView, Text,TouchableOpacity,StyleSheet ,View} from 'react-native'
import React,{useContext} from 'react'
import { LanguageContext } from '../contexts/LanguageProvider'

const LanguageScreen = ({navigation}) => {

  const { changeLocale,i18n
    } = useContext(LanguageContext);
  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.title}> Dil-Language</Text>
      

      
      <View style={styles.children}>

      <TouchableOpacity onPress={() => changeLocale('tr')}style={styles.button1}>
            <Text style={styles.text}>Türkçe</Text>
        </TouchableOpacity>
        <View style={styles.gap}></View>
        <TouchableOpacity onPress={() => changeLocale('en')} style={styles.button2}>
            <Text style={styles.text}>English</Text>
        </TouchableOpacity>
        
      </View>
      <Text style={styles.text2}>{i18n.t('language')}</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Initial')}style={styles.button}>
        <Text style={styles.text3}>{i18n.t('next')}</Text>
      </TouchableOpacity> 


    </SafeAreaView>
  )
}
export default LanguageScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#caf0f8',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#03045e',
    marginBottom: 20,
  },
  children:{
    flexDirection: 'row',
    marginTop: 15,
    
  },
  button1:{
    width: 150,
    height: 70,
    backgroundColor: '#03045e',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomStartRadius: 50,
    borderTopStartRadius: 50,

  },
  button2:{
    width: 150,
    height: 70,
    backgroundColor: '#03045e',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 50,
    borderTopEndRadius: 50,
  },
  text:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  text2:{
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00b4d8',
  },


  gap:{
    width: 10,
    backgroundColor: '#00b4d8',
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 200, 
    height: 50,
    borderRadius: 10,
    backgroundColor: '#00b4d8',
    marginTop: 50,
  },
  text3:{
    
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03045e',
  }

 
})