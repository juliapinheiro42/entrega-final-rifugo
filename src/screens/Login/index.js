import { async } from "@firebase/util";
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button
} from 'react-native'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { auth } from "../../services/";

export const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


    async function createUser(){
        await createUserWithEmailAndPassword(auth,email,password)
        .then(value => {
            console.log('cadastrado com sucesso!\n' + value.user.uid)
        })
        .catch(error => console.error(error))
    };

    async function login(){
        await signInWithEmailAndPassword(auth,email,password)
        .then(value => {
            console.log(alert('Login realizado com sucesso'))
        })
        .catch(error => console.error(error))
    };

    async function logout(){
        await signOut(auth)
        .then(() => {
            console.log(alert('Loggout realizado com sucesso'))
        })
        .catch(error => console.error(error))
    };

    return(
        <View style={styles.container}>
            <Text>Rifugo App</Text>

            <TextInput 
                placeholder="email"
                value={email}
                onChangeText= {value => setEmail(value)}
                style={styles.input}
            />

            <TextInput 
                placeholder="senha"
                value={password}
                onChangeText= {value => setPassword(value)}
                style={[styles.input,{marginBottom:10}]}
            />

            <Button 
                title="Cadastrar"
                onPress={()=>{createUser()}}
                style={styles.buttom}
            />

            <Button 
                title="Logar"
                onPress={()=>{login()}}
            />

            <Button 
                title="Loggout"
                onPress={()=>{logout()}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input:{
        borderBottomWidth:1,
        borderBottomColor:'#313131',
        marginTop:5,
        width:'80%',
        height:50,
    },
    buttom:{
        marginBottom:10,
    }
})