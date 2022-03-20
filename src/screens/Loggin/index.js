import React,{useState,useEffect} from "react";
import {Home} from '../../screens'
import {auth} from '../../services';
import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
        } from 'firebase/auth';
import {
        View,
        KeyboardAvoidingView,
        Image,
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet,
        Animated,
        Keyboard
        } from 'react-native';

export const Loggin = ({navigation}) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [offSet] = useState(new Animated.ValueXY({x:0,y:90}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x:160, y:130}));

    useEffect(()=>{
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',keyboardDidHide);




        Animated.parallel([
            Animated.spring(offSet.y,{
                toValue:0,
                speed:4,
                bounciness:20,
            }),
        Animated.timing(opacity,{
            toValue:1,
            duration:200,
        })
        ]).start()
    },[]);

    function keyboardDidShow(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue:95,
                duration:100,
            }),
            Animated.timing(logo.y, {
                toValue:75,
                duration:100,
            })
        ]).start()
    }

    function keyboardDidHide(){
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue:160,
                duration:100,
            }),
            Animated.timing(logo.y, {
                toValue:130,
                duration:100,
            })
        ]).start()
    }

    async function createUser(){
        await createUserWithEmailAndPassword(auth,email,password)
        .then(value => {
            alert('cadastrado com sucesso!\n' /*+ value.user.uid*/);
        })
        .catch(error => console.error(error))
    };

    async function login(){
        await signInWithEmailAndPassword(auth,email,password)
        .then(value => {
            alert('Login realizado com sucesso');
            navigation.navigate('Home');
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
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerLogo}>
                <Animated.Image
                    source={require('../../../assets/refugio.png')}
                    style={{
                        width: logo.x,
                        height: logo.y,
                    }}
                />
            </View>

            <Animated.View 
                style={[
                    styles.container,
                    {
                        opacity: opacity,
                        transform: [
                            {

                                translateY: offSet.y
                            }
                        ]
                    }
                    ]}>


                <TextInput 
                    style={styles.input}
                    placeholder="email"
                    autoCorrect={false}
                    onChangeText= {value => setEmail(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="senha"
                    autoCorrect={false}
                    onChangeText= {value => setPassword(value)}
                />

                <TouchableOpacity 
                    style={styles.btnSubmit}
                    onPress={()=>{createUser()}}>

                    <Text style={styles.submitText}>Criar conta</Text>

                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnRegistro}
                    onPress={()=>{login()}}>
                    <Text style={styles.textoRegistro}>Já tem uma conta? Clique aqui!</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    )
}

 const styles = StyleSheet.create({
     background:{
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         backgroundColor:'#191919'
     },
     containerLogo:{
        flex:1,
        justifyContent:'center',
     },
     container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: '90%',
        paddingBottom:50,
     },
     input:{
        backgroundColor: '#fff',
        width:'90%',
        marginBottom:15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
     },
     btnSubmit:{
        backgroundColor: '#35aaff',
        width: '90%',
        height: 45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
     },
     submitText:{
        color:'#fff',
        fontSize: 18,
     },
     btnRegistro:{
        marginTop:10,
     },
     textoRegistro:{
        color: '#fff',
     }
 })