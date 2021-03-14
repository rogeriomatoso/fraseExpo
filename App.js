import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';
import ImagemLivro from './src/Componentes/ImagemLivro';
import FraseLivro from './src/Componentes/FraseLivro';

export default class App extends Component {
  constructor (props){
    super(props);

    this.randoomiza = this.randomiza.bind(this);

    this.state = {
      posicao: 0,
      slogan: [
        {frase: 'A sua irritação não solucionará problema algum. O seu mau humor não modifica a vida. Não estrague o seu dia', imagem: 'https://cdn.pensador.com/img/imagens/ch/ic/chico_xavier_a_sua_irritacao_nao_solucionara_problema.jpg'},
        {frase: 'Vamos inventar o amanhã no lugar de se preocupar com o que aconteceu ontem.', imagem: 'https://cdn.pensador.com/img/imagens/st/ev/steve_jobs_vamos_inventar_o_amanha_no_lugar_de.jpg'},
        {frase: 'Ninguém, além de você, está no controle de sua felicidade. Portanto, ajuste as velas e corrija e rumo', imagem: 'https://cdn.pensador.com/img/imagens/ma/rc/marcio_kuhne_ninguem_alem_de_voce_esta_no_controle.jpg'},
        {frase: 'Você tem que acordar cada manhã com determinação se você pretende ir para a cama com satisfação.', imagem: 'https://cdn.pensador.com/img/imagens/fr/as/frases_positivas_para_o_dia_4.jpg'},
        {frase: 'Não importa a cor do céu, quem faz o dia lindo é você.', imagem: 'https://cdn.pensador.com/img/imagens/na/oi/nao_importa_a_cor_do_ceu_quem_faz_o_dia_lindo_e_voce.jpg'},
      ]      
    }
    
  }
  randomiza(){
    this.setState({
      posicao : Math.floor(Math.random()* (this.state.slogan.length - 1))+1
    })
  }
  render(){
    return (
      <View style={styles.container}>
        <ImagemLivro
          urlImagem = {this.state.slogan[this.state.posicao].imagem}
          Largura= {200}
          Altura= {200}
        />
        <FraseLivro        
          fraseLivro = {this.state.slogan[this.state.posicao].frase}
        />
        <TouchableHighlight
        style={styles.Btn}
         onPress={() => this.randomiza()
         }
        >          
          <Text style={styles.textBtn }>
          Abrir Frase do Dia
          </Text>          
        </TouchableHighlight>             
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
  Btn:{
    borderColor: '#FA6C4E',
    borderWidth: 3,
    borderRadius: 5,
    paddingBottom: 5,
    paddingTop: 5,
    width: 200,    
  },
  textBtn:{
    textAlign: 'center',
    color: '#FA6C4E',
    fontSize: 16,    
  },  
})
