// @flow
import React from "react";
import PropTypes from "prop-types";
import {
    View,
    Text
} from "react-native";
import { ButtonView } from '../index'
import { Metrics, Colors } from "../../theme"



export default class Button extends React.PureComponent {
    static propTypes = {
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.number
        ]),
    };

    static defaultProps = {
        text: '',
        style: {},
        border: false,
        danger: false
    };

    render() {
        const { border, danger } = this.props
        const color = danger ? 'red' : Colors.secondary
        return (
            <View>
                <ButtonView
                    onPress={() => { this.props.onPress() }}
                    style={[{
                        height: Metrics.ratio(50),
                        backgroundColor: !border ? color : "white",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: Metrics.ratio(4),
                        borderWidth: Metrics.ratio(1),
                        borderColor: color
                    }, this.props.style]}
                >
                    <Text style={{
                        color:danger ? color : "white"
                    }}>{this.props.text}</Text>
                </ButtonView >
            </View>
        );
    }

};



