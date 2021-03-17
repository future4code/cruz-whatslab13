import React from 'react'
import './App.css';
import styled from 'styled-components'


const ContainerPrincipal = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
`

const ContainerMensagens = styled.div`
  border: 1px solid black;
  height: 100vh;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: beige
`

const Imputs = styled.div`
  display:flex;
  width: 100%;
  height: 40px
`

const ImputNome = styled.input`
  width:20%;
`

const ImpuTexto = styled.input`
width:60%;
`

const ButtonEstilizado = styled.button`
  width:20%;
  background-color: #34af23;
`

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
        <p><b>{mensagem.nome}:</b> {mensagem.texto}</p>
      )
    })

    return (
      <ContainerPrincipal>
        
        <ContainerMensagens>
          {mensagensEnviadas}
        
          <Imputs>
          <ImputNome value={this.state.valorImputNome}  onChange={this.onChangeInputNome} placeholder={"Usuário"}/>
        
        
          <ImpuTexto value={this.state.valorImputTexto}  onChange={this.onChangeInputTexto} placeholder={"Digite algo"}/>

        

          <ButtonEstilizado onClick={this.enviarMensagem}> ENVIAR </ButtonEstilizado>
          </Imputs>
        </ContainerMensagens>
      </ContainerPrincipal>
  )

  }

}



export default App;
