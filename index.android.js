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

export default class IndexView extends Component {
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

class MasterView extends Component {
    static navigationOptions = {
        title: 'Android.List',
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
    );
  }

}

class DetailView extends Component {
    static navigationOptions = {
        title: 'Android.Detail',
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

class MyMapView extends Component {
    static navigationOptions = {
        title: 'Android.Map',
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

class MyWebView extends Component {
    static navigationOptions = {
        title: 'Android.Web',
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
  Index:{ screen:IndexView },
  List:{ screen:MasterView },
  Detail:{ screen:DetailView },
  Map:{ screen:MyMapView },
  Web:{ screen:MyWebView },
});

AppRegistry.registerComponent('NaviApp', () => NaviApp );
