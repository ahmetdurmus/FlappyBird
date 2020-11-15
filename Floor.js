import React, { Component } from 'react';
import { View, Image } from 'react-native';
import images from './assets/images';

export default class Floor extends Component {
    render() {
        const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
        const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;

        const imageIterations = Math.ceil(width / height);

        return (
            <View
                style={{
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: width,
                    height: height,
                    overflow: 'hidden',
                    flexDirection: 'row'
                }}
            >
                {/*Array.apply(null, Array(imageIterations).map((el, index) => {
                    return <Image style={{ width: height, height: height }} key={index} resizeMode={'stretch'} source={images.floor} />
                }))*/}
                <Image style={{ width: width, height: height }} resizeMode={'stretch'} source={images.floor} />
            </View>
        );
    }
}