/* eslint-env node */
import React, { Component } from 'react';


class Slider extends Component {
    constructor( props ){
        super( props );

        this.state = {
            value: this.props.min
        };


    }

    render(){
        return (
            
            <div className="container-fluid" >
                <div className="row">
                    <label>{`${ this.props.title } - ${this.state.value}`}</label>
                </div>
                <div className="row">

                    <input className="form-control" type="range" 
                        min={this.props.min*100} 
                        max={this.props.max*100} 
                        step={this.props.step*100}
                        value={this.state.value*100}
                        onChange={ (event) => { 
                            this.setState( { value: Number( event.target.value * 0.01 ).toFixed( 2 ) } )
                            this.props.onChange( this.state.value ) } } />
                    
                </div>  
            </div>
        
        );
    }


    
}

export default Slider;