import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Button, ButtonView, CustomHeader } from '../../components'
import { addTodo } from "../../actions/todo"
import { Metrics, Colors } from "../../theme";
import styles from "./styles"
import DatePicker from "react-native-datepicker";
import Utils from "../../utils"

class Add extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: undefined,
      date: undefined,
      tags: [
        { id: 1, color: "#498FE1" },
        { id: 2, color: "#7ED221" },
        { id: 3, color: "#D0011B" },
        { id: 4, color: "#BC0FE0" },
        { id: 5, color: "#F5A523" }
      ],
      selectedTag: "#498FE1",
    };
  }


  componentDidMount() {

  }

  addTodo = () => {
    const { selectedTag, todo, date } = this.state
    if (todo === undefined) {
      Utils.showCommonMessage("Whoops!", "please enter what to do")
    } else if (date === undefined) {
      Utils.showCommonMessage("Whoops!", "please select date and time")
    } else {
      const payload = {
        tag: selectedTag,
        todo,
        date
      }
      this.props.addTodo(payload)
      this.setState({
        todo: undefined,
        date: undefined,
      })
    }

  }

  renderTags = () => {
    const { tags } = this.state
    return (
      <View style={styles.tagContainer}>
        {tags.map((val, i) => {
          return (
            <ButtonView onPress={() => {
              this.setState({
                selectedTag: val.color
              })
            }} key={i} style={[styles.tagView,
            {
              opacity: this.state.selectedTag == val.color ? 1 : 0.1,
              backgroundColor: val.color
            }
            ]} />
          )
        })}
      </View>
    )
  }
  renderDatePicker = () => {
    return (
      <View>
        <DatePicker
          ref={ref => (this.date = ref)}
          style={{
            // flex: 1,
            width: Metrics.screenWidth * 0.9,
          }}
          customStyles={{
            // btnTextConfirm: {
            // },
            // btnTextCancel: {
            // },
            // cancelStyle: {
            //   textTransform: "capitalize"
            // },
            dateIcon: {
              display: "none"
            },
            dateInput: {
              alignItems: "flex-start",
              paddingLeft: Metrics.ratio(6),
              borderWidth: Metrics.ratio(1),
              borderColor: "#E1E1E1",
              borderRadius: Metrics.ratio(4),
            },
            dateText: {
              color: "black",
              fontSize: 14,
            },
            placeholderText: {
              color: "#CCCCCC",
              fontSize: 14,
            }
          }}
          date={this.state.date}
          mode="datetime"
          placeholder={"when is it due?"}
          placeholderColor={"#CCCCCC"}
          format="YYYY-MMM-DD h:mm A"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          onDateChange={date => {
            this.setState({
              date: date
            });
          }}
        />
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <CustomHeader
          title={'Add'} />
        <View style={styles.subContainer}>
          <View style={{ marginVertical: Metrics.ratio(15) }}>
            <TextInput
              value={this.state.todo}
              multiline={true}
              selectionColor={Colors.secondary}
              underlineColorAndroid="transparent"
              style={styles.textInputStyle}
              placeholder="What do you need to do?"
              placeholderTextColor="#CCCCCC"
              onChangeText={text => this.setState({ todo: text })}
            />
          </View>
          {this.renderDatePicker()}
          {this.renderTags()}
          <Button
            onPress={() => { this.addTodo() }}
            text='Add'
            style={{}}>

          </Button>

        </View>

      </View>
    )
  }
}
const mapStateToProps = state => ({});

const actions = {
  addTodo
};

export default connect(
  mapStateToProps,
  actions
)(Add);

