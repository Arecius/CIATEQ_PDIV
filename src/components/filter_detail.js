/* eslint-env node */
import React from 'react';

const FilterDetail = ( { filter } ) => {

    if(!filter){
        return <div>Please load a filter to display its information</div>;
    }else{
        return (
            <div className="form-group row">
                <label>{ filter.name }</label>
                <div>{ filter.description }</div>
            </div>
        );
    }
};

export default FilterDetail;