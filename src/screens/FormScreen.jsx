import { StyleSheet, Text ,TextInput,View,SafeAreaView,Alert,ScrollView} from 'react-native'
import React, { useContext ,useEffect,useState} from 'react'
import { DateContext } from '../contexts/DateProvider'
import {LinearGradient} from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LanguageContext } from '../contexts/LanguageProvider'


const FormScreen = ({navigation}) => {
  const { year,month,day,
          setYear,setMonth,setDay,
          starteryear,setStarterYear,
          startermonth,setStarterMonth,
          starterday,setStarterDay,
          puberty,setPuberty,
          regl,setRegl,
          selectedGender,setSelectedGender,
          resultYear,
          setbirincigiriş,
        } = useContext(DateContext);
  const {i18n} = useContext(LanguageContext);
        

  
  const alertButtonText = i18n.t('okay');
  const warning = i18n.t('alertWarning');
  const alertMessage1 = i18n.t('alertMessage1');
  const alertMessage2 = i18n.t('alertMessage2');
  const alertMessage3 = i18n.t('alertMessage3');
  const alertMessage4 = i18n.t('alertMessage4');
  const alertMessage5 = i18n.t('alertMessage5');
  const alertMessage6 = i18n.t('alertMessage6');

    let birlesik = year.toString() + month.toString() + day.toString()+ starterday.toString()+ startermonth.toString()+ starteryear.toString();
    const regex = /^\d+$/;
  const handlePress=()=>{
    
      if (year < 1900 ) {
        Alert.alert(
         warning,alertMessage1,
         [{ text: alertButtonText  },]
            )
        return;
      }
     else if (resultYear < 0  ) {
        Alert.alert(
          warning,alertMessage2,
          [{ text: alertButtonText  },]
         )
      return;
    }
      else if (month > 13 || startermonth > 13 ) {
        Alert.alert(
          warning,alertMessage3,
         [{ text: alertButtonText  },]
          ) 
        return;
    }
     else if (day > 32 || starterday > 32) {
       Alert.alert(
        warning,alertMessage4,
         [{ text: alertButtonText  },]     
          )
        return;
      }
      else if (!regex.test(birlesik)) {
        Alert.alert(
          warning, alertMessage5,
        [{ text: alertButtonText  },]
        )
        return;
      }
      else if (year === '' || month === '' || day === ''||starteryear === '' || startermonth === '' || starterday === '') {
        Alert.alert(
          warning,alertMessage6,
          [
            { text: alertButtonText  },
          ]
          )
        return;
      }
      else {
         
          setbirincigiriş('ikinci')
          navigation.navigate('Detail');
          
          
          
      }    
}



handlelog = () => {
  first === true ? setFirst(first(false)) : null;
};
handlePubertyPositive = () => {
  puberty >= 20 ? setPuberty(puberty) : setPuberty(puberty + 1);
};
handlePubertyNegative = () => {
  puberty < 11 ? setPuberty(puberty) : setPuberty(puberty - 1);
};
handleReglPositive = () => {
  regl > 10 ? setRegl(regl) : setRegl(regl + 1);
};
handleReglNegative = () => {
  regl <= 3 ? setRegl(regl) : setRegl(regl - 1);
};
const handleGenderSelection = (gender) => {
  setSelectedGender(gender);
};
  return (
    <SafeAreaView  style={styles.container} scrollEnabled={false}>
      <ScrollView>
      <LinearGradient
        colors={['#f72585', 'transparent']}
        style={styles.background}
      />
       <View>
        
      <Text style={styles.title}>{i18n.t('birthdate')}</Text>
      <View style={styles.date}>
      <View style={styles.datebar}>
            <Text style={styles.text}>{i18n.t('day')}</Text>
            <TextInput   
            style={styles.input}
            value={day}
            onChangeText={text => setDay(text)}
            placeholder="GG"
            keyboardType="numeric"
            maxLength={2}
            />
        </View>
        <View style={styles.datebar}>
          <Text style={styles.text}>{i18n.t('month')}</Text>
          <TextInput
          style={styles.input}
          value={month}
          onChangeText={text => setMonth(text)}
          placeholder="AA"
          keyboardType="numeric"
          maxLength={2}
          />
        </View>
        <View style={styles.datebar} >
          <Text style={styles.text}>{i18n.t('year')}</Text>
            <TextInput
            style={styles.input}
            value={year}
            onChangeText={text => setYear(text)}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            />
        </View>
      
      </View>
      <View style={styles.line}></View>
      <Text style={styles.title2}>{i18n.t('gender')}</Text>
      <View style={styles.genderbar}>
        <TouchableOpacity  onPress={() => handleGenderSelection('erkek')}
        style={[
          styles.genderOption,
          selectedGender === 'erkek' && styles.selectedGenderOption,
        ]}>
      <Text style={styles.gender}>{i18n.t('male')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleGenderSelection('kadın')}
        style={[
          styles.genderOption,
          selectedGender === 'kadın' && styles.selectedGenderOption,
        ]}>
      <Text style={styles.gender}>{i18n.t('female')}</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.ergenlikkadin}>
        <View >
      <Text style={styles.title3}>{i18n.t('pubertyage')}</Text>
      <View style={styles.datebar}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={handlePubertyNegative}>
            <Text style={styles.pozitifnegatif}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{puberty}</Text>
          <TouchableOpacity onPress={handlePubertyPositive} >
            <Text style={styles.pozitifnegatif} >+</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      {selectedGender === 'kadın' && (
        <View>
        <Text style={styles.title3}> {i18n.t('monthregl')}</Text>
        <View style={styles.datebar}>
        <View style={styles.view1}>
          <TouchableOpacity onPress={handleReglNegative}>
            <Text style={styles.pozitifnegatif}>-</Text>
          </TouchableOpacity>
          <Text style={styles.text}>{regl}</Text>
          <TouchableOpacity onPress={handleReglPositive} >
            <Text style={styles.pozitifnegatif} >+</Text>
          </TouchableOpacity>
         
        </View>
      </View>
      </View>
      )}
      </View>
      <View style={styles.line}></View>
      <Text style={styles.title3}>{i18n.t('starterdate')}</Text>
      <View style={styles.widthbar} >
      <View >
            <Text style={styles.text2}>{i18n.t('day')}</Text>
            <TextInput   
            style={styles.input}
            value={starterday}
            onChangeText={text => setStarterDay(text)}
            placeholder="GG"
            keyboardType="numeric"
            maxLength={2}
            />
        </View>

            <View >
          <Text style={styles.text2}>{i18n.t('month')}</Text>
          <TextInput
          style={styles.input}
          value={startermonth}
          onChangeText={text => setStarterMonth(text)}
          placeholder="AA"
          keyboardType="numeric"
          maxLength={2}
          />
        </View>
        <View>   
      <Text style={styles.text2}>{i18n.t('year')}</Text>
            <TextInput
            style={styles.input}
            value={starteryear}
            onChangeText={text => setStarterYear(text)}
            placeholder="YYYY"
            keyboardType="numeric"
            maxLength={4}
            />
            </View>
      </View>
      <View style={styles.line}></View>
       <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buton}>{i18n.t('calculate')}</Text>
       </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}
