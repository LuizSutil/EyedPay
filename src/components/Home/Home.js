import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'


export const Home = () => {

    const styles = StyleSheet.create({
        container: {
            flex:1,
            //justifyContent:'center'
            alignItems: 'center',
            marginTop: 60,
        },
        eyedPay: {
            color: '#A86916',
            fontSize: 50,
            marginBottom:5
        },

        text: {
            color: 'black',
            fontSize: 23,
        },

        button: {
            borderRadius:8,
            borderColor:'black',
            backgroundColor: 'white',
            width:100,
            height:100,
            borderWidth: 1,
            display:'flex', 
            alignItems: 'center',
            justifyContent:'center',
            marginBottom:25
            
        },
        buttonText:{
            color:'#A86916',
            fontSize:20,
        },

        menu: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },

        logoutBtn: {
            borderRadius:8,
            borderColor:'white',
            backgroundColor: 'white',
            width:115,
            height:115,
            display:'flex', 
            alignItems: 'center',
            justifyContent:'center',
        }
    })

    return (
        <View style={styles.container}>

            
            <Text style={styles.eyedPay} >EyedPay</Text>
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.text}>User</Text>
            <View style={{marginBottom: 40}}></View>

            <View style={styles.menu}>  

                <View style={{marginRight:30}}>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Security</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Credit </Text>
                        <Text style={styles.buttonText}>Card</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Limits</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>POS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>Purchases</Text>
                    </TouchableOpacity>
                </View>
                
                
            </View>
            <TouchableOpacity style={styles.logoutBtn} >
                    <Text style={{fontSize:20, color:'#A86916'}}>logout</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Home