import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',

  },
  historyContainer: {
    position: "absolute",
    top: 46,
    left: 30,

  },
  prevOperationContainer: {

    minHeight: 36,
    top: 175,
    width: 'auto',

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 0,
    paddingRight: 12,
  },
  currentOperationContainer: {

    minHeight: 72,
    top: 170,
    width: 'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    margin: 0,

    marginRight: 6,
    flexWrap: "wrap-reverse"

  },
  prevOperationText: {
    fontWeight: "400",
    fontSize: 24,
    color: "#828282",
    textAlign: "right",
    fontFamily: 'Poppins-Regular',
  },
  currentOperationText: {
    textAlign: "right",
    fontWeight: "500",
    fontSize: 48,
    color: "#BCBDBB",
    fontFamily: 'Poppins-Regular',
  },
  upperSideContainer: {


  },
  lowerSideContainer: {
    backgroundColor: "red",

    top: 300,

  },
  button: {

    height: 65,
    width: 65,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",




  },
  AC: {
    position: "absolute",
    top: 232,
    left: 34,

  },
  buttonBlackText: {
    fontSize: 28,
    color: "#1C1C1C",
    fontWeight: "500",

  },
  specialButton: {
    backgroundColor: "#D4D4D2",
    borderColor: "#FFFFFF",
    borderWidth: 1,


  },
  PositiveOrNegative: {
    position: "absolute",
    top: 232,
    left: 116,

  },
  percentButton: {
    position: "absolute",
    top: 232,
    left: 198,

  },
  operationButton: {
    backgroundColor: "#FF9500"
  },
  divideButton: {
    position: "absolute",
    top: 232,
    left: 280,
  },
  buttonText: {
    fontSize: 24,
    color: "#D4D4D2",
    fontWeight: "500",

  },
  multiplyButton: {
    position: "absolute",
    top: 315,
    left: 280,


  },
  minusButton: {
    position: "absolute",
    top: 391,
    left: 280,

  },
  plusButton: {
    position: "absolute",
    top: 467,
    left: 280,

  },
  equalsButton: {
    position: "absolute",
    top: 556,
    left: 280,

  },
  digitButton: {
    backgroundColor: "#505050"
  },
  sevenButton: {
    position: "absolute",
    top: 312,
    left: 34,

  },
  eightButton: {
    position: "absolute",
    top: 312,
    left: 116,
  },
  nineButton: {
    position: "absolute",
    top: 312,
    left: 198,
  },
  fourButton: {
    position: "absolute",
    top: 391,
    left: 34,
  },
  fiveButton: {
    position: "absolute",
    top: 391,
    left: 116,
  },
  sixButton: {
    position: "absolute",
    top: 391,
    left: 198,
  },
  oneButton: {
    position: "absolute",
    top: 467,
    left: 34,
  },
  twoButton: {
    position: "absolute",
    top: 467,
    left: 116,
  },
  threeButton: {
    position: "absolute",
    top: 467,
    left: 198,
  },
  zeroButton: {
    width: 144,
    borderRadius: 27,
    position: "absolute",
    top: 556,
    left: 34,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  decimalButton: {
    position: "absolute",
    top: 556,
    left: 198,
  }
  



});