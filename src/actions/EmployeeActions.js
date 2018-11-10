import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS, EMPLOYEE_SAVE_SUCCESS } from "./types";
import firebase from 'firebase';
import { Actions } from "react-native-router-flux";


export const employeeUpdate = ({props, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {props, value}
    };
};

export const employeeCreate = ({name, phone, shift}) => {
    shift = shift || 'Monday';
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({name, phone, shift})
        .then(()=> {
            dispatch({
                type: EMPLOYEE_CREATE
            });
            Actions.pop()
        });
    };
    
};

export const employeeFetch = () => {
    const {currentUser} = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            console.log(snapshot);
            dispatch({
                type: EMPLOYEE_FETCH_SUCCESS,
                payload: snapshot.val()
            });
        });
    };
};

export const employeeSave = ({name, phone, shift, uid}) => {
    const {currentUser} = firebase.auth();
    console.log({name, phone, shift});

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({name, phone, shift})
        .then(()=>{
            dispatch({
                type: EMPLOYEE_SAVE_SUCCESS
            });
            Actions.pop();
        
        });
    };
};

export const employeeDelete = ({uid}) => {
    const {currentUser} = firebase.auth();

    return() => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(()=>{
            Actions.pop();
        })
    }
}