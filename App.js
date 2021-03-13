import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ImagemLivro from './src/Componentes/ImagemLivro';
import FraseLivro from './src/Componentes/FraseLivro';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      feed:[
        
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <ImagemLivro
          urlImagem = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWa1MIAtHMzYye11fNksaAx0EGZLbns0ZKw&usqp=CAU'
          Largura= {150}
          Altura= {150}
        />
        <FraseLivro
          fraseLivro = 'testando...'
        />
        <Button
          title={'Abrir Frase do Dia'}
         // onPress={}
        />        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
