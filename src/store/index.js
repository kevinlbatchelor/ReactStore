import React, {Component} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import axiosMiddleware from 'redux-axios-middleware'
import productReducers from "./productReducers";
import axios from 'axios';

const reducer = combineReducers({
    productReducers
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(axios)));


export default store