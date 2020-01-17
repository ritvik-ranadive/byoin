import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Header, Container, Divider, Input, Form, Icon, Image } from 'semantic-ui-react';
import Medicines from "./Medicines";

class Medicine extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.patientData.medicines[this.props.index]
        }
    }

    render(){
        return (
            <Form.Field>
                <Input fluid placeholder='Name of Medication' value={this.state.name} onChange={this.handleName}/>
            </Form.Field>
        );
    }

    handleName = (event , {value}) => {
        //console.log(value);
        this.setState({
            name: value
        })
        this.props.patientData.medicines[this.props.index] = value;
    }
}

export default Medicine;