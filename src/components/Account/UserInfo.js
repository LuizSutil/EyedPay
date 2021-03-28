import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export const UserInfo = ({info, data}) => {

    const styles = StyleSheet.create({

        userInfoBox:{
            display: 'flex',
            flexDirection: 'row',
            marginBottom:8
        },
        TextA:{
            fontSize:20,
            marginRight:8,
            color: '#9F5F0A',
            fontWeight: 'bold'
        },
        TextB:{
            fontSize:20
        }
    })


    return (
        <View style={styles.userInfoBox}> 
            <Text style={styles.TextA}>{info}:</Text>
            <Text style={styles.TextB}>{data}</Text>
        </View>
    )
}

export default UserInfo
