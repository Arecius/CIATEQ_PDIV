/* eslint-env node */
import React from 'react';

const FilterDetail = ( { filter } ) => {

    if(!filter){
        return (
            <div>
                <label>Descripcion</label>
                <p>Seleccione un filtro para mostrar su informacion</p>
            </div>
            );
    }else{
        return (
            <div className="form-group">
                <label>{ filter.name }</label>
                <p>{ filter.description }</p>
            </div>
        );
    }
};

export default FilterDetail;