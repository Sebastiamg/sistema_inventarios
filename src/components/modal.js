import React from 'react';
import './modal.css';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Nuevo extends React.Component{
  state={
    abierto: false,
  }   
  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }
  render(){
    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      width: '200%',
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
          Export
        </ModalHeader>
        <ModalBody>
        <FormGroup className="group1-11">
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Item&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Mark&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Name&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Acquisition date&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Value&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Supplier&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Code&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Model/Serial&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Inches&nbsp;&nbsp;</Label><br/>
          </FormGroup>

          <FormGroup className="group2-11">
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Processor&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Speed&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Location&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Responsable&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;State&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Amount&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Invoice number&nbsp;&nbsp;</Label><br/>
            <Input type="checkbox"/> 
            <Label for="usuario">&nbsp;&nbsp;Observation&nbsp;&nbsp;</Label><br/>
          </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button color="primary">Export</Button>
            <Button color="secondary" onClick={this.abrirModal}>Close</Button>
        </ModalFooter>
      </Modal>
      </>
    )
  }
}

export default Nuevo;