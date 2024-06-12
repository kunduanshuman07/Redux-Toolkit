import * as redux from 'redux'
import { legacy_createStore as creatStore } from 'redux'
import {thunk} from "redux-thunk"
import axios from "axios";

const applyMiddleware = redux.applyMiddleware;
// Initial State

const initialState = {
    loading: false,
    users: [],
    error: ''
};

// Actions

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

// Action creators

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

// Main Action Creator using Redux thunk

const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // response.data is the user data
            const users = response.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch(error => {
            // error.message is the error
            dispatch(fetchUsersError(error.message));
        })
    }
}

// Reducer

const reducer = (state = initialState, action) => {
    if(action.type === FETCH_USERS_REQUEST){
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type === FETCH_USERS_SUCCESS){
        return {
            loading: false,
            users: action.payload,
            error: ''
        }
    }
    else if(action.type === FETCH_USERS_ERROR){
        return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

// Store

const store = creatStore(reducer, applyMiddleware(thunk));
store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchUsers());