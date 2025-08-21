import { View, Text, TouchableOpacity } from "react-native";
import darkStyles from '../styles/darkModeStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";
import { trigger } from "react-native-haptic-feedback";

export default function LowerSide({ onNumberPress, onACPress, onOperationPress, onEqualsPress, onPercentPress, onToggleSignPress, onDecimalPress }: { onNumberPress: (num: number) => void, onACPress: () => void, onOperationPress: (op: string) => void, onEqualsPress: () => void, onPercentPress: () => void, onToggleSignPress: () => void, onDecimalPress: () => void }) {
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };

    function pressFeedback() {
        trigger("soft", options);
    }

    function handlePressNumber(num: number) {
        onNumberPress(num);
    }

    return (
        <View>
            <TouchableOpacity 
              style={[darkStyles.button, darkStyles.AC, darkStyles.specialButton]}
              onPress={() => {
                pressFeedback();
                onACPress();
              }}
            >
                <Text style={darkStyles.buttonBlackText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.PositiveOrNegative, darkStyles.specialButton]}
                onPress={() => {
                  pressFeedback();
                  onToggleSignPress();
                }}
            >
                <Text style={darkStyles.buttonBlackText}><MaterialCommunityIcons name="plus-minus-variant" size={32} color="#1c1c1c" /></Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.specialButton, darkStyles.percentButton]}
                onPress={() => {
                  pressFeedback();
                  onPercentPress();
                }}
            >
                <Text style={darkStyles.buttonBlackText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.divideButton]}
                onPress={() => {
                  pressFeedback();
                  onOperationPress('÷');
                }}
            >
                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="divide" size={24} color="rgba(255, 255, 255, 1)" iconStyle="solid" />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.multiplyButton]}
                onPress={() => {
                  pressFeedback();
                  onOperationPress('X');
                }}
            >
                <Text style={darkStyles.buttonText}>
                    X
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.minusButton]}
                onPress={() => {
                  pressFeedback();
                  onOperationPress('-');
                }}
            >
                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="minus" size={24} color="rgba(255, 255, 255, 1)" iconStyle="solid" />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.plusButton]}
                onPress={() => {
                  pressFeedback();
                  onOperationPress('+');
                }}
            >
                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="plus" size={24} color="rgba(255, 255, 255, 1)" iconStyle="solid" />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.equalsButton]}
                onPress={() => {
                  pressFeedback();
                  onEqualsPress();
                }}
            >
                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="equals" size={24} color="rgba(255, 255, 255, 1)" iconStyle="solid" />
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.sevenButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(7);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    7
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.eightButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(8);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    8
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.nineButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(9);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    9
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.fourButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(4);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    4
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.fiveButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(5);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    5
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.sixButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(6);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    6
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.oneButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(1);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.twoButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(2);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.threeButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(3);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.zeroButton]}
                onPress={() => {
                    pressFeedback();
                    handlePressNumber(0);
                }}
            >
                <Text style={darkStyles.buttonText}>
                    0
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.decimalButton]}
                onPress={() => {
                  pressFeedback();
                  onDecimalPress();
                }}
            >
                <Text style={darkStyles.buttonText}>
                    .
                </Text>
            </TouchableOpacity>
        </View>
    );
}