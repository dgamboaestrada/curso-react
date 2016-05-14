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
  View
} from 'react-native';

class Components extends Component {

  constructor() {
      super();
      this.state = {
          initialPosition: 'unknown',
          lastPosition: 'unknown'
      };

      this.watchID = (null: ?number);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition})
        },
        (error) => alert(error.message),
        {enableHighAccuracy: true, timeout: 20000, minimumAge: 1000}
    );

    this.watchId = navigator.geolocation.watchPosition((position) => {
        var lastPosition = JSON.stringify(position);
        this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
            <View style={styles.main}>
            <Text style={styles.title}>
              {this.state.initialPosition}
            </Text>
            <Text style={styles.title}>
              {this.state.lastPosition}
            </Text>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 20
    },
    title: {
        fontWeight: '500'
    }
});

AppRegistry.registerComponent('Component', () => Components);
