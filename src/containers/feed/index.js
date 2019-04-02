import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Button, ListCell, EmptyView, CustomHeader } from '../../components'
import { deleteTodo, completeTodo } from "../../actions/todo"
import styles from "./styles";


class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }


  componentDidMount() {

  }

  onSwipedLeft = (i) => {
    // remove todo
    this.props.deleteTodo(i)
  }

  onSwipedRight = (i) => {
    // complete todo
    this.props.completeTodo(i)
  }

  _renderItem = ({ item, index }) => {
    return <ListCell
      onSwipedLeft={(i) => { this.onSwipedLeft(i) }}
      onSwipedRight={(i) => { this.onSwipedRight(i) }}
      item={item}
      index={index}
    />
  }

  renderList = () => {
    return (
      <FlatList
        ref={ref => {
          this.list = ref;
        }}
        data={this.props.todos.data}
        renderItem={this._renderItem}
        scrollEventThrottle={1}
        style={{
          flex: 1
        }}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{}}
        onScroll={({ nativeEvent }) => { }}
      />
    );
  };

  render() {

    const { todos } = this.props
    return (
      <View style={styles.container}>
        <CustomHeader
          title={'Todo'} />
        <View style={{ flex: 1 }}>{todos.data.length > 0 ? this.renderList() : <EmptyView />}</View>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  todos: state.todo
});

const actions = {
  deleteTodo, completeTodo
};

export default connect(
  mapStateToProps,
  actions
)(Feed);
