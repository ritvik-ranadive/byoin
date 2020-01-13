import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Header, Image } from 'semantic-ui-react';
import logo from './images/byoin_logo_plus.png'
import patient from './data/Input/PatientInput.json'
import patientHL7 from './data/hl7/patient.json'

class Thanks extends Component{

    constructor(props){
        super(props);
        this.state = {
            generate: false
        }
    }

    generateHL7 = () => {
        patientHL7.gender = patient.gender;
        patientHL7.name = patient.firstName + " " + patient.lastName;
        patientHL7.telecom.push(patient.telephoneNumber);
        patientHL7.birthDate = patient.birthDate;
        patientHL7.telecom.push(patient.email); 
        this.setState(
          {generate: true}
        );
    }


    render(){
        if(this.state.generate){
            return(
                <div>
                    <pre>
                        { JSON.stringify(patientHL7, null, 2) }
                    </pre>
                </div>
            );
        } else{
            return(
                <div>
                    <Container textAlign='center'>
                    <p></p>
                    <Header as='h1'>Thank you</Header>
                    <Divider/>
                    <p>
                        Your medical data will now be processed
                        in a confidential manner so that nothing
                        stands in the way of smooth threatment.
                    </p>
                    <Image centered size='small' src={ logo } onClick={ this.generateHL7 }/>
                    </Container>
                </div>
            );
        }
    }
}

export default Thanks;