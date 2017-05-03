"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import AppSelector from './components/app_selector';
import ImageDisplay from './components/img_display';

var App = () => {
    return (
        <div>
            <AppSelector />
            <ImageDisplay />
        </div>
    )
        
};


ReactDOM.render( <App/>, document.querySelector(".container-fluid") );    