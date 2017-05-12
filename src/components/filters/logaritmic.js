import React from 'react';

const Logaritmic  = props => {

    return (
        <div className="form-group">
            <label>Controles - Transformacion Logaritmica</label>
            <div className="row">
                <div>
                </div>
                <input className="form-control" type="button" value="Aplicar filtro" onClick={ event => { props.onChange() } } />
            </div>
        </div>
    )    
    
};

export default Logaritmic