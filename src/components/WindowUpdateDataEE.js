import React from 'react';
import './App.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{
  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
      position: "absolute",
      top: '240px',
      left: '705px',
	  width: '90%',
      transform: 'translate(-50%, -50%)'
	  
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>

      </div></div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Actualización de EE
        </ModalHeader>
      </Modal>
      </>
    )
  }
}

export default App;
