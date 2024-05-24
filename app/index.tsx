//correct screen 1 for otp

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  
} from "react-native";
import { router } from "expo-router";
import { useFonts } from "expo-font";
// import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { } from "react-native-reanimated";

const LoginScreen = () => {
  const [roboto] = useFonts({
    'Roboto[wdth,wght]': require('../assets/fonts/Roboto[wdth,wght].ttf'),
  });
  const [latoRegular] = useFonts({
    'Lato-Regular':require('../assets/fonts/Lato-Regular.ttf'),
  });
  const [latoMedium] = useFonts({
    'Lato-Medium':require('../assets/fonts/Lato-Medium.ttf'),
  });
 
  
  const [inputValue, setInputValue] = useState<string>('');
  

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleContinue = () => {
    const savedNumber = inputValue;
    if(savedNumber.length==10){
    console.log("Saved number:", savedNumber);

    // Navigate to Otp screen with the input value as a parameter
    router.push({
      pathname: '/App',
      params: { savedNumber },
    });
  }
  else{
    Alert.alert('Enter a valid number')
  }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView contentContainerStyle={{flexGrow:1,
      

      }}
      keyboardShouldPersistTaps='handled'>

   
    <View style={styles.container}>
      <View style={styles.ellipse}>
        <View  style={{top: 170}}>
          <Image
            style={styles.nurturehealIcon}
            source={require("../assets/images/NUTRTUREHEAL LOGO-14.png")}
          />
        </View>
      </View>
      
        <View style={styles.content}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.loginText}>Login to your Account</Text>
        <View>
        <Text style={styles.inputLabel}>Mobile number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Mail or Mobile Number"
          onChangeText={handleInputChange}
          keyboardType="numeric"
          value={inputValue}
        />
         <Text style={styles.loginviaemailtext}>
        Login via Email
      </Text>
      </View>

        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Send OTP</Text>
        </TouchableOpacity>
        <View style={styles.line}>
        <View style={styles.orTextContainer}>
          <Text style={styles.orText}>or</Text>
        </View>
      </View>

       
        <View style={styles.socialIcons}>
          <TouchableOpacity  style={styles.socialIconCircle}>
            <Image
              
              source={require("../assets/images/apple.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity  style={styles.socialIconCircle}>
            <Image
              
              source={require("../assets/images/fb.png")}
              style={{ width: 40, height: 40 }}

            />
          </TouchableOpacity>
          <TouchableOpacity  style={styles.socialIconCircle}>
            <Image
              
              source={require("../assets/images/google.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity  style={styles.socialIconCircle}>
            <Image
              
              source={require("../assets/images/twitter.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
        Not a member? <Text style={{ color: '#6C63FF' }}>Create Account</Text>
      </Text>
    </View>
    </View>
    </ScrollView>
     </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 23,
    // backgroundColor: "#FFF",
    // alignSelf: "center",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  ellipse: {
    width: 520,
    height: 520,
    // position: "absolute",
    top: -280,
    // left: -80,
    backgroundColor: "#DCF9E5",
    borderRadius: 260,
    shadowColor: "#0000040",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignSelf: 'center'
  },
  nurturehealIcon: {
   
    width: 250, // Increased width
    height: 200, // Increased height
   marginBottom:20,
    position:'absolute',
    alignSelf:'center',
    justifyContent:'center',
    marginTop:180,
    alignItems:'center',
    // width: 159,
    // height: 134,
    left: 150,


  },
  content: {
    top:-240,
    // marginTop: 50,
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontFamily:"Lato-Regular",
    fontSize: 24,
    fontWeight: "700",
    color: "#9C06AF",
    // marginBottom: 10,
  },
  loginText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  inputLabel: {
    fontFamily:'Lato-Medium',
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginTop: 10,
    alignSelf: "flex-start",
  },
  input: {
    fontFamily:"Lato-Regular",
    width: 320,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    
  },
  loginviaemailtext: {
    fontFamily:'Lato-Medium',
    fontSize: 14,
    fontWeight: '500',
    color: '#9C06AF',
    marginTop: -10,
    position: 'relative',
    left: 105,
    marginBottom: 20, 
    alignSelf: 'center' 
  },

  continueButton: {
    width: 320,
    height: 40,
    backgroundColor: "#8464C2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 10,
  },
  continueButtonText: {
    fontFamily:"Lato-Regular",
    color: "#FFF",
    fontWeight: "bold",
  },
  line: {
    width: '80%',
    height: 0,
    borderTopWidth: 2,
    borderTopColor: '#BABABA66',
    marginBottom: 20,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10,
  },

  orTextContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 2,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    width: 30,
    height: 24,
    marginTop:10,
    marginLeft:2,
    
  },

  orText: {
    width: 20,
    height: 100,
    opacity: 0.5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    // justifyContent:'center',
    top: 40
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20

  },
  socialIconCircle: {
    width: 40,
    height: 40,
    marginLeft: 20
  },
  socialButton: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
  footerText: {
    fontFamily:"Lato-Regular",
    fontSize: 14,
    fontWeight: '400',
  },
});

export default LoginScreen;
