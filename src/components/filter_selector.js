"use strict";
import React from 'react';

const FilterSelector = props => {
        
    const filters = props.filters.List.map( ( filter, index )=> {
        return ( 
            <option key={filter.name} value={ index } >
                {filter.name} 
            </option>
        );

    });
        
    return (
        <div className="container-fluid">
            <div className="row">
                <label>Seleccione un programa</label>
            </div>
            <div className="row">
                <select className="form-control" onChange={ event => { props.onFilterSelected( props.filters.List[ event.target.value ] ) } } >
                    {filters}
                </select>
            </div>
        </div> 

    );
    
};

export default FilterSelector;