
import { View, Text, TouchableOpacity } from "react-native";

import darkStyles from '../styles/darkModeStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from "@react-native-vector-icons/fontawesome5";
import { trigger } from "react-native-haptic-feedback";

export default function LowerSide() {
    const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function pressFeedback(){
trigger("soft", options);
}
    return (
        <View >
            <TouchableOpacity style={[darkStyles.button, darkStyles.AC, darkStyles.specialButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonBlackText}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.PositiveOrNegative, darkStyles.specialButton]}
            onPress={pressFeedback}
            >
                <Text style={darkStyles.buttonBlackText}><MaterialCommunityIcons name="plus-minus-variant" size={32} color="#1c1c1c" /></Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.specialButton, darkStyles.percentButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonBlackText}>%</Text>

            </TouchableOpacity>

            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.divideButton]}
            onPress={pressFeedback}
            >           

                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="divide" size={24}  color="rgba(255, 255, 255, 1)" iconStyle="solid" />

                </Text>

            </TouchableOpacity>
             <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.multiplyButton]}
             onPress={pressFeedback}
             >

                <Text style={darkStyles.buttonText}>
                    X

                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.minusButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="minus" size={24}  color="rgba(255, 255, 255, 1)" iconStyle="solid" />


                </Text>

            </TouchableOpacity>
              <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.plusButton]}
              onPress={pressFeedback}
              >

                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="plus" size={24}  color="rgba(255, 255, 255, 1)" iconStyle="solid" />


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.operationButton, darkStyles.equalsButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    <FontAwesome5 name="equals" size={24}  color="rgba(255, 255, 255, 1)" iconStyle="solid" />


                </Text>

            </TouchableOpacity>
             <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.sevenButton]}
             onPress={pressFeedback}
             >

                <Text style={darkStyles.buttonText}>
                    7


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.eightButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    8


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.nineButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    9


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.fourButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    4


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.fiveButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    5


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.sixButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    6


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.oneButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    1


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.twoButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    2


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.threeButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    3


                </Text>

            </TouchableOpacity>
            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.zeroButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    0


                </Text>

            </TouchableOpacity>

            <TouchableOpacity style={[darkStyles.button, darkStyles.digitButton, darkStyles.decimalButton]}
            onPress={pressFeedback}
            >

                <Text style={darkStyles.buttonText}>
                    .


                </Text>

            </TouchableOpacity>

        </View>
    )
}