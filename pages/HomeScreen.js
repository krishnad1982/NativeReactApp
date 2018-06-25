import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, Image, Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Card } from "react-native-elements";
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
import styles from '../Assets/styles/styles';
import { HeaderContent } from '../utilities/HeaderContent';

export class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=364a811e3dfc495b9cdfb4f4a3e70112')
            .then((response) => response.json())
            .then((responsejson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responsejson.articles,
                }, function () {

                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Container>
                    <HeaderContent title="Home" {...this.props} />
                    <Content contentContainerStyle={{ flex: 1, padding: 20 }}>
                        <ActivityIndicator />
                    </Content>
                </Container>
            )
        }

        return (
            <Container>
                <HeaderContent title="Home" {...this.props} />
                <Content contentContainerStyle={{ flex: 1, paddingTop: 20, shadowOpacity: 0.75, shadowRadius: 5, shadowOffset: { height: 0, width: 0 }, shadowColor: 'red' }}>
                    <FlatList
                        data={this.state.dataSource}
                        renderItem={({ item }) =>
                            <Card title={item.title} image={{ uri: item.urlToImage }} containerStyle={{ padding: 0, width: 380 }}>
                                <Text style={{ marginBottom: 5 }}>{item.author}</Text>
                                <Text style={{ marginBottom: 10 }}>{item.publishedAt}</Text>
                            </Card>
                        }
                        keyExtractor={item => item.title}
                    />
                </Content>
            </Container>
        );
    }
}