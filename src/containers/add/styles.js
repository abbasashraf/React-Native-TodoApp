// @flow
import { StyleSheet } from "react-native";
import { Metrics } from "../../theme";


export default StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center"
    },
    subContainer: {
        flex: 1,
        // justifyContent: "center",
    },
    text: {
        color: 'white',
        fontSize: 20,
        padding: 20,
    },
    tagContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical:Metrics.ratio(24)
    },
    tagView: {
        height: Metrics.ratio(50),
        width: Metrics.ratio(50),
        borderRadius: Metrics.ratio(30),

    },
    textInputStyle: {
        backgroundColor: "white",
        borderRadius: 4,
        width: Metrics.screenWidth * 0.9,
        height: Metrics.ratio(110),
        borderColor: "#CCCCCC",
        borderWidth: Metrics.ratio(1),
        textAlign: "left",
        textAlignVertical: 'top',
        paddingLeft: Metrics.ratio(6),

    }
})