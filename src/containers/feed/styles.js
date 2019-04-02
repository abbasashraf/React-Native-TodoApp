// @flow
import { StyleSheet } from "react-native";
import { Metrics } from "../../theme";


export default StyleSheet.create({
    container: {
        flex: 1,
      },
      text: {
        color: 'white',
        fontSize: 20,
        padding: Metrics.ratio(15),
      }
})