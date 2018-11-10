import React, { Component } from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, userLogin } from '../actions/index';
import { connect } from 'react-redux';
import { auth } from 'firebase';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;

        this.props.userLogin({email, password});
    }

    renderError(){
        if(this.props.error){
            return(
                <View style ={{backgroundColor: 'white'}}>
                    <Text style={styles.errorStyleText}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'></Spinner>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }

    render (){
        return (
            <ImageBackground source={{uri:'http://backgroundcheckall.com/wp-content/uploads/2017/12/work-desk-background-12.jpg'}} style={{ width: '100%', height: '100%'}}>
                <Card>
                    <CardSection>
                        <Input label="Email"
                            placeholder="email@gmail.com"
                            onChangeText= {this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                    <Input 
                    secureTextEntry
                    label="Password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>

                    {this.renderError()}
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </ImageBackground>
        )
    };
}

const styles = {
    errorStyleText:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = ({auth}) => {
    
    const {email, password, error, loading} = auth;
    return {email, password, error, loading};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, userLogin})(LoginForm);