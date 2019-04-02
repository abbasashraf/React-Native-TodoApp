import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Button, CustomHeader } from '../../components'
import { Metrics } from '../../theme'
import { logout } from "../../actions/user"


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  // static navigationOptions = () => ({
  //   header: null,
  //   title: "asdasdasd"
  // })

  componentDidMount() {

  }

  onLogout = () => {
    this.props.logout()
    this.props.navigation.navigate('Login')
  }

  render() {


    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <CustomHeader
            title={`Hello, ${this.props.user.data.userName}`} />
        </View>
        <View style={{ width: Metrics.screenWidth * 0.9, marginVertical: Metrics.ratio(20) }}>
          <Button
            onPress={() => { this.onLogout() }}
            border={true}
            danger={true}
            text="Logout"
          />
        </View>
      </View>
    )
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const actions = {
  logout
};

export default connect(
  mapStateToProps,
  actions
)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    color: 'white',
    fontSize: 20,
    padding: 20,
  }
})
