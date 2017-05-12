/* eslint-env node */

import React from 'react';

const Slider = props => {
    return (
    
        <div className="row" >
            <div className="col-md-3" >
                <input className="form-control" type="number" value="1" min="0" max="9999"/>
            </div>
            <div className="col-md-9" >
                <input className="form-control" type="range" min="0" max="100" step="1" onChange={ (event) => { props.onChange( event.target.value ) } } />
            </div>
            <div className="col-md-3" >
                <input className="form-control" type="number" value="1" min="1" max="9999"/>
            </div>
            
        </div>
    
    );
}

export default Slider;