/* eslint-env node */
import React from 'react';

const FilterDetail = ( { filter } ) => {

    if(!filter){
        return <div>Please load a filter to display its information</div>;
    }else{
        return (
            <div>
                <label>{ filter.name }</label>
                <p>{ filter.description }</p>
            </div>
        );
    }
};

export default FilterDetail;