import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container} from 'semantic-ui-react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Condition from './Condition';
import Thanks from "../Thanks";

class Condition_Hint extends Component{

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
                    <Route path='/Condition' render={(props) => <Condition {...props} changeInformation={ this.props.changeInformation } patientData={ this.props.patientData }/>}/>
                  <Redirect to='/Condition' />
                </Router>
            );
        } else {
            return(
                <div>
                    <Container textAlign='center'>
                        <p></p>
                        <Header as='h2'>Condition</Header>
                        <p></p>
                        <Container text textAlign='center'>
                            <p>
                                <b>First occurence:</b><br/>
                               Is this the first time your condition occurs or
                               has it occured before?
                            </p>
                            <p>
                                <b>Since when:</b><br/>
                                Please enter the date when you first noticed 
                                your condition. If you do not remember exactly
                                just estimate the approximate date.
                            </p>
                            <p>
                                <b>Description of the condition:</b><br/>
                                Please describe your condition in a short statement.
                            </p>
                            <p>
                                <b>Bodysite:</b><br/>
                                Please select the part of your body where the condition occurs.
                            </p>
                            <p>
                                <b>Further symptoms:</b><br/>
                                Please enter further symptoms (such as fever, exhaustion, ...).
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

export default Condition_Hint;