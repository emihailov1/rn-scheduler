import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import TopHeader from '../components/TopHeader';
import * as routes from '../../assets/json/Routes';

class HomeScreen extends React.Component  {

    constructor(props) {
        
        super(props);
    }

    stripName(name){
        return name.replace('Bus','').replace('Tram','');
    }
    

    render() {

        return (
            <Container>
                <Header hasTabs/>
                    <Tabs>
                    <Tab heading={ <TabHeading><Icon name="bus" /></TabHeading>}>
                        <Grid>
                            <Col style={styles.content}>
                                <List>
                                    <FlatList 
                                        keyExtractor={ route => route.ID }
                                        data={routes.Buses} 
                                        renderItem={ ({ item })=> {
                                            return (
                                        
                                                    <ListItem thumbnail>
                                                            <Left>
                                                                <View style={styles.route}>
                                                                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Route')}>
                                                                        <Text style={styles.routeTitle}>{this.stripName(item.ShortName)}</Text>
                                                                    </TouchableOpacity></View>
                                                            </Left>
                                                            <Body>
                                                                <Text>{item.HeadSign}</Text>
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
                    <Tab heading={ <TabHeading><Icon type="MaterialCommunityIcons" name="tram" /></TabHeading>}>
                        <Grid>
                                <Col style={styles.content}>
                                    <List>
                                        <FlatList 
                                            keyExtractor={ route => route.ID }
                                            data={routes.Trams} 
                                            renderItem={ ({ item })=> {
                                                return (
                                                    <ListItem thumbnail>
                                                        <Left>
                                                            <View style={styles.route}>
                                                                <Text style={styles.routeTitle}>{this.stripName(item.ShortName)}</Text>
                                                            </View>
                                                        </Left>
                                                        <Body>
                                                            <Text>{item.HeadSign}</Text>
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
                    </Tabs>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Route')}></TouchableOpacity>
                
            </Container>
            
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderColor: 'black',
        borderWidth: 7,
        flex:1
    },
    content: {
        //borderColor: 'red',
        //borderWidth: 3,
        marginHorizontal: 10,
        marginTop:10,
        backgroundColor: '#F5F5F5',
        flex: 1
    },
    route: {
        width: 50,
        height: 50,
        borderRadius:6,
        backgroundColor: '#6d80ed',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    routeTitle: {
        color: 'white'
    }
});

export default HomeScreen;