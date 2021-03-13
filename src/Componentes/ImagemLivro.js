import React, {Component} from 'react';
import {View, StyleSheet, Image } from 'react-native';

export default class ImagemLivro extends Component{
    render(){
        return(
            <View>
                <Image
                    source = {{uri: this.props.urlImagem}}
                   style={{height:this.props.Altura, width: this.props.Largura}}                   
                />
            </View>
        )
    }
}

