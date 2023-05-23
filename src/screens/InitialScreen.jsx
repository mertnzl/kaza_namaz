import { View, Text ,Button,StyleSheet} from 'react-native'
import React from 'react'
import FullScreenSlider from '../components/FullScreenSlider'

const InitialScreen = ({navigation}) => {
    
  return (
    <View style={styles.container}>
      {/* Tam ekran kaydırıcıyı kullanın */}
      <FullScreenSlider navigation={navigation}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default InitialScreen



















// const handleSubmit = () => {
    
//   navigation.navigate('Calculator')
// }
// <Button
// title="Hesapla"
// onPress={handleSubmit}

// />