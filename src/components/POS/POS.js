import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import SliderFun from '../shared/SliderFun'

export const POS = () => {

    const [amount, setAmount] = React.useState("50");

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
        sliderText:{
            fontSize: 20,
            fontWeight:'bold',
        },
        sliderContainer: {
            marginBottom:10,
        },
        sliderBox:{
            display:'flex',
            alignItems: 'center',
            marginBottom:60
        },
        valueBox:{
            display:'flex',
            flexDirection: 'row',
            borderBottomWidth:1,
           
        },
        textAligner:{
            textAlignVertical:'center',
            fontSize:40
        },
        descriptor:{
            fontSize:18,
            fontWeight:'bold',
            marginBottom:60
        },
        chargeBtn:{
            display:'flex',
            borderWidth:1,
            width:140,
            height:80,
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
            marginTop:100,
            marginBottom:50
        }
        
    })

    return (
        <View style={styles.container}>

            <Text style={styles.eyedPay} >EyedPay</Text>
            <Text style={styles.descriptor}>Select Amount to Charge</Text>
            <View style={styles.sliderBox}>
                <SliderFun hook={setAmount} initial={50}></SliderFun>

            </View>
            <View style={styles.valueBox}>
                    <Text style={styles.textAligner}>$</Text>
                    <TextInput style={{fontSize:40}} maxLength={6} onChangeText={setAmount}>{amount}</TextInput>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.chargeBtn}>
                        <Text style={styles.textCharge}>Charge Amount</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.discardBtn} >
                    <Text style={{fontSize:20, color:'#A86916'}}>Discard</Text>
            </TouchableOpacity>
        </View>
    )
}

export default POS
