import React, { Component } from "react";
import { AppRegistry, Image, StatusBar, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import styles from './Assets/styles/styles';
const routes = ["Home", "About", "Contact"];

export class SideBar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image
                        source={require('./Assets/images/logo.png')}
                        resizeMode="contain"
                        style={styles.imageRender}>
                    </Image>
                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    button
                                    onPress={() => this.props.navigation.navigate(data)}>
                                    <Text>{data}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}
