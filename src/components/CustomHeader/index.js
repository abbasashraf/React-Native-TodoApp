
import { View, Text } from "react-native";
import React from "react";
import { Metrics, Colors } from '../../theme'
export default class CustomHeader extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <View style={{
                backgroundColor: Colors.secondary,
                justifyContent: "flex-end",
                alignItems: "flex-start",
                height: Metrics.ratio(80),
                width: Metrics.screenWidth,
                paddingBottom: Metrics.ratio(5),
                paddingLeft: Metrics.ratio(15)
            }}>
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: Metrics.ratio(24),
                        color: Colors.white,
                        fontWeight: 'bold'
                    }}
                >{this.props.title}</Text>
            </View>
        );
    }
}
