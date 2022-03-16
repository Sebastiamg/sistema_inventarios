import React from 'react';
import {Modal, ModalHeader, ModalBody, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './components/WindowExport.css'

class WindowExport extends React.Component{
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
        </div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
        Select data to export
        </ModalHeader>
        <ModalBody>
          


        </ModalBody>
      </Modal>
      </>
    )
  }
}
export default WindowExport;
