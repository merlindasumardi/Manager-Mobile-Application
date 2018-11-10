import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress(){
        Actions.employeeEdit({employee: this.props.employee.item});
    }
    render(){
        const {name} = this.props.employee.item;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                    <Text style={styles.textStyle}>{name}</Text>
                    </CardSection>  
                </View>
            </TouchableWithoutFeedback>
            
        );

    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;