import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import arrow from '../../assets/arrow.png'
import NextBtn from '../shared/NextBtn'
import { CreditCardInput} from "react-native-credit-card-input";


export const RegPay = () => {

    const styles = StyleSheet.create({
        container: {
            display:'flex',
            //justifyContent:'center'
            alignItems: 'center', 
        },
        text: {
            color: '#A86916',
            fontSize: 50,
        },
        headingText:{
            fontSize:23,
            color: '#A86916',
            marginBottom:20
        },
        input: {
            height: 50,
            margin: 12,
            width: 300,
            borderBottomWidth:1,
            fontSize: 25,
            marginBottom:20
        },
        input2: {
            height: 50,
            margin: 12,
            width: 122,
            borderBottomWidth:1,
            fontSize: 25,
            marginBottom:20
        },
    })

    return (
        <View>
                <TouchableOpacity style={{width:80, height:80}}>
                <Image source={arrow} style={{width:80, height:80}}></Image>
                </TouchableOpacity>

                <View style={styles.container}>
                    <Text style={styles.text} >EyedPay</Text>
                    <Text style={styles.headingText}>Where do we put the tab?</Text>
                    <View style={{marginTop:80}}></View>

                    <View style={{height:300}}>
                    <CreditCardInput 
                    requiresName 
                    onChange={event=> console.log(event)} 
                    inputStyle={{color:'red'}}/>
                    </View>

                    <View style={{marginTop:80}}></View>
                    <NextBtn></NextBtn>
                </View>
                
            
        </View>
    )
}

export default RegPay