import React, {Component} from 'react';
import {View,  Text, StyleSheet, Image } from 'react-native';

export default class FraseLivro extends Component{
    render(){
        return(
            <View>
                <Text style={styles.texto}>{this.props.fraseLivro}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 24,
        marginTop: 10, 
        marginBottom:25,
        //fontWeight: 'bold' , 
        //fontFamily: 'arial black'        
    }


})