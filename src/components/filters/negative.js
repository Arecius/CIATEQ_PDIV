/* eslint-env node */

import React from 'react';

const Negative = props => { 
   
    return (
        <div>
            <input type="button" value="Aplicar filtro" onClick={ event => { props.onChange() } } />
        </div>
    )

};

export default Negative;