
import React from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

import { AppWithRedux } from "../src/store";

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    const { nav, dispatch, user } = this.props;
    if (user.data && user.data.userName && user.data.userName.length > 3) {
      dispatch(NavigationActions.navigate({ routeName: 'Tabs' }));
    }

  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    console.log(this.props, "props")
    const { nav, dispatch } = this.props;
    if (nav.index === 1 || nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { nav, dispatch } = this.props;

    return <AppWithRedux state={nav} dispatch={dispatch} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  user: state.user
});

export default connect(mapStateToProps)(ReduxNavigation);