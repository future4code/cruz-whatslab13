import React from 'react'
import './App.css';
import styled from 'styled-components'

class App extends React.Component {
  state = {
    valorImputNome: "",
    valorImputTexto: "",
    mensagens: [],
  }

onChangeInputNome = (event) => {
  this.setState({valorImputNome: event.target.value})
}

onChangeInputTexto = (event) => {
  this.setState({valorImputTexto: event.target.value})
}

enviarMensagem = () => {
  const novaMensagem = {
    nome: this.state.valorImputNome,
    texto: this.state.valorImputTexto,
  }

  const outraMensagem = [...this.state.mensagens, novaMensagem]
  this.setState({
    mensagens: outraMensagem, 
    valorImputNome: "",
    valorImputTexto: "",
  })
}

const 
  render() {

    const mensagensEnviadas = this.state.mensagens.map((mensagem) => {
      return(
        <p>{mensagem.nome}: {mensagem.texto}</p>
      )
    })

    return (
      <div>
        
        <div>
          {mensagensEnviadas}
        </div>

        <input value={this.state.valorImputNome}  onChange={this.onChangeInputNome} placeholder={"Usuário"}/>
        
        
        <input value={this.state.valorImputTexto}  onChange={this.onChangeInputTexto} placeholder={"Digite algo"}/>

        

        <button onClick={this.enviarMensagem}> ENVIAR </button>
      </div>
  )

  }

}



export default App;
