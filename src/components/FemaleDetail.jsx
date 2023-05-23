import { View,StyleSheet,Text} from 'react-native'
import React, { useContext } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import { DateContext } from '../contexts/DateProvider';
import { TimeContext } from '../contexts/TimeProvider';
import VakitStyle from './VakitStyle';
import { LanguageContext } from '../contexts/LanguageProvider'

const FemaleDetail = () => {
  const {i18n} = useContext(LanguageContext);

  const { completed,setCompleted,
          sabahCompleted,setSabahCompleted,
          ogleCompleted,setOgleCompleted,
          ikindiCompleted,setIkindiCompleted,
          aksamCompleted,setAksamCompleted,
          yatsiComplated,setYatsiCompleted
        } = useContext(TimeContext);


  const {  resultYear,resultMonth,resultDay,regl} = useContext(DateContext);

  let reglMonthTranslate;
  resultYear > 0 ? reglMonthTranslate = (resultYear * 12) + resultMonth:reglMonthTranslate =  resultMonth;
  let totalReglDay = reglMonthTranslate * regl;
  let totalFemaleDay = resultYear * 365 + resultMonth * 30 + resultDay - totalReglDay;
  
  let ratio =((completed/(totalFemaleDay*5))*100).toFixed(2)
  let sabahRatio = ((sabahCompleted/(totalFemaleDay))*100).toFixed(2)
  let ogleRatio = ((ogleCompleted/(totalFemaleDay))*100).toFixed(2)
  let ikindiRatio = ((ikindiCompleted/(totalFemaleDay))*100).toFixed(2)
  let aksamRatio = ((aksamCompleted/(totalFemaleDay))*100).toFixed(2)
  let yatsiRatio = ((yatsiComplated/(totalFemaleDay))*100).toFixed(2)

  const sabahPozitifPress = () => {
    if(sabahCompleted < totalFemaleDay){
      setCompleted(completed + 1)  
      setSabahCompleted(sabahCompleted + 1)};
  }
   const sabahNegatifPress = () => {
    if (sabahCompleted > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setSabahCompleted(sabahCompleted - 1)
    }}
  const OglePozitifPress = () => {
    if(ogleCompleted < totalFemaleDay){
      setCompleted(completed + 1)  
      setOgleCompleted(ogleCompleted + 1)} ;
  }
 const OgleNegatifPress = () => {
      if (ogleCompleted > 0 && ratio > 0) {
        setCompleted(completed - 1)
        setOgleCompleted(ogleCompleted - 1)
      } }
  const IkindiPozitifPress = () => {
    if(ikindiCompleted < totalFemaleDay){
      setCompleted(completed + 1)  
      setIkindiCompleted(ikindiCompleted + 1)} ;
  }
  const IkindiNegatifPress = () => {
    if (ikindiCompleted > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setIkindiCompleted(ikindiCompleted - 1)
    } }

  const AkşamPozitifPress = () => {
    if(aksamCompleted < totalFemaleDay){
      setCompleted(completed + 1)  
      setAksamCompleted(aksamCompleted + 1)} ;
  }
  const AkşamNegatifPress = () => {
    if (aksamCompleted > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setAksamCompleted(aksamCompleted - 1)
    } }
      
  const YatsiPozitifPress = () => {
    if(yatsiComplated < totalFemaleDay){
      setCompleted(completed + 1)  
      setYatsiCompleted(yatsiComplated + 1)} ;
  }
  const YatsiNegatifPress = () => {
    if (yatsiComplated > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setYatsiCompleted(yatsiComplated - 1)
    } }
  return (
  <View style={styles.container}>
      <LinearGradient
        colors={['rgb(255, 77, 109)', 'transparent']}
        style={styles.background}
      />
      <Text style={styles.title}>{i18n.t('total')}</Text>
      <View style={{marginTop: 10}}>
        <View style={styles.ratio}>
          <Text style={styles.ratiotext}>%{ratio}</Text>
          <Text style={{textAlign:'center'}}>{completed}/{totalFemaleDay*5} </Text>
        </View>
      </View> 

    <View style={styles.time}>
       <VakitStyle timeName={i18n.t('sabah')}  ratio={sabahRatio} completed={sabahCompleted} day={totalFemaleDay} handlePozitifPress={sabahPozitifPress} handleNegatifPress={sabahNegatifPress}/>
       <VakitStyle timeName={i18n.t('ogle')}   ratio={ogleRatio}  completed={ogleCompleted}  day={totalFemaleDay} handlePozitifPress={OglePozitifPress} handleNegatifPress={OgleNegatifPress} />
       <VakitStyle timeName={i18n.t('ikindi')} ratio={ikindiRatio}completed={ikindiCompleted}day={totalFemaleDay} handlePozitifPress={IkindiPozitifPress} handleNegatifPress={IkindiNegatifPress}/>
       <VakitStyle timeName={i18n.t('aksam')}  ratio={aksamRatio} completed={aksamCompleted} day={totalFemaleDay} handlePozitifPress={AkşamPozitifPress} handleNegatifPress={AkşamNegatifPress}/>
       <VakitStyle timeName={i18n.t('yatsi')}  ratio={yatsiRatio} completed={yatsiComplated} day={totalFemaleDay} handlePozitifPress={YatsiPozitifPress} handleNegatifPress={YatsiNegatifPress}/>
    </View >
  </View>
  )
}
export default FemaleDetail

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
  },
   background: {
    flex:1,
    position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     height: 700,
   },
   title:{
    marginTop: 70,
     color:'white',
     fontWeight:200,
     fontSize:25
  },
    ratio:{
      height: 150,
      width: 150,
      justifyContent: 'center',
      borderWidth:3,
      overflow: 'hidden',
      borderColor: 'gray',
      borderRadius: 65,
      backgroundColor: 'white',
      gap: 10,
    },
    ratiotext:{
      color: 'purple',
      fontSize: 30,
      textAlign: 'center',
    },
    time:{  
      flexDirection: 'row',
      marginTop: 50,
      gap: 10,
    },
    icon:{
      marginTop: 50,
    }
})


