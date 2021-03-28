import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const LoginBtn = () => {

    const styles = StyleSheet.create({
        button: {
            borderRadius:8,
            borderColor:'#A86916',
            backgroundColor: 'black',
            width:255,
            height:50,
            borderWidth: 1,
            display:'flex',
            alignItems: 'center',
            justifyContent:'center',
            
        },
        buttonText:{
            color:'#DF8712',
            fontSize:23,
        }
    })

    return (
        <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </View>
        </TouchableOpacity>
    )
}

export default LoginBtn