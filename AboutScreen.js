import React, { Component } from 'react';
import { Container, Header, Content, H1, H2, H3, Text } from 'native-base'
import { HeaderContent } from './HeaderContent';
import styles from './Assets/Styles/styles';

export class AboutScreen extends Component {
    render() {
        return (
            <Container>
                <HeaderContent title="About" {...this.props}/>
                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.textSizeFive}> Since 1922 when the first Australian standards and technical documents were created to assist with the successful building of Sydney's iconic Harbor Bridge, our experts have helped companies transform the way they manage, approach and leverage risk.
        Today's world is vastly different, and far more complex. Globalization, digitization and advances in technology have dramatically changed the way companies operate as well as the sheer velocity and number of risks faced. More than ever before, these risks have the ability to severely impact business operations, resilience and brand reputation
        Managing risk proactively is now a strategic imperative, and taking an integrated approach to managing risk and compliance has never been more important.
        We help companies take a more integrated approach to managing risk. Our world-class solutions and renowned team of experts provide advice at every step ensuring companies have the information they need to make the decisions required to protect and grow their businesses and their reputation.
        We have global reach with locations across Europe, the Middle East, Africa, the Americas, Asia and the Pacific, powered by local expertise and know how. </Text>
                </Content>
            </Container>
        );
    }
}