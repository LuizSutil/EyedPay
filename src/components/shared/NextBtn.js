import React from 'react'
import {View, Text,  StyleSheet, TouchableOpacity} from 'react-native'

export const NextBtn = ({onClick}) => {

    const styles = StyleSheet.create({
        view:{
            display:'flex',

        },
        btn:{
            width:120, 
            height:60, 
            backgroundColor:'black',
            borderWidth:1,
            borderRadius:20,
            display:'flex',
            justifyContent:'center',
        },
        text:{
            fontSize:23, 
            color:'#9F5F0A',
            textAlign:'center',
        }
    })
    return (
        <View style={styles.view}>
            <TouchableOpacity onClick={onClick} style={styles.btn}>
                <Text style={styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NextBtn