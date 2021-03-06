import React from 'react'
import { Animated, Dimensions } from 'react-native'

export default class FadeInView extends React.Component {

    constructor(props) {
        super(props)
        let {width} = Dimensions.get('window')
        this.state = {
            pan: new Animated.ValueXY({x: width, y:0})
        }
    }

    componentDidMount(): void {
        Animated.timing(
            this.state.pan,
            {
                delay: this.props.delay,
                duration: 500,
                toValue: {x: 0, y:0},
                useNativeDriver: true
            }
        ).start()
    }

    render() {
        return (
            <Animated.View
                style={{...this.props.style,
                transform: this.state.pan.getTranslateTransform()}}>
                {this.props.children}
            </Animated.View>
        )
    }
}
