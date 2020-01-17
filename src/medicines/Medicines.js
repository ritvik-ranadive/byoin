import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Input, Form, Icon, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Allergies from '../allergies/Allergies';
import Personal_Information from '../personal_information/Personal_Information'
import Medicines_Hint from './Hint'
import logo from '../images/byoin_logo_plus.png'
import Medicine from './Medicine'

// class Medicine extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: ''
//         }
//     }
//
//     render(){
//         return (
//             <Form.Field>
//                 <Input fluid placeholder='Name of Medication' onChange={this.handleName}/>
//             </Form.Field>
//         );
//     }
//
//     handleName = (event , {value}) => {
//         console.log(value);
//         this.setState({
//             name: value
//         })
//     }
// }

class Medicines extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            medicines: this.props.patientData.medicines,
            next: false,
            hint: false,
            back: false
        }

    }

    add = ()  => {
        const medicines = this.state.medicines.concat('');
        this.setState({ medicines });
        this.props.changeInformation('medicines', medicines);
    }

    handleNext = () => {
        this.setState(
          {next: true}
        );
    }

    handleBack = () => {
        this.setState(
          {back: true}
        );
    }

    handleHint = () => {
        this.setState(
          {hint: true}
        );
    }

    render(){
        if(this.state.hint){
            return(
                <Router>
                    <Route path='/Medicines_Hint' render={(props) => <Medicines_Hint {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData}/>}/>
                  <Redirect to='/Medicines_Hint' />
                </Router>
            );
        } else if(this.state.back){
            return(
                <Router>
                    <Route path='/Personal_Information' render={(props) => <Personal_Information {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData}/>}/>
                  <Redirect to='/Personal_Information' />
                </Router>
            );
        } else if(this.state.next) {
            return(
                <Router>
                    <Route path='/Allergies' render={(props) => <Allergies {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData}/>}/>
                  <Redirect to='/Allergies' />
                </Router>
            ); 
        } else{
            const medicines = this.state.medicines.map((Element, index) => {
                //console.log(Element, index);
                return <Medicine key={ index } index={ index } patientData={this.props.patientData} />
            });
            return(
                <div>
                    <Container textAlign='center'>
                    <Button floated='left' icon onClick={ this.handleBack }>
                            <Icon name='angle left'/>
                    </Button>
                    <Button floated='right' icon onClick={ this.handleHint }>
                            <Icon name='question circle outline'/>
                    </Button>
                    <Header as='h2'>
                        Current Medication 
                    </Header>
                    <Divider/>
                    <Form>
                        { medicines }
                        <p></p>
                        <Image centered size='mini' src={ logo } onClick={ this.add } />
                        <p></p>
                        <Button centered color='black' onClick={ this.handleNext }>NEXT</Button>
                    </Form>
                    </Container>
                </div>
            )
        }
    }
}

export default Medicines;
