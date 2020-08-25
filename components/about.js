import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import style from '../Style.js'

export default class About extends React.Component {

    search() {
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas blandit laoreet neque at molestie. Integer tristique augue vitae mauris placerat, id pretium nisi vehicula. Nullam id eros ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas lacus nulla, dictum eget ligula a, vulputate rutrum elit. Phasellus ut mi laoreet, mollis turpis in, pellentesque libero. Cras sit amet venenatis nibh, non mollis elit. Donec eget ligula in sapien luctus tempus in eu elit. Ut at metus pulvinar, tincidunt urna quis, porttitor mi. Morbi vulputate dolor tristique quam volutpat consectetur. Nullam vitae eros blandit, tempor tellus ac, rutrum diam. Curabitur convallis eget magna eu ornare. Pellentesque at ornare dui.
                </Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher"/>
            </View>
        );
    }

}
