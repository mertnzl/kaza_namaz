import { View, Text,StyleSheet } from 'react-native'
import React,{useContext,useEffect,useState} from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import { DateContext } from '../contexts/DateProvider';
import { TimeContext } from '../contexts/TimeProvider';
import VakitStyle from './VakitStyle';
import { LanguageContext } from '../contexts/LanguageProvider'



const MaleDetail = () => {
  const {i18n} = useContext(LanguageContext);

  
  const { completed,setCompleted,
    sabahCompleted,setSabahCompleted,
    ogleCompleted,setOgleCompleted,
    ikindiCompleted,setIkindiCompleted,
    aksamCompleted,setAksamCompleted,
    yatsiComplated,setYatsiCompleted,
    } = useContext(TimeContext);

    
  const {resultYear,resultMonth,resultDay} = useContext(DateContext);
  let totalMaleDay = resultYear * 365 + resultMonth * 30 + resultDay;
  let ratio =((completed/(totalMaleDay * 5))*100).toFixed(2)
  let sabahRatio = ((sabahCompleted/(totalMaleDay))*100).toFixed(2)
  let ogleRatio = ((ogleCompleted/(totalMaleDay))*100).toFixed(2)
  let ikindiRatio = ((ikindiCompleted/(totalMaleDay))*100).toFixed(2)
  let aksamRatio = ((aksamCompleted/(totalMaleDay))*100).toFixed(2)
  let yatsiRatio = ((yatsiComplated/(totalMaleDay))*100).toFixed(2)
  
  






  
  const sabahPozitifPress = () => {
    if(sabahCompleted < totalMaleDay){
      setCompleted(completed + 1)  
      setSabahCompleted(sabahCompleted + 1)  
    };}
   const sabahNegatifPress = () => {
    if (sabahCompleted > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setSabahCompleted(sabahCompleted - 1)
    };}
  const OglePozitifPress = () => {
    if(ogleCompleted < totalMaleDay){
      setCompleted(completed + 1)  
      setOgleCompleted(ogleCompleted + 1)} ;
  }
 const OgleNegatifPress = () => {
      if (ogleCompleted > 0 && ratio > 0) {
        setCompleted(completed - 1)
        setOgleCompleted(ogleCompleted - 1)
      } }
  const IkindiPozitifPress = () => {
    if(ikindiCompleted < totalMaleDay){
      setCompleted(completed + 1)  
      setIkindiCompleted(ikindiCompleted + 1)} ;
  }
  const IkindiNegatifPress = () => {
    if (ikindiCompleted > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setIkindiCompleted(ikindiCompleted - 1)
    } }

  const AkşamPozitifPress = () => {
    if(aksamCompleted < totalMaleDay){
      setCompleted(completed + 1)  
      setAksamCompleted(aksamCompleted + 1)} ;
  }
  const AkşamNegatifPress = () => {
    if (aksamCompleted > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setAksamCompleted(aksamCompleted - 1)
    } }
      
  const YatsiPozitifPress = () => {
    if(yatsiComplated < totalMaleDay){
      setCompleted(completed + 1)  
      setYatsiCompleted(yatsiComplated + 1)
      
    } ;
  }
  const YatsiNegatifPress = () => {
    if (yatsiComplated > 0 && ratio > 0) {
      setCompleted(completed - 1)
      setYatsiCompleted(yatsiComplated - 1)
    } }
  return (
    <View  style={styles.container}>
      <LinearGradient
        colors={['rgb(19, 64, 116)', 'transparent']}
        style={styles.background}
      />
      
      <Text style={styles.title}>{i18n.t('total')}</Text>
    <View style={{marginTop: 10}}>
    
          <View style={styles.ratio}>
          <Text style={styles.ratiotext}>%{ratio}</Text>
          <Text style={{textAlign:'center'}}>{completed}/{totalMaleDay * 5} </Text>
          </View>
    </View> 
      
    <View style={styles.time}>
      
      
       <VakitStyle timeName={i18n.t('sabah')}  ratio={sabahRatio} completed={sabahCompleted} day={totalMaleDay} handlePozitifPress={sabahPozitifPress} handleNegatifPress={sabahNegatifPress}/>
       <VakitStyle timeName={i18n.t('ogle')}   ratio={ogleRatio}  completed={ogleCompleted}  day={totalMaleDay} handlePozitifPress={OglePozitifPress} handleNegatifPress={OgleNegatifPress} />
       <VakitStyle timeName={i18n.t('ikindi')} ratio={ikindiRatio}completed={ikindiCompleted}day={totalMaleDay} handlePozitifPress={IkindiPozitifPress} handleNegatifPress={IkindiNegatifPress}/>
       <VakitStyle timeName={i18n.t('aksam')}  ratio={aksamRatio} completed={aksamCompleted} day={totalMaleDay} handlePozitifPress={AkşamPozitifPress} handleNegatifPress={AkşamNegatifPress}/>
       <VakitStyle timeName={i18n.t('yatsi')}  ratio={yatsiRatio} completed={yatsiComplated} day={totalMaleDay} handlePozitifPress={YatsiPozitifPress} handleNegatifPress={YatsiNegatifPress}/>
       
       </View >



      
    </View>
  )
}

export default MaleDetail

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
})