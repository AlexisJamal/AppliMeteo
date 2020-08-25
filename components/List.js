import React from 'react'
import {Text, ActivityIndicator, FlatList} from 'react-native'
import style from '../Style.js'
import WeatherRow from './Row.js'
import Axios from 'axios'

export default class List extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            city: this.props.route.params.city,
            report: null
        }
        this.fetchWeather();
    }

    fetchWeather() {
        Axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=94c6cf0868fa5cb930a5e2d71baf0dbf`)
            .then((res) => {
                this.setState({report: res.data})
            })
            .catch(error => console.log(error))
    }

    render () {
        if (this.state.report === null) {
            return (
                <ActivityIndicator style={style.loader} color={style.color} size="large"/>
            )
        }
        else {

            return (
                <FlatList
                    data={this.state.report.list}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
    }

    renderItem({ item, index }) {
        return <WeatherRow day={item} index={index} />;
    }

}
