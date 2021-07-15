import React from "react"
import { Text,View } from "react-native";
import { StyleSheet } from "react-native";
import { block, color } from "react-native-reanimated";


export default function Forecast(props) {
    return (
        <View >
            <View style = {styles.block1}>
                <Text style = {styles.Layout1}>{props.main}</Text>
                <Text style = {styles.Layout2}>{props.description}</Text>
                <Text style = {styles.Layout3}>{props.temp} °C</Text>
                <Text style = {styles.Layout3}>{props.huminity}</Text>
            </View>
        </View>
     );
}
const styles = StyleSheet.create({
    Layout1 :{
        flex : 2,
        flexDirection:'column',
        textAlign : 'center',
        fontSize : 40,
        color : "rgb(255,2555,255)"
    },
    Layout2 :{
        textAlign : "center",
        flex : 1,
        color : "rgb(255,2555,255)"
    },
    Layout3 :{
        textAlign : "center",
        flex :1,
        fontSize : 20,
        color : "rgb(255,2555,255)"
    },
  
    
    
})


   