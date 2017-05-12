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
        <div className="form-group">
            <label >Seleccione un programa</label>
            <select className="form-control" onChange={ event => { props.onFilterSelected( props.filters.List[ event.target.value ] ) } } >
                {filters}
            </select>
        </div> 

    );
    
};

export default FilterSelector;