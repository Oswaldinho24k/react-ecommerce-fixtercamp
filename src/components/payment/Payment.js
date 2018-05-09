import React from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui';

class Payment extends React.Component{
    render(){
        return(
            <div className={'center-box'}>
                <Paper zDepth={2} style={{width:'80%', padding:'2% 5%'}}>
                    <h2>Payment</h2>
                    <form>
                        <TextField fullWidth floatingLabelFixed floatingLabelText="Nombre Completo"/>
                        <TextField fullWidth floatingLabelFixed floatingLabelText="Número de Tarjeta"/>
                        <TextField style={{width:'60%'}} floatingLabelFixed floatingLabelText="Fecha de Vencimiento"/>
                        <TextField style={{width:'40%'}} floatingLabelFixed floatingLabelText="Código de Seguridad"/>
                        <RaisedButton fullWidth primary label={'Pagar'}/>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default Payment