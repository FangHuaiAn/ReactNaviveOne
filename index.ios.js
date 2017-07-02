/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class SplashPage extends Component {
  static navigationOptions = {
    title: 'Splash',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('List')}
          title="Move to List"
        />
      </View>
    );
  }
}

class MasterPage extends Component {
    static navigationOptions = {
        title: 'iOS.List',
        headerLeft: null,
    };

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Detail')}
          title="Move to Detail"
        />
      </View>
    ) ;
    }

}

class DetailPage extends Component {
    static navigationOptions = {
        title: 'iOS.Detail',
    };

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Map')}
          title="Move to Map"
        />
        <Button
          onPress={() => navigate('Web')}
          title="Move to Web"
        />
      </View>
    );
  }
}

class MyMapPage extends Component {
    static navigationOptions = {
        title: 'iOS.Map',
    };

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Map</Text>
      </View>
    );
  }
}

class MyWebPage extends Component {
    static navigationOptions = {
        title: 'iOS.Web',
    };

    render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Web</Text>
      </View>
    );
  }
}

const NaviApp = StackNavigator({
  Splash:{ screen:SplashPage },
  List:{ screen:MasterPage },
  Detail:{ screen:DetailPage },
  Map:{ screen:MyMapPage },
  Web:{ screen:MyWebPage },
});

AppRegistry.registerComponent('NaviApp', () => NaviApp );
