import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import arrow from '../../assets/arrow.png'
import NextBtn from '../shared/NextBtn'

export const RegLocation = () => {

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
                    <Text style={styles.headingText}>Whereabouts are you from?</Text>
                    <TextInput style={styles.input} placeholder='ZIP/CEP'></TextInput>
                    <TextInput style={styles.input} placeholder='Country/State'></TextInput>
                    <TextInput style={styles.input} placeholder='City'></TextInput>
                    <TextInput style={styles.input} placeholder='Address'></TextInput>
                    <View style={{display:'flex', flexDirection:'row'}}>
                    <TextInput style={styles.input2} placeholder='Number'></TextInput>
                    <View style={{marginRight:28}}/>
                    <TextInput style={styles.input2} placeholder='Additional'></TextInput>
                    </View>
                    <TextInput style={styles.input} placeholder='Phone Number'></TextInput>
                    <View style={{marginTop:20}}></View>
                    <NextBtn></NextBtn>
                </View>
                
            
        </View>
    )
}

export default RegLocation