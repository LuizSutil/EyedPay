import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import eye from '../../assets/eyedPay.png'
import LoginBtn from '../shared/LoginBtn'
import RegBtn from '../shared/registerBtn'

export const IntroPg = () => {

    const styles = StyleSheet.create({
        container: {
            flex:1,
            //justifyContent:'center'
            alignItems: 'center',
            marginTop: 190 
        },
        text: {
            color: '#A86916',
            fontSize: 50,
            marginBottom:240
        },
        logo: {
            width: 70,
            height: 50
        }
    })
    
    return (
        <View style={styles.container}>
            
            <Image source={eye} style={styles.logo}></Image>
            <Text style={styles.text}>EyedPay</Text>
            <LoginBtn></LoginBtn>
            <View style={{marginTop:40}}>
                <RegBtn></RegBtn>
            </View>
            
        </View>
    )
}


export default IntroPg