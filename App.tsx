import React, { useState } from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import darkstyles from './styles/darkModeStyles';
import UpperSide from './components/UpperSide';
import LowerSide from './components/LowerSide';
import lightstyles from './styles/lightModeStyles';

const MAX_DIGITS = 12;

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const containerStyle = isDarkMode ? darkstyles.container : lightstyles.container;

  const [currentDigits, setCurrentDigits] = useState('0');
  const [prevDigits, setPrevDigits] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberPress = (number: number) => {
    if (currentDigits.length >= MAX_DIGITS) return;
    if (currentDigits.includes('Error')) {
      setCurrentDigits(number.toString());
      return;
    }

    setCurrentDigits(prevDigits => {
      if (prevDigits === '0') {
        return number.toString();
      }
      return prevDigits + number.toString();
    });
  };

  const handleACPress = () => {
    setCurrentDigits('0');
    setPrevDigits('');
    setOperator('');
  };

  const handleOperationPress = (op: string) => {
    if (currentDigits.includes('Error')) return;
    if (prevDigits !== '' && currentDigits !== '0' && operator !== '') {
        handleEqualsPress();
    }
    if (currentDigits.length >= MAX_DIGITS) return;
    setPrevDigits(currentDigits);
    setOperator(op);
    setCurrentDigits('0');
  };

  const handleEqualsPress = () => {
    if (!prevDigits || !operator || currentDigits.includes('Error')) return;

    const num1 = parseFloat(prevDigits);
    const num2 = parseFloat(currentDigits);
    let result = 0;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'X':
        result = num1 * num2;
        break;
      case '÷':
        if (num2 === 0) {
            setCurrentDigits('Error');
            setPrevDigits('');
            setOperator('');
            return;
        }
        result = num1 / num2;
        break;
      default:
        return;
    }

    const resultString = result.toString();
    if (resultString.length > MAX_DIGITS) {
        setCurrentDigits('Error: answer too long');
        setPrevDigits('');
        setOperator('');
    } else {
        setCurrentDigits(resultString);
        setPrevDigits(`${prevDigits} ${operator} ${currentDigits}`);
        setOperator('');
    }
  };

  const handlePercentPress = () => {
    if (currentDigits.includes('Error')) return;
    if (currentDigits === '0') return;
    const num = parseFloat(currentDigits);
    setCurrentDigits((num / 100).toString());
  };

  const handleToggleSignPress = () => {
    if (currentDigits.includes('Error')) return;
    if (currentDigits === '0') return;
    const num = parseFloat(currentDigits);
    setCurrentDigits((-num).toString());
  };

  const handleDecimalPress = () => {
    if (currentDigits.includes('Error')) return;
    if (currentDigits.includes('.')) return;
    if (currentDigits.length >= MAX_DIGITS) return;
    setCurrentDigits(prevDigits => prevDigits + '.');
  };

  return (
    <View style={containerStyle}>
      <UpperSide
        currentOperationText={currentDigits}
        prevOperationText={prevDigits}
        currentOperator={operator}
      />
      <LowerSide
        onNumberPress={handleNumberPress}
        onACPress={handleACPress}
        onOperationPress={handleOperationPress}
        onEqualsPress={handleEqualsPress}
        onPercentPress={handlePercentPress}
        onToggleSignPress={handleToggleSignPress}
        onDecimalPress={handleDecimalPress}
      />
    </View>
  );
}

export default App;