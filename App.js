import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet,View,Text } from "react-native";
import Cart from './Cart'
class App extends Component {
 
    render(){
        return(
            <View style={styles.container}>
                <Text>counter</Text>
                <StatusBar style="auto"/>
                <Cart/>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default App;