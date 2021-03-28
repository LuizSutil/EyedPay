import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const RegBtn = () => {

    const styles = StyleSheet.create({
        button: {
            borderRadius:8,
            borderColor:'white',
            backgroundColor: 'white',
            width:255,
            height:50,
            borderWidth: 1,
            display:'flex', 
            alignItems: 'center',
            justifyContent:'center',
            
        },
        buttonText:{
            color:'#A86916',
            fontSize:23,
        }
    })

    return (
        <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>+Register</Text>
                </View>
        </TouchableOpacity>
    )
}

export default RegBtn