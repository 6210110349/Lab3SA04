import React from "react";
import { Text,StyleSheet,ImageBackground,View } from "react-native";
import { useState,useEffect } from "react";
import Forecast from "./Forcast";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
            if (props.zipCode) {
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=a8367b27fb8a3aeaac60724d023d590a
                `)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp});
                    })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])
    
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                
                    <Text >Zip Code</Text>
                    <Text>{props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        
        flexDirection : 'column',
        alignItems : 'center',
        
        width: '100%',
        height: '100%'
    },

   // backdrop2 : {
    //    height : '40%',
    //    backgroundColor : '#000',
    //    fontSize : 10,
        
        

   // },
    
});
   
   