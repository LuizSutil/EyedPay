import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import faceIcon from '../../assets/faceIcon.png'
import UserInfo from './UserInfo'
import arrow from '../../assets/arrow.png'

export const Account = () => {


    const styles = StyleSheet.create({
        container: {
            display:'flex',
            //justifyContent:'center'
            alignItems: 'center',
            marginTop: 10 
        },
        userPicture: {
            width: 182,
            height: 182,
            borderColor:'#9F5F0A',
            borderWidth:2,
            borderRadius: 90
        },
        userInfoBox:{
            display: 'flex',
            flexDirection: 'row',
        }
    })

    return (
        <View>
        <View>
            <TouchableOpacity style={{width:80, height:80}}>
            <Image source={arrow} style={{width:80, height:80}}></Image>
            </TouchableOpacity>
        </View>
        
        <View style={styles.container}>
            <Image style={styles.userPicture} source={faceIcon}></Image>
            <Text style={{marginTop:20, fontSize:23, color:'#9F5F0A'}}>
                Account Details
            </Text>

            <View style={{marginTop:50}}>
                <UserInfo info='Name' data='Luiz Felipe Sutil Gonçalves'></UserInfo>
                <UserInfo info='Date of Birth' data='17/09/1999'></UserInfo>
                <UserInfo info='Card Number' data='**** **** **** 4269'></UserInfo>
                <UserInfo info='Telephone' data='+55 (48) 98809-7616'></UserInfo>
                <UserInfo info='Email' data='lufesg@gmail.com'></UserInfo>

            </View>
        </View>
        </View>
    )
}

export default Account