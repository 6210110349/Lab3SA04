import React from "react";
import { Text,StyleSheet,ImageBackground,View } from "react-native";
import { useState } from "react";
import Forecast from "./Forcast";
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.backdrop2}>
                    <Text >Zip Code</Text>
                    <Text>{props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
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

    backdrop2 : {
        height : '40%',
        backgroundColor : 

    }
});
   
   