import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Timer from "./timer";
import { useLocalSearchParams } from "expo-router";
import { useFonts } from "expo-font";
import BackArrow from "@/assets/svg/backArrow";
import Questions from "@/assets/svg/Questions";
import { router } from "expo-router";


const Otp = () => {
  const [roboto] = useFonts({
    "Roboto[wdth,wght]": require("../assets/fonts/Roboto[wdth,wght].ttf"),
  });
  const [latoRegular] = useFonts({
    "Lato-Regular": require("../assets/fonts/Lato-Regular.ttf"),
  });
  const [latoMedium] = useFonts({
    "Lato-Medium": require("../assets/fonts/Lato-Medium.ttf"),
  });
  const handleBack = () =>{
    router.navigate('/')

  }

  const [otp, setOtp] = useState<string>("");
  const { savedNumber } = useLocalSearchParams();

  if (otp.length == 6) {
    Alert.alert("OTP received");
  }
  const maskNumber = (number: any) => {
    if (number.length < 2) {
      return number; // Return the number as is if it is too short to mask
    }
    const firstDigit = number[0];
    const lastDigit = number[number.length - 1];
    const middle = number.slice(1, -1).replace(/./g, "*");
    return `${firstDigit}${middle}${lastDigit}`;
  };
  const maskedNum = maskNumber(savedNumber);
  console.log("OTP", otp);
  console.log("Saved number from LoginScreen:", savedNumber);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
       
          <BackArrow onPress={handleBack}/>
          <View>
          <Text style={styles.almostThereText}>
            Almost there
          </Text>
          
          <Text
            style={{
              fontFamily: "Lato-Regular",
              alignSelf: "center",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            Please enter OTP sent on {maskedNum}
          </Text>
          </View>
          <Questions/>
       
      </View>
      <View style={styles.lowerContainer}>
        <OTPTextView
          // style={styles.otp}
          inputCount={6}
          keyboardType="number-pad"
          handleTextChange={setOtp}
          textInputStyle={{
            width: 36,
            height: 36,

            marginLeft: 10,
            borderRadius: 4,
            borderBottomWidth: 1,
            borderStyle: "solid",
            borderColor: "#00000033",
            backgroundColor: "#ECECEC",
            borderTopLeftRadius: 4,
            borderWidth: 0.5,
            borderTopWidth: 0.5,
          }}
        />
        <View style={styles.time}>
          <Text style={styles.lowerText}>Haven't received OTP?</Text>
          <Timer time={30} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#DCF9E5"

    alignItems: "center",
  },

  upperContainer: {
    // flex:1,
    flexDirection: "row",
    backgroundColor: "#DCF9E5",
    justifyContent: "space-between",
    alignItems:'center',
    width: "100%",
    height: 120,
    // paddingTop: "10%",
    // padding: 10,
    paddingHorizontal:20,
  },
  almostThereText: {
    
    fontFamily: "Lato-Regular",
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
    color: "blue",
    fontSize: 24,
    paddingTop:20
    // justifyContent: "center",
  },
  lowerContainer: {
    flex: 1,
    borderColor: "black",
    borderStyle: "solid",
    // borderRadius: 32,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    // marginTop: 50,
    padding: 50,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#FDFFFE",

    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  time: {
    justifyContent: "flex-start",
    alignItems: "center",
    color: "dodgerblue",
    flexDirection: "row",
  },
  lowerText: {
    fontFamily: "Lato-Regular",
    fontWeight: "300",
    fontSize: 16,
  },
  otp: {
    width: 36,
    height: 36,
    gap: 0,
    borderTopLeftRadius: 4,

    borderTopWidth: 0.5,
    opacity: 0,
    backgroundColor: "#ECECEC",
  },
});

export default Otp;
