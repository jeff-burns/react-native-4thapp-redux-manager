import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();
    }

    renderItem({ item }) {
        console.log(this.item)
        return <ListItem employee={item} />
    }

    render() {
        console.log(this.props)
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderItem}
            />
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