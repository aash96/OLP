// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, FlatList, Text, View } from 'react-native';
// import React , { useState ,useEffect } from 'react';
// import Department from './Department';

// export default function App() {
//   /* const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
  
//   useEffect(() => {
//     getMovies();
//   }, []); */
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/olp/departments/')
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <View style={styles.container}>
//       <Department datafromapp={data} /> 
//       <Text>HII</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
{/* <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/splash.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View> */}
import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from "react-native";
import {VStack,Stack,Input,Button,MaterialIcons,NativeBaseProvider, Box, Center} from 'native-base'

export default function App() {
  const [user_id, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState('false');
  const handleClick = () => setShow(!show);
  var user_idin, passwordin;
  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ user_id , password })
  //   };
  //   fetch('http://127.0.0.1:8000/olp/students/', requestOptions)
  //     .then(response => response.json())
  //     .then(valid => setValid(valid.isvalid));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  const login = async () => {
    //const postb = '{ student_id: ' + user_id + ', password: ' + password + '}'
    const postb = { user_id, password}
    console.log(postb)
    try {
      const response = await fetch('http://127.0.0.1:8000/olp/students/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postb)
      })
      console.log(response)
      const json = await response.json();
      console.log(json)
    }
    catch (error)
    {console.log(error)}
  }
  return (
    <NativeBaseProvider>
      <Box alignSelf="center" w="100%" mt={10}>
        <VStack space="5" alignItems="center">
          <Input defaultValue={user_idin} variant="rounded" type="text" h="10" w="75%" maxW="300px" py="0" placeholder="UserID" onChangeText={user_idin => setUserid(user_idin)}/>
          <Input value={passwordin} variant="rounded" type={show ? "text" : "password"} h="10" w="75%" maxW="300px" py="0" InputRightElement={<Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>} placeholder="Password" onChangeText={passwordin => setPassword(passwordin)} />
          <Button  colorScheme="green" h="10" w="75%" maxW="300px" onPress={login}>Login</Button>
          <Button colorScheme="blue" h="10" w="75%" maxW="300px">SignUp</Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});