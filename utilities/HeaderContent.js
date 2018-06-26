import React, { Component } from 'react';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import styles from '../Assets/styles/styles';


export class HeaderContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header style={styles.customColor}>
                <Left><Button transparent onPress={() => this.props.navigation.openDrawer()}><Icon name="menu" /></Button></Left>
                <Body><Title>{this.props.title}</Title></Body>
                <Right><Button transparent onPress={() => this.props.navigation.navigate('Contact')}><Icon name="contacts" /></Button></Right>
            </Header>
        );
    }
}