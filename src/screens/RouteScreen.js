import React from 'react';
import { View, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TopHeader from '../components/TopHeader';
import * as route from '../../assets/json/Bus3b';

class RouteScreen extends React.Component  {
    constructor(props) {
        console.log(route)
        super(props);
    }
    

    render() {

        return (
            <Container>
                <Header hasTabs/>
                    <Tabs>
                    <Tab heading={ <TabHeading><Icon name="arrow-up" type="FontAwesome5" /><Text>Туда</Text></TabHeading>}>
                    <Grid>
                            <Col style={styles.content}>
                                <List>
                                    <FlatList 
                                        keyExtractor={ route => route.StopID }
                                        data={route.Stops} 
                                        renderItem={ ({ item })=> {
                                            return (
                                        
                                                    <ListItem thumbnail>
                                                            <Left>
                                                                <View style={styles.stop}>
                                                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Route')}>
                                                                        <Icon style={styles.stopIcon} name="circle" type="MaterialCommunityIcons" />
                                                                    </TouchableOpacity></View>
                                                            </Left>
                                                            <Body>
                                                                <Text>{item.StopName}</Text>
                                                                <Text note numberOfLines={2}></Text>
                                                            </Body>
                                                    </ListItem>
                                                
                                            );
                                        }}
                                    />
                                </List>
                                

                            </Col>
                        </Grid>
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="arrow-down" type="FontAwesome5" /><Text>Оттуда</Text></TabHeading>}>
                        
                    </Tab>
                    </Tabs>
                
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    stop:{
        width: 50,
        height: 50,
        borderRadius:50,
        backgroundColor: '#6d80ed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    stopIcon: {
        color: 'white'
    }
});

export default RouteScreen;