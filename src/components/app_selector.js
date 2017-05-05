"use strict";
import React from 'react';

const SearchBar = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <label>Seleccione un programa</label>
            </div>
            <div className="row">
                <select className="form-control" >
                    <optgroup>
                        <option>Programa 1</option>
                        <option>Test 2</option>
                        <option>Test 3</option>
                    </optgroup>
                </select>
            </div>
            
        </div>
        
    );
};

export default SearchBar;