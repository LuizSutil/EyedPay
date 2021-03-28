import React from "react";
import Slider from "@brlja/react-native-slider";
import { StyleSheet, View, Text, Image } from "react-native"
import eye from '../../assets/eyedPay.png'

export const SliderFun = ({hook, initial}) => {

    


    const styles = StyleSheet.create({
        container: {
        display: 'flex',
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center",
        width:250,
        },
        thumb: {
            borderColor: '#A86916',
            
        }
    });

    return (
        <View style={styles.container}>
            <Slider
            value={initial}
            onValueChange={(event)=> hook(event)}
            minimumValue={10}
            maximumValue={1000}
            step={1}
            thumbStyle={styles.thumb}
            ></Slider>
        </View>
    )
}

export default SliderFun