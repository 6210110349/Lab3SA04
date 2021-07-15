import React from 'react'
import { FlatList , View , Text ,StyleSheet, TouchableHighlight, ImageBackground} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'


const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather' , {zipCode : code})
    }}>
        <View style = {styles.zipItem}>
            <Text style={styles.text}>{place}</Text>
            <Text style={styles.text}>{code}</Text>
        </View>
    </TouchableHighlight>
    
    )
const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
    
    const navigation = useNavigation()
    return (
    <View >
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop} >
            <View>
            <Text style={styles.zipcode}>ZipCode</Text> 
                <FlatList
                    
                        data={availableZipItems}
                        keyExtractor={_keyExtractor}
                        renderItem={({item}) => <ZipItem {...item} navigation={navigation}/> }
                   
                />
                <StatusBar style="auto" />
            </View>
         </ImageBackground> 
    </View>
    );
}  
const styles = StyleSheet.create({
        zipItem :{
            flex :1,
            flexDirection : "row",
            justifyContent : 'space-evenly',
            alignItems: 'center',
            backgroundColor : 'rgba(240,255,255,0.1)',
            fontSize : 15,
            marginTop: 20,
            marginLeft: 5,
            marginRight: 5,
            borderWidth: 3,

        },
        zipcode :{
            fontSize : 20,
            color : "rgb(255,2555,255)",
            
            backgroundColor : 'rgba(0,255,255,0.5)',
            
        },
      
        backdrop: {
            width: '100%',
            height: '100%'
        },
        text :{
            color : "rgb(255,2555,255)"
        }

    })

