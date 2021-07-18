import React from "react";
import { Text,StyleSheet,ImageBackground,View } from "react-native";
import { useState,useEffect } from "react";
import Forecast from "./Forcast";


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        humidity : 0,
        temp: 0,
        pressure : 0,
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
                        humidity : json.main.humidity,
                        pressure : json.main.pressure,
                        temp: json.main.temp});
                    })
                .catch((error) => {
                    console.warn(error);
                });
            }
        }, [props.zipCode])
    
    return (
        <View>
            <ImageBackground source={require('../sky2.png')} style={styles.backdrop}>
                <View style={styles.backdrop2}>
                    <Text style={styles.zip}>Zip Code is {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
    },

   backdrop2 : {
        
        width : '100%',
        height : '45%',
        backgroundColor : 'rgba(0,0,0,0.3)',

       
        color : 'rgb(255,255,255)',
        alignItems : 'center',
        fontSize : 10,
     
    },
    zip :{
        
        color : "rgb(255,2555,255)"
    },
   

    
});
   
   