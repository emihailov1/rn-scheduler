import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import { StyleSheet } from 'react-native';

class TopHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Indep</Title>
            <Subtitle>Расписание</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
   paddingTop:5
  }
});

export default TopHeader;
