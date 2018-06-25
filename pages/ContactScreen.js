import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Content, Input, Item, Textarea, Form, Label, Picker, Icon, Button } from 'native-base'
import { HeaderContent } from '../utilities/HeaderContent';

export class ContactScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: undefined
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }
    render() {
        return (
            <Container>
                <HeaderContent title="Contact" {...this.props} />
                <Content contentContainerStyle={{ padding: 10 }}>
                    
                        <Item floatingLabel>
                            <Label>Name</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Email</Label>
                            <Input />
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosHeader="Select your SIM"
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: undefined }}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </Item>
                        <Textarea rowSpan={5} bordered placeholder="Message" />
                        <Button block success><Text> Submit </Text></Button>
                        <Button block warning><Text> Cancel </Text></Button>
                   
                </Content>
            </Container>
        );
    }
}