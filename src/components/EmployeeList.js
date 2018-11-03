import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

        this.createDataSource(this.props);
    }

    componentsWillReceiveProps(nextProps) {
        // nextProps are the next set of props that the component will be rendered with
        //this.props is still the old set of props
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        console.log(this.props)
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => { //state.employees is the object of all of them
        // val is the employee model {name, phone, shift}, while uid is each one's id
        return { ...val, uid}; //turns out like this {name: 'Jeff', phone:'555-5555', shift: 'Monday', id: '234niia'} for each employee
        //so then each of these will be collected into an array because of the map function
    });;

    return { employees }
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);