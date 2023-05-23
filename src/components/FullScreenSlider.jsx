import React, { useEffect,useState,useContext } from 'react';
import { ScrollView,View, ImageBackground, Dimensions,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LanguageContext } from '../contexts/LanguageProvider'

const { width } = Dimensions.get('window');

const FullScreenSlider = ({navigation}) => {

  const {i18n} = useContext(LanguageContext);

  

  const handleSubmit = () => {
    navigation.navigate("Form");
  };

  return (
    <ScrollView
    horizontal
    pagingEnabled
    showsHorizontalScrollIndicator={false}
  >
    <View style={styles.view}>
    {/* İlk resim */}
    <ImageBackground
      source={require('../../assets/image1.jpg')} 
      style={{ width, height: '100%' }} // Resmin tam ekran boyutunu ayarlayın
      resizeMode="cover" // Resmin boyutunu koruyarak tam ekran doldurmasını sağlayın
    />
    <Text style={styles.text}>{i18n.t('paragraph1')} </Text>
    <Text style={styles.text2}>{i18n.t('scroll')}</Text>
    <AntDesign style={styles.icon} name="right" size={24} color="rgba(114, 9, 183, 0.7)" />
    </View>
    <View style={styles.view}>
    {/* İkinci resim */}
    <ImageBackground
      source={require('../../assets/image2.jpg')}
      style={{ width, height: '100%' }}
      resizeMode="cover"
    />
    <Text style={styles.text3}>{i18n.t('paragraph2')}</Text>
    <Text style={styles.text2}>{i18n.t('scroll')}</Text>
    <AntDesign style={styles.icon} name="right" size={24} color="rgba(114, 9, 183, 0.7)" />
    </View>
    <View style={styles.view}>
    <ImageBackground
      source={require('../../assets/image3.jpg')}
      style={{ width, height: '100%' }}
      resizeMode="cover"
    />
    <Text style={styles.text}>{i18n.t('paragraph3')}</Text>
    <TouchableOpacity onPress={handleSubmit} style={styles.buton} >
     <Text style={styles.butontext}>{i18n.t('startcalculation')}</Text>
     </TouchableOpacity>
    </View>

  </ScrollView>
  )
}
const styles = StyleSheet.create({
     view:{
        flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
    },
    text: {
        position: 'absolute',
        zIndex: 1,
        fontSize:20,
        fontWeight:'600',
        color: 'rgba(184, 208, 235, 1)',
        textAlign:'center',
        backgroundColor:'rgba(114, 9, 183, 0.7)',
        borderWidth: 1,
        borderColor: 'rgba(184, 208, 235, 0.8)',
        borderRadius: 10,
        overflow:'hidden',
        width:'100%',
        
        
    },
    text3: {
      position: 'absolute',
      zIndex: 1,
      fontSize:20,
      fontWeight:'600',
      color: 'rgba(184, 208, 235, 1)',
      textAlign:'center',
      backgroundColor:'rgba(151, 58, 168, 0.8)',
      borderWidth: 1,
      borderColor: 'rgba(184, 208, 235, 0.8)',
      borderRadius: 10,
      overflow:'hidden',
      width:'100%',
      
      
  },
    text2:{
         position: 'absolute',
         zIndex: 1,
         fontSize:16,
         color: 'rgba(114, 9, 183, 0.7)', 
         bottom: 0,
         left: 0,
         right: 0,
         textAlign:'center',
         height:60,
         paddingTop:16,
         backgroundColor:'rgba(184, 208, 235, 1)', 
    },
    buton:{
        position: 'absolute',
        zIndex: 1,
        bottom: 30,
        alignSelf: 'center',    
    },
    butontext:{
        textAlign:'center',
        height: 50,
        width: 250,
        backgroundColor: '#ccff33',
        borderRadius: 10,
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 10,
        overflow: 'hidden',
    },
    icon:{
      position: 'absolute',
      zIndex: 1,
      right:30,
      bottom:20,
    },   
  });

export default FullScreenSlider