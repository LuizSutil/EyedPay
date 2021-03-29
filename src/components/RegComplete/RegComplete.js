import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import LoginBtn from '../shared/LoginBtn'


export const RegComplete = () => {

    const styles = StyleSheet.create({
        container: {
            display:'flex',
            //justifyContent:'center'
            alignItems: 'center', 
            marginTop:50
        },
        eyedpay: {
            color: '#A86916',
            fontSize: 50,
        },
        headingText:{
            fontSize:23,
            color: '#A86916',
            marginBottom:20
        },
        text:{
            fontWeight:'bold',
            fontSize:20
        }
    })

    return (
        <View>
                <View style={styles.container}>
                    <Text style={styles.eyedpay} >EyedPay</Text>
                    <Text style={styles.headingText}>Congrats!</Text>
                    <View style={{marginTop:200}}></View>
                    <Text style={styles.text}>You are now an EyedPay user, thank you!</Text>
                    <View style={{marginTop:200}}></View>
                    <LoginBtn></LoginBtn>
                    
                </View>
                
            
        </View>
    )
}

export default RegComplete