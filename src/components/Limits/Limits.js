import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import SliderFun from '../shared/SliderFun'

export const Limits = () => {

    const [face, onStateFace] = React.useState("50");
    const [key, onStateKey] = React.useState("300");
    const [pin, onStatePin] = React.useState("1000");

    const styles = StyleSheet.create({
        container: {
            flex:1,
            //justifyContent:'center'
            alignItems: 'center',
            marginTop: 100 
        },
        text: {
            color: '#A86916',
            fontSize: 30,
            marginBottom:100
        
        },
        sliderText:{
            color:'#9F5F0A',
            fontSize: 18,
            fontWeight:'bold'
        },
        sliderContainer: {
            marginBottom:10,
        },
        sliderBox:{
            display:'flex',
            alignItems: 'center',
            marginBottom:60
        },
        faceText: {
            color: 'black'
        },
        btnsContainer:{
            display:'flex',
            flexDirection:'row',
            marginTop:60
        },
        saveBtn:{
           
            display:'flex',
            marginRight:40,
            borderWidth:2,
            width:100,
            height:35,
            borderRadius:10,
            backgroundColor:'black',
            
        },
        textSave:{
            textAlign:'center',
            color:'#D47F10',
            fontSize:22,
            marginBottom:5
        },
        discardbtn:{
            display:'flex',
            borderWidth:1,
            width:100,
            height:35,
            borderRadius:10,
            justifyContent:'center'

        },
        textDiscard:{
            textAlign:'center',
            fontSize:18,

        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Set Payment Limits</Text>

            <View style={styles.sliderBox}>
                <Text style={styles.sliderText}>Facial Recognition</Text>
                <SliderFun hook={onStateFace} initial={50}></SliderFun>
                <Text defaultValue={face} style={styles.faceText}>$ {face}</Text>
            </View>
            
            <View style={styles.sliderBox}>
                <Text style={styles.sliderText}>Secret Key</Text>
                <SliderFun hook={onStateKey} initial={300}></SliderFun>
                <Text style={styles.faceText}>$ {key}</Text>
            </View>

            <View style={styles.sliderBox}>
                <Text style={styles.sliderText}>Phone Pin</Text>
                <SliderFun hook={onStatePin} initial={1000}></SliderFun>
                <Text style={styles.faceText}>$ {pin}</Text>
            </View>

            <View style={styles.btnsContainer}>
                <TouchableOpacity style={styles.saveBtn}>
                    <Text style={styles.textSave}>save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.discardbtn}> 
                    <Text style={styles.textDiscard}>Discard</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Limits