export default FormScreen
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#3a0ca3'
  },
  background: {
    flex:1,
    position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     height: 500,
  },
  title:{
    marginTop:40,
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  title2:{
    marginTop:20,
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontWeight:'bold',
  },
  title3:{
    marginTop:20,
    justifyContent:'center',
    textAlign:'center',
    color:'white',
    fontSize:15,
    fontWeight:'500',
  },
  view1:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    gap:15, 
  },
  datebar:{
    backgroundColor: '#b892ff',
    borderRadius: 50,
    height:75,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    gap: 8,
    alignSelf: 'center', 
},
genderbar:{
  backgroundColor: '#b892ff',
  borderRadius: 50,
  height:75,
  width: 200,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  gap: 20,
  alignSelf: 'center',
  flexDirection:'row',
  
},
gender:{
color:'#3a0ca3',
fontSize:20,
fontWeight:'500',
textAlign:'center',
paddingVertical:3,
},
text:{
  fontWeight: 'bold',
  color: '#edeec9',
  fontSize: 20, 
},
text2:{
  fontWeight: 'bold',
  color: '#edeec9',
  fontSize: 15,
  textAlign:'center', 
},
input: {
  fontWeight: 'bold',
  color: '#edeec9',
   borderWidth:1, 
   borderColor: '#edeec9',
   borderRadius: 50,
  width: 50,
  height: 30,
  textAlign: 'center',
},
date:{
  flexDirection:'row',
  justifyContent:'center',
  gap: 20,
},
pozitifnegatif:{
  fontSize:30,
  color:'white',
},
selectedGenderOption: {
  backgroundColor: '#ccff33',
  borderColor: '#edeec9',
  borderRadius: 50,
  width: 80,
  height: 30,
},
buton:{
  textAlign:'center',
  alignSelf:'center',
  marginTop: 20,
  height: 50,
  width: 200,
  backgroundColor: '#ccff33',
  borderRadius: 10,
  color: '#3a0ca3',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 10,
  overflow: 'hidden',
},
line:{
  height: 1,
  backgroundColor: 'white',
  marginHorizontal: 40,
  marginTop: 14,
},
ergenlikkadin:{
flexDirection:'row',
justifyContent:'center',
gap:20,
},
widthbar:{
  flexDirection:'row',
  backgroundColor: '#b892ff',
  borderRadius: 50,
  height:60,
  width: 250,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  gap: 15,
  alignSelf: 'center',
}, 
})










