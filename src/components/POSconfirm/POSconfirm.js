import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native'
import face from '../../assets/faceIcon.png'

export const POSconfirm = () => {

    const styles = StyleSheet.create({
        container: {
            flex:1,
            //justifyContent:'center'
            alignItems: 'center',
            marginTop: 30
        },
        eyedPay: {
            color: '#A86916',
            fontSize: 50,
            marginBottom:60
        },
        image:{
            width:180,
            height:180,
            borderRadius:100,
            marginBottom:30
        },
        chargeBtn:{
            display:'flex',
            borderWidth:1,
            width:140,
            height:50,
            borderRadius:10,
            justifyContent:'center',
            backgroundColor:'black',
        },
        textCharge:{
            textAlign:'center',
            color:'#D47F10',
            fontSize:22,
        },
        buttonView:{
            marginTop:50,
            marginBottom:50
        },
        discardBtn: {
            borderRadius:8,
            backgroundColor: 'white',
            width:140,
            height:50,
            display:'flex', 
            alignItems: 'center',
            justifyContent:'center',
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.eyedPay} >EyedPay</Text>
            <Text style={{fontWeight:'bold', fontSize:20, marginBottom:30}}>Charge</Text>
            <Text style={{fontWeight:'bold', fontSize:20, color:'#A86916', marginBottom:30}}>
                Luiz Felipe Sutil Gonçalves
            </Text>
            <Image source={face} style={styles.image}></Image>
            <Text style={{fontWeight:'bold', fontSize:20}}>$ 50</Text>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.chargeBtn}>
                        <Text style={styles.textCharge}>Charge</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.discardBtn} >
                    <Text style={{fontSize:20, color:'#A86916'}}>Discard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default POSconfirm
