import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HelpSupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Help & Support</Text>
    </View>
  )
}

export default HelpSupportScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})