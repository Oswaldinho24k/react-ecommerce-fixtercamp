import React from 'react'
import { Paper, TextField, RaisedButton } from 'material-ui';
import Conekta from '../../conekta/conekta.js';

class Payment extends React.Component{
    state={
        tokenParams:{
            "card": {
              "number": "4242424242424242",
              "name": "Fulanito Pérez",
              "exp_year": "2020",
              "exp_month": "12",
              "cvc": "123"              }
          },
    }

    componentDidMount(){
     this.tokenConekta()
    }

    tokenConekta=()=>{
        //tokenizer conekta
        Conekta.setPublishableKey("key_Ik4WxMhXctrriTvyfMAimyg");
        Conekta.setLanguage("es");  
        let ck = Conekta.getPublishableKey();
        let lg = Conekta.getLanguage();
        console.log('key',ck);
        console.log('lenguaje',lg);
    }

    successResponseHandler=(token)=>{
        let data={
            token, 
            order:this.props.match.params.id
        }
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url = 'http://localhost:8000/pay/';
        var request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({loading:false});
                this.props.history.push('/profile')
            })
            .catch(e=>{
                console.log(e)
        })
    }

    tokenizeNPay = () => {
        this.setState({loading:true});
        
//        validate before sending to tokenize
     if(!Conekta.card.validateNumber(this.state.tokenParams.card.number)){
            console.log('Verifica tu número de tarjeta');
            this.setState({loading:false});
        }else if(!Conekta.card.validateExpirationDate(this.state.tokenParams.card.exp_month, this.state.tokenParams.card.exp_year)){
             console.log('Verifica tus fechas de expiración');
            this.setState({loading:false});
        }else if(!Conekta.card.validateCVC(this.state.tokenParams.card.cvc)){
            console.log('Verifica tu código de seguridad');
            this.setState({loading:false});
        }
        else{
             Conekta.token.create(this.state.tokenParams, this.successResponseHandler, this.errorResponseHandler);
        }
    };

    submit = (e) => {
        e.preventDefault();
        //this.setState({loading:true});
        this.tokenizeNPay();
    };

    onChange = (e) => {
        let tokenParams = this.state.tokenParams;
        const field = e.target.name;
        const value = e.target.value;
        tokenParams.card[field] = value;
        this.setState({tokenParams});
    };
    render(){
        let {loading} = this.state
        return(
            <div className={'center-box'}>
                <Paper zDepth={2} style={{width:'80%', padding:'2% 5%'}}>
                    <h2>Payment</h2>
                    <h1>{loading?'Loading...':''}</h1>
                    <form onSubmit={this.submit}>
                        <TextField fullWidth floatingLabelFixed floatingLabelText="Nombre Completo"
                            onChange={this.onChange} name="name"/>
                        <TextField fullWidth floatingLabelFixed floatingLabelText="Número de Tarjeta"
                            onChange={this.onChange} name="number"/>
                        <TextField style={{width:'30%'}} floatingLabelFixed floatingLabelText="Mes de Vencimiento"
                            onChange={this.onChange} name="exp_month"/>
                        <TextField style={{width:'30%'}} floatingLabelFixed floatingLabelText="Año de Vencimiento"
                        onChange={this.onChange} name="exp_year"/>
                        <TextField style={{width:'40%'}} floatingLabelFixed floatingLabelText="Código de Seguridad"
                            onChange={this.onChange} name="cvc"/>
                        <RaisedButton fullWidth primary label={'Pagar'} type={'submit'}/>
                    </form>
                </Paper>
            </div>
        );
    }
}

export default Payment