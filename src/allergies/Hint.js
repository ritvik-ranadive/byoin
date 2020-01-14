import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Allergies from './Allergies';

class Allergies_Hint extends Component{

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
                    <Route path='/Allergies' render={(props) => <Allergies {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Allergies' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h2'>Allergies</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <p>
                                Please enter the name of your allergy.
                            </p>
                            <p>
                                If you have more than one allergy, you can simply 
                                add the additional allergies using the
                                "+" button.
                            </p>
                            <p>
                                If you donot have any allergy at all,
                                just click on "Next".
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

export default Allergies_Hint;