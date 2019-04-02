// @flow
import React from "react";
import PropTypes from "prop-types";
import {
    View,
    Text
} from "react-native";
import { ButtonView } from '../index'
import { Metrics, Colors } from "../../theme";
import SwipeView from 'react-native-swipeview';
import utils from "../../utils"
import Icon from 'react-native-vector-icons/dist/AntDesign';

export default class ListCell extends React.PureComponent {
    static propTypes = {
        style: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.number
        ]),
    };

    static defaultProps = {
        style: {},
    };

    renderVisibleContent = () => {
        const { item, index } = this.props
        return (
            <ButtonView
                onPress={() => { console.log('onPress') }}
                style={[{
                    height: Metrics.ratio(60),
                    flexDirection: "row",
                    alignItems: "center",
                    // borderWidth: 1,
                    // borderColor: item.tag,
                    backgroundColor: Colors.white
                }, this.props.style]}
            >
                <View style={{
                    backgroundColor: item.tag,
                    width: Metrics.ratio(14),
                    height: Metrics.ratio(14),
                    borderRadius: Metrics.ratio(7),
                    marginHorizontal: Metrics.ratio(15),
                }}
                />

                <View style={{ flexDirection: "column" }}>
                    <Text style={{
                        color: item.completed ? Colors.gray : Colors.black,
                        fontSize: Metrics.ratio(14),
                        marginVertical: Metrics.ratio(2),
                        textDecorationLine: item.completed ? 'line-through' : 'none',
                        fontWeight: 'bold'
                    }}
                        numberOfLines={1}
                    >{item.todo}</Text>
                    <Text style={{
                        color: item.completed ? Colors.gray : Colors.black,
                        fontSize: Metrics.ratio(10),
                        marginVertical: Metrics.ratio(2)

                    }}
                        numberOfLines={1}
                    >Due: {utils.getLocalDateTime(item.date)} </Text>
                </View>
            </ButtonView >
        )
    }

    renderLeftView = () => (
        <View
            style={{
                height: Metrics.ratio(60),
                backgroundColor: "green",
                alignItems: "flex-start",
                justifyContent: "center"
            }}
        >
            <Icon style={{ marginLeft: Metrics.ratio(15) }} name='checkcircleo' size={20} color={Colors.black} />
        </View>
    )


    renderRightView = () => (
        <View
            style={{
                height: Metrics.ratio(60),
                backgroundColor: "red",
                alignItems: "flex-end",
                justifyContent: "center"
            }}
        >
            <Icon style={{ marginRight: Metrics.ratio(15) }} name='delete' size={20} color={Colors.black} />

        </View>
    )


    render() {
        const { onSwipedLeft, onSwipedRight, index, item } = this.props

        return (
            <View>
                <SwipeView
                    disableSwipeToRight={item.completed ? true : false}
                    leftOpenValue={Metrics.screenWidth - 20}
                    rightOpenValue={-Metrics.screenWidth - 20}
                    onSwipedLeft={() => {
                        onSwipedLeft(index)
                    }}
                    onSwipedRight={() => {
                        onSwipedRight(index)
                    }}
                    renderLeftView={() => this.renderLeftView()}
                    renderRightView={() => this.renderRightView()}
                    // swipeToOpenPercent={50}
                    renderVisibleContent={() => this.renderVisibleContent()}
                />
            </View>

        );
    }

};



