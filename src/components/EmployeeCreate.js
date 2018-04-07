import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';
class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }
  render() {
    console.log(this.props.employee);
    const {name, phone, shift} = this.props;
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}
const mapStateToProps = ({employeeForm}) => {
  const {name, phone, shift} = employeeForm;
  return {name, phone, shift};
}

export default connect(mapStateToProps, {
  employeeUpdate, 
  employeeCreate
})(EmployeeCreate);