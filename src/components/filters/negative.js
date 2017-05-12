/* eslint-env node */

import React from 'react';

const Negative = props => { 
   
    return (
        <div className="form-group">
            <label>Controles - Negativo</label>
            <div>
                <input className="form-control" type="button" value="Aplicar filtro" onClick={ event => { props.onChange() } } />
            </div>
        </div>
    )

};

export default Negative;