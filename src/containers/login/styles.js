// @flow
import { StyleSheet } from "react-native";
import { Metrics } from "../../theme";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    subContainer: {
        flex: 1,
        justifyContent: "center"
    },
    textInput: {
        backgroundColor: "white",
        width: Metrics.screenWidth * 0.9,
        borderColor: "#CCCCCC",
        borderWidth: Metrics.ratio(1),
        borderRadius: Metrics.ratio(4),
        height: Metrics.ratio(50),
        // shadowColor: "#e5eced",
        // shadowOpacity: 0.7,
        // shadowRadius: 8,
        // elevation: 3,
        // shadowOffset: { width: 4, height: 4 }
    },
    text: {
        color: 'black',
        fontSize: Metrics.ratio(22),
        padding: Metrics.ratio(20),
        marginVertical: Metrics.ratio(15),
        fontWeight: 'bold'
    },
    btnStyle: {
        marginVertical: Metrics.ratio(10),
        marginBottom: Metrics.ratio(20)
    }
})