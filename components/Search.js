import React from 'react'
import {Button, TextInput, View} from 'react-native';
import style from '../Style.js'
import { createStackNavigator } from '@react-navigation/stack'
import List from './List.js';


class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Montpellier'
        }
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.textInput}
                    value={this.state.city}
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={() => this.submit()}
                />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher" />
            </View>
        )
    }

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    setCity(city) {
        this.setState({city});
    }
}

const Stack = createStackNavigator();

export default MyStack = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Rechercher"
                    component={Search}
                    options={{ title: 'Rechercher une ville', headerStyle: style.header, headerTintColor: '#FFF',headerTitleStyle : style.headerTitle }}
                />
                <Stack.Screen name="Result"
                              component={List}
                              options={{ title: 'Météo' , headerStyle: style.header, headerTintColor: '#FFF',headerTitleStyle : style.headerTitle }}
                />
            </Stack.Navigator>
    );
};
