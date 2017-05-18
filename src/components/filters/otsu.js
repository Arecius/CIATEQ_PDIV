import React, { Component } from 'react';

import Slider from './../slider';

const Otsu = props => { 

    return (
        <div className="container-fluid form-group">
        
            <label>Controles - Otsu</label>

            <div className="row">
                <input className="form-control" type="button" value="Aplicar" onClick={ () => { props.onChange() } } />
            </div>
        </div>
    )
        
    
};

export default Otsu;