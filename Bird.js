import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';
import Images from './assets/images';

export default class Bird extends Component {
    constructor(props){
        super(props);

        this.animatedValue = new Animated.Value(this.props.body.velocity.y);
    }

    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        this.animatedValue.setValue(this.props.body.velocity.y);
        let rotation = this.animatedValue.interpolate({
            inputRange: [-10, 0, 10, 20],
            outputRange: ['-5deg', '0deg', '5deg', '20deg'],
            extrapolate: ['clamp']
        });

        let image = Images['bird' + this.props.pose];

        return (
            <Animated.Image
                style={{
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: width,
                    height: height,
                    transform: [{ rotate: rotation }]
                }}
                resizeMode={'stretch'}
                source={image}
            />
        );
    }
}