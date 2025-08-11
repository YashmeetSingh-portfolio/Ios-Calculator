/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {  StyleSheet, useColorScheme, View } from 'react-native';
import darkstyles from './styles/darkModeStyles';
import UpperSide from './components/UpperSide';
import LowerSide from './components/LowerSide';
import lightstyles from './styles/lightModeStyles';
function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const containerStyle = isDarkMode ? darkstyles.container : lightstyles.container;
  return (
    <View style={containerStyle}>
        <UpperSide />
        <LowerSide />
    </View>
  );
}



export default App;
