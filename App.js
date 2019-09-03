import React from 'react';
import { AppLoading } from 'expo';
import { createDrawerNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import RouteScreen from './src/screens/RouteScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const AppNavigator = createStackNavigator(
      {
        Home: { screen: HomeScreen },
        Route: { screen: RouteScreen }, 
      },
      {
        initialRouteName: "Home",
        headerMode: "none"
      }
    );
    
    const AppContainer = createAppContainer(AppNavigator);

    return (
      <Container>
        <AppContainer />
      </Container>
    );
  }
}