import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { Button } from '../../components'
import { login } from "../../actions/user"
import { Metrics, Colors, Images } from "../../theme";
import styles from "./styles";
import Utils from "../../utils"



class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  static navigationOptions = () => ({
    header: null,
  })



  componentDidMount() {

  }

  login = () => {
    if (this.state.name !== "" && this.state.name.length > 3) {
      const payload = {
        userName: this.state.name
      }
      this.props.login(payload)
      this.props.navigation.navigate('Tabs')
    } else {
      Utils.showCommonMessage('whoops!', 'User name should be greater than 3 character.')
    }
  }

  render() {


    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <Image style={{ width: Metrics.ratio(85), height: Metrics.ratio(85) }} resizeMode='contain' source={Images.logo} />
            <Text style={styles.text}>Todo</Text>
          </View>
          <View style={{ marginVertical: Metrics.ratio(10) }}>
            <TextInput
              selectionColor={Colors.secondary}
              underlineColorAndroid="transparent"
              placeholderTextColor="#CCCCCC"
              placeholder={"user name"}
              style={styles.textInput} onChangeText={text => this.setState({ name: text })} />
          </View>
          <Button
            onPress={() => { this.login() }}
            text='login'
            style={styles.btnStyle} />
        </View>

      </View>
    )
  }
}
const mapStateToProps = state => ({});

const actions = {
  login
};

export default connect(
  mapStateToProps,
  actions
)(Login);

