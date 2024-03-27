import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const App = () =>{
    const[num1,setNum1] = useState('');
    const[num2, setNum2] = useState('');
    const[randomNum, setRandomNum] =useState<number>();

    const generateRandomNum = () =>{
        const min = Math.min(num1, num2);
        const max = Math.max(num1, num2);
        const randomNum = Math.floor(Math.random()* (max - min + 1) +min);
        setRandomNum(randomNum);
    };

    return(
        <View>
            <TextInput
            placeholder = "Digite o primeiro número"
            keyboardType="numeric"
            onChangeText ={text => setNum1(text)}
            />

            <TextInput
            placeholder = "Digite o primeiro número"
            keyboardType="numeric"
            onChangeText = {text => setNum2(text)}
            />
            <Button title =" Gerar número aleatório" onPress= {generateRandomNum}/>
            {randomNum !== null && <Text>Número aleatório:{randomNum}</Text>}
        </View>
    );

};

export default App;