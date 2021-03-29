import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import arrow from '../../assets/arrow.png'
import NextBtn from '../shared/NextBtn'

export const RegBasic = () => {

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
    })

    return (
        <View>
                <TouchableOpacity style={{width:80, height:80}}>
                <Image source={arrow} style={{width:80, height:80}}></Image>
                </TouchableOpacity>

                <View style={styles.container}>
                    <Text style={styles.text} >EyedPay</Text>
                    <Text style={styles.headingText}>Please tell us a bit about yourself!</Text>
                    <TextInput style={styles.input} placeholder='First Name'></TextInput>
                    <TextInput style={styles.input} placeholder='Last Name'></TextInput>
                    <TextInput style={styles.input} placeholder='Date of Birth'></TextInput>
                    <TextInput style={styles.input} placeholder='Email'></TextInput>
                    <TextInput style={styles.input} placeholder='Password'></TextInput>
                    <TextInput style={styles.input} placeholder='Confirm Password'></TextInput>
                    <View style={{marginTop:20}}></View>
                    <NextBtn></NextBtn>
                </View>
                
            
        </View>
    )
}

export default RegBasic