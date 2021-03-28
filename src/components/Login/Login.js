import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import LoginBtn from './LoginBtn2'
import BackBtn from '../shared/BackBtn'

export const Login = () => {

    const styles = StyleSheet.create({
        container: {
            flex:1,
            //justifyContent:'center'
            alignItems: 'center',
            marginTop: 100 
        },
        text: {
            color: '#A86916',
            fontSize: 50,
            marginBottom:140
        },
        input: {
            height: 50,
            margin: 12,
            width: 300,
            borderBottomWidth:1,
            fontSize: 25
          },
    })

    const [text, onChangeText] = React.useState("");
    const [password, onChangePwd] = React.useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.text} >EyedPay</Text>

            <View style={{marginBottom: 55}}>

                <View style={{marginBottom:20}}>
                    <TextInput 
                    style={styles.input}
                    value={text}
                    placeholder='Email'
                    onChangeText={onChangeText}
                    ></TextInput>
                </View>

                <TextInput 
                style={styles.input}
                secureTextEntry={true}
                value={password} 
                onChangeText={onChangePwd}
                textContentType='newPassword'
                placeholder='Password'
                ></TextInput>

            </View> 

            <View style={{marginBottom:30}}>
                <LoginBtn></LoginBtn>
            </View>
            <BackBtn></BackBtn>

        </View>
    )
}

export default Login