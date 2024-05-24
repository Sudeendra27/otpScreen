import React, { FC, useState, useEffect } from 'react';
import { View, Text,  Alert } from 'react-native';

interface Props {
  time: number;
}

interface State {
  seconds: number;
  timerFinished: boolean;
}

const Timer: FC<Props> = ({ time }) => {
  const [state, setState] = useState<State>({
    seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
    timerFinished: false,
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      if (state.seconds === 0) {
        setState((prevState) => ({
          ...prevState,
          timerFinished: true,
        }));
        return;
      }
      setState((prevState) => ({
        ...prevState,
        seconds: prevState.seconds - 1,
      }));
    }, 1000);
    return () => clearTimeout(timer);
  }, [state.seconds]);

  const handleTextClick = () => {
    
    if (state.timerFinished) {
      handleButtonClick()
      setState({
        seconds: time - Math.floor((time - 1) / 60) * 60 - 1,
        timerFinished: false,
        
      });
    }
  };

  const handleButtonClick = () => {
    Alert.alert("Otp sent");
  };

  return (
    <View>
      {state.timerFinished ? (
        <Text onPress={handleTextClick }>resend</Text>
      ) : (
        <Text>{` Resend in ${state.seconds < 10 ? `0${state.seconds}` : state.seconds} seconds`}</Text>
      )}
    </View>

)
}; 


  
  
  
export default Timer;
