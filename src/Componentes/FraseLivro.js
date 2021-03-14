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
        fontSize: 20,
        marginTop: 10, 
        marginBottom:25,      
        textAlign: "center",        
        maxWidth: 300,
        color: "#008000"
               
    }


})