"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterSelector from './components/filter_selector';
import ImageDisplay from './components/img_display';
import FilterDetail from './components/filter_detail';
import Filters from './filters';

class App extends Component {
    
    constructor( props ){
        
        super( props );
        
        this.state = {
            
            selectedFilter : null,
            image: null,
            filterTag: <div />
        };


    }
    
    render(){
        return (
            <div className="row" >
                <div className="row">
                    <FilterSelector 
                        filters={ Filters } 
                        onFilterSelected={ selectedFilter => { this.setState( { selectedFilter } ); } } />
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <ImageDisplay />
                    </div>
                    <div className="col-md-4">
                        {this.loadComponent( this.state.selectedFilter )}
                    </div>
                </div>
                <div className="row">
                    <FilterDetail filter={ this.state.selectedFilter } />
                </div>
                
            </div>
        )
    }
    
    loadComponent( component ){
        
        if( !component ){
            return <div>Please load a filter</div>
        }else{
            const CustomComponent = Filters.Components[ component.component ];
            return <CustomComponent onChange={ data => this.runScript( data ) } />
        }
        
    }
    
    runScript( data ){
        
    }
    
};



ReactDOM.render( <App/>, document.querySelector(".container-fluid") );    