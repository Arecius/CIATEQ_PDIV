/* eslint-env node */
import React, { Component } from 'react';


class Slider extends Component {
    constructor( props ){
        super( props );

        this.state = {
            lowVal: 0,
            highVal: 1,
            value: 0
        };


    }

    render(){
        return (
            
            <div className="container-fluid" >
                <div className="row">
                    <label>{`${ this.props.title } - ${this.state.value}`}</label>
                </div>
                <div className="row">
                    <div className="col-md-3" >
                        <input className="form-control" type="number" value="1" min="0" max="9999" 
                            onChange={ event => this.setState( { lowVal: event.target.value } ) }
                            value={ this.state.lowVal } />
                    </div>
                    <div className="col-md-6" >
                        <input className="form-control" type="range" min="0" max="100" step="1" 
                            onChange={ (event) => { 
                                this.setState( { value: Number( event.target.value * ( this.state.highVal - this.state.lowVal ) * 0.01 ).toFixed( 2 ) } )
                                this.props.onChange( this.state.value ) } } />
                    </div>
                    <div className="col-md-3" >
                        <input className="form-control" type="number" value="1" min="1" max="9999"
                            onChange={ event => this.setState( { highVal: event.target.value } ) }
                            value={ this.state.highVal }/>
                    </div>
                </div>  
            </div>
        
        );
    }


    
}

export default Slider;