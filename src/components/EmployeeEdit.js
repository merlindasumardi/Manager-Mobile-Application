import _ from 'lodash';
import React, {Component} from 'react';
import {Card, CardSection, Button, Confirm} from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentWillMount(){
        _.each(this.props.employee, (value, props)=>{
            this.props.employeeUpdate({props, value});
        })
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress(){
        const {phone, shift} = this.props;

        Communications.text(phone, `Your upcoming schedule is on ${shift}`);
    }

    onAccept(){
        this.props.employeeDelete({uid: this.props.employee.uid});
    }

    onDecline(){
        this.setState({showModal: false})
    }

    render() {
        return(
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={()=>{this.setState({showModal: !this.state.showModal})}}>Fired Employee</Button>
                </CardSection>
                <Confirm visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state)=>{
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete}) (EmployeeEdit);