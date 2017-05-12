"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FilterSelector from './components/filter_selector';
import ImageDisplay from './components/img_display';
import FilterDetail from './components/filter_detail';
import Filters from './filters';

const webOctave = 'http://localhost:8080/api';

class App extends Component {
    
    constructor( props ){
        
        super( props );
        
        this.state = {
            
            selectedFilter : null,
            image: null,
            processedImage: null,
            imageFile: null,
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
                        <ImageDisplay 
                            onChange={ ( image, imageFile ) => this.setState( { image, imageFile } ) } 
                            image={ this.state.image }  
                            processedImage={ this.state.processedImage }/>
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
            return <CustomComponent onChange={ data => this.runScript( component.script, data ) } />
        }
        
    }
    
    runScript( scriptName, data ){
        //Make a post and a get request
        let scriptVars = data || {};
        
        let requestBody = new FormData();

        requestBody.append( "scriptName", scriptName );
        requestBody.append( "scriptVars", JSON.stringify( {test:"test",test2:"test2"} ) );
        requestBody.append( "image", this.state.imageFile );
        

        let headers = new Headers();
        


        fetch( `${webOctave}/createJob`, {
            method: 'POST', 
            headers: headers,
            body: requestBody
        }).then( ( response ) => {
            return response.json();
        }).then( jsonObject => {
           return fetch( `${webOctave}/retrieve?id=${jsonObject.retrieveId}`);
        }).then( response => {
            return response.blob();
        }).then( blob => {
            this.setState( { processedImage: URL.createObjectURL(blob) });
        })

    }
    
};



ReactDOM.render( <App/>, document.querySelector(".container-fluid") );    