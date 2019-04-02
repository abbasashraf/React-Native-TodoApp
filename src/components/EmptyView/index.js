
import { View, Text } from "react-native";
import React from "react";
export default class EmptyView extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                <Text>No Record!</Text>
            </View>
        );
    }
}
