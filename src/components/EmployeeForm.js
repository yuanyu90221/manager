import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';
import {CardSection, Input} from './common';
class EmployeeForm extends Component{
  render() {
    const {name, phone, shift} = this.props;
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={value=> this.props.employeeUpdate({prop:'name', value})}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={value=> this.props.employeeUpdate({prop:'phone', value})}
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker

            selectedValue={shift}
            onValueChange={value=>this.props.employeeUpdate({prop:'shift', value})}
          >
            <Picker.Item label="Monday" value="Monday"/>
            <Picker.Item label="Tuseday" value="Tuseday"/>
            <Picker.Item label="Wednesday" value="Wednesday"/>
            <Picker.Item label="Thursday" value="Thursday"/>
            <Picker.Item label="Friday" value="Friday"/>
            <Picker.Item label="Saturday" value="Saturday"/>
            <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>
      </View>
    );  
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};
export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);