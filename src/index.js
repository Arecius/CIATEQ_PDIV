"use strict";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

import FilterSelector from './components/filter_selector';
import ImageDisplay from './components/img_display';
import FilterDetail from './components/filter_detail';
import Filters from './filters';


//const webOctave = 'http://node30.codenvy.io:33426/api';
const webOctave = 'http://localhost:8081/api';

class App extends Component {
    
    constructor( props ){
        
        super( props );
        
        this.state = {
            
            selectedFilter : null,
            image: null,
            processedImage: null,
            imageFile: null,
            assetImage:null,
            filterTag: <div />
        };


    }
    
    render(){
        
        return (
            <div className="row" >
                <FilterSelector 
                    filters={ Filters } 
                    onFilterSelected={ selectedFilter => { this.setState( { selectedFilter } ); } } />
                <div className="row">
                    <div className="col-md-7">
                        <ImageDisplay 
                            onChange={ ( image, imageFile ) => this.setState( { image, imageFile } ) } 
                            image={ this.state.image }  
                            processedImage={ this.state.processedImage }
                            assetImage={this.state.assetImage}
                            />
                    </div>
                    <div className="col-md-5">
                        {this.loadComponent( this.state.selectedFilter )}
                    </div>
                </div>
                <FilterDetail filter={ this.state.selectedFilter } />   
            </div>
        )
    }
    
    loadComponent( component ){
        
        if( !component ){
            return (
                <div>
                    <label>Controles</label>
                    <p>Seleccione un filtro para mostrar su controles</p>
                </div>
            );
        }else{
        
            const runScript = _.debounce( data => { this.runScript( component.script, data ) }, 300 );

            const CustomComponent = Filters.Components[ component.component ];
            return <CustomComponent onChange={ runScript } />
        }
        
    }
    
    runScript( scriptName, data ){
        //Make a post and a get request
        
        let requestBody = new FormData();

        requestBody.append( "scriptName", scriptName );
        
        if( data ){
            requestBody.append( "scriptVars", JSON.stringify( data ) );
        }

        requestBody.append( "image", this.state.imageFile );
        

        let headers = new Headers();
        


        fetch( `${webOctave}/createJob`, {
            method: 'POST', 
            headers: headers,
            body: requestBody
        }).then( ( response ) => {
            return response.json();
        }).then( jsonObject => {
            let promises = Object.values( jsonObject )
                            .map( id =>{
                                return fetch( `${webOctave}/retrieve?id=${id}`);
                            })
            return Promise.all( promises )
            //return fetch( `${webOctave}/retrieve?id=${jsonObject.retrieveId}`);
        }).then( responses => {
            return Promise.all( responses.map( response => { return response.blob() } ));
            //return response.blob();
        }).then( blobs => {
            this.setState( { processedImage: URL.createObjectURL(blobs[0]), assetImage:URL.createObjectURL(blobs[1])  });
        })

    }
    
};



ReactDOM.render( <App/>, document.querySelector("#container") );    