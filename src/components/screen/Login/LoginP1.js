import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword}from "firebase/auth";
import {initializeApp}from "firebase/app";
import FirebaseConfig from '../../../FirebaseConfig';
import { useNavigation } from "@react-navigation/native";
import Formnuevouser from './Formnuevouser';
const LoginP1 = () => {/*
  const app = initializeApp(FirabaseConfig);
  const auth = getAuth(app);

  const[user, setUser]= React.useState();
  const [password, setPassword]= React.useState();


  const crearcuenta= ()=>{
    createUserWithEmailAndPassword(auth, user, password)
    .then({userCredentials
    
    
    
    })*/


    const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  const [user, onChangeUser]=React.useState('')
  const [Password, onChangePass]=React.useState('')
  const [verpassword, SetVerPassword]=React.useState(true)

  const crearcuenta = ()=>{
    createUserWithEmailAndPassword(auth,user,Password)
    .then((UserCredential)=>{console.log('cuenta creada')
      Alert.alert('Cuenta creada')
      const user = UserCredential.user
      console.log(user)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  const login =()=>{
    signInWithEmailAndPassword()
    .then((UserCredential)=>{console.log('cuenta creada')
      Alert.alert('Cuenta creada')
      const user = UserCredential.user
      console.log(user)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  
  const IngreserUsuario = ()=>{
    if(user == ''){
      Alert.alert('El campo de usuario no debe de estar vacio')
    }if(Password == ''){
      Alert.alert('El campo password no debe de estar vacio')
    }/*else{
      Alert.alert(user,Password)
    }*/
  }

  const funverpassword = ()=>{
    SetVerPassword(!verpassword)

    /*if(verpassword == true){
      SetVerPassword(false)
    }else{
      SetVerPassword(true)
    }*/
  }


  return (
    <PaperProvider>
      <View style={styles.contenedorpricipal}>
      <Text style={{textAlign:'center'}} variant="displayLarge">Hola</Text>
      <Text style={{textAlign:'center'}} variant="headlineLarge">Inisiar sesion</Text>

      <View style={styles.contendorinput}>
      <TextInput
      label="Usuario"
      onChangeText={onChangeUser}
      keyboardType="text"
      value={{user}}
      
    />
      <TextInput
      style={{marginTop:10}}
      label="Password"
      onChangeText={onChangePass}
      secureTextEntry = {verpassword}
      keyboardType="numeric"
      value={{Password}}
      right={<TextInput.Icon icon='eye' onPress={funverpassword} />}
    />
 <Button theme={{ colors: { primary: '#C469D8' } }} style={{marginTop:20}} icon="login" mode="contained" onPress={loggin}>
        Ingresar
        </Button>
      <Button theme={{ colors: { primary: '#C469D8' } }} style={{marginTop:20}} icon="login" mode="contained" onPress={crearcuenta}>
       crearcuenta
        </Button>
        
        
        <Formnuevouser
        user={user}
        saludar={Saludaruser}
        persona={persona}
        />
      </View>
    </View>
    </PaperProvider>
  )
}

  
export default LoginP1

const styles = StyleSheet.create({
  contenedorpricipal: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#CDCDCD",
  },
  contendorinput:{
    padding:15
  }
})
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*(
    
    
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>HOLA</Text>
      <Text style={styles.titulo2} >Iniciar seción</Text>
      <View style={styles.contenedorinput}>
      <TextInput
      onChangeText={setUser}
        style={styles.input}
        placeholder="USUARIO"
        keyboardType="text"
      />

<TextInput
onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
        placeholder="PASSWORD"
        keyboardType="text"
      />

      <View style={{alignItems:'center'}}>
<TouchableOpacity 
style={styles.button} 
onPress={()=> Alert.alert('Procesando')}>
        <Text style={{color:'white',textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
style={styles.button} 
onPress={()=> Alert.alert('Procesando')}>
        <Text style={{color:'white',textAlign:'center'}}>Login</Text>
      </TouchableOpacity>
</View>

      </View>
    </View>
  )
}

export default LoginP1

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#CDCDCD'
    }, 
    titulo:{
        textAlign:'center',
        fontSize:53,
        color:'black',
        fontWeight:'bold'
    },
    titulo2:{
        textAlign:'center',
        fontSize:20
    },
    contenedorinput:{
        padding:15,
        
    },
    input:{
        margin:10,
        backgroundColor:'white',
        padding:10,
        borderRadius:10
    },
    button:{
        width:250,
        padding:10,
        marginTop:25,
        backgroundColor:'#C469D8',
        borderRadius:15,
       
    },

    

});
*/