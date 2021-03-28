import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const backBtn = () => {

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
            fontSize:20,
        }
    })

    return (
        <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Go back</Text>
                </View>
        </TouchableOpacity>
    )
}

export default backBtn