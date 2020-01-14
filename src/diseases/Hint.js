import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Diseases from './Diseases';
import Further_Details from "../further_details/Further_Details";

class Diseases_Hint extends Component{

    constructor(props){
        super(props);
        this.state = {
            understood: false
        };
    }

    handleUnderstood = () => {
        this.setState(
            {understood: true}
        );
    }

    render(){
        if(this.state.understood) {
            return(
                <Router>
                    <Route path='/Diseases' render={(props) => <Diseases {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Diseases' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h2'>Existing/Prior Diseases</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <p>
                                Please indcate whether you have or have had 
                                any of the listed diseases/infections.
                            </p>
                            <p>
                                For this purpose simply tick "Yes" or "No"
                            </p>
                            <p></p>
                            <Button color='yellow' onClick={ this.handleUnderstood }>UNDERSTOOD</Button>
                        </Container>
                    </Container>
                </div>
            );
        }
    }
}

export default Diseases_Hint;