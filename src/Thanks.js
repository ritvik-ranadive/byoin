import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Divider, Header, Image } from 'semantic-ui-react';
import logo from './images/byoin_logo_plus.png'
import patient from './data/Input/PatientInput.json'
import patientHL7 from './data/hl7/patient.json'
import conditionHL7 from './data/hl7/condition.json'

class Thanks extends Component{

    constructor(props){
        super(props);
        this.state = {
            generate: false
        }
    }

    generateHL7 = () => {
        var date = new Date();
        patientHL7.gender = patient.gender;
        patientHL7.identifier = "1342768"
        patientHL7.name = this.props.patientData.firstName + " " + this.props.patientData.lastName;
        patientHL7.telecom.push(this.props.patientData.telephoneNumber);
        patientHL7.birthDate = this.props.patientData.birthDate;
        patientHL7.telecom.push(this.props.patientData.email);
        patientHL7.medicines.push(this.props.patientData.medicines);
        patientHL7.allergies.push(this.props.patientData.allergies);
        conditionHL7.clinicalStatus = "active";
        conditionHL7.verificationStatus = "unconfirmed";
        conditionHL7.bodySite = this.props.patientData.conditionBodysite;
        conditionHL7.onsetDateTime = this.props.patientData.conditionDateofAppearance;
        conditionHL7.subject = patientHL7.name;
        conditionHL7.recordedDate = date;
        conditionHL7.recorder = patientHL7.name;
        conditionHL7.note.push(this.props.patientData.conditionDescription);
        conditionHL7.note.push(this.props.patientData.symptoms);
        conditionHL7.identifier = "1975638"
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
                        { JSON.stringify(conditionHL7, null, 2) }
                    </pre>
                </div>
            );
        } else{
            return(
                <div>
                    <Container textAlign='center'>
                    <p></p>
                    <Header as='h2'>Thank you</Header>
                    <p>
                        Your medical data will now be processed
                        in a confidential manner so that nothing
                        stands in the way of a smooth treatment.
                    </p>
                    <Image centered size='tiny' src={ logo } onClick={ this.generateHL7 }/>
                    </Container>
                </div>
            );
        }
    }
}

export default Thanks;