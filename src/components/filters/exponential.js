import React, { Component } from 'react';
import Slider from '../slider';

class Exponential extends Component {

    constructor( props ){
        super( props );

        this.state = {
            constant: 1
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
                <label>Controles - Transformacion Exponencial</label>
                <div className="row form-group">
                    <div>
                        <Slider title="Constante Exponencial" 
                            onChange={ constant => { 
                                this.setState( { constant } );
                                this.props.onChange( Object.values( this.state ) );
                                } }/>
                    </div>
                </div>
            </div>
        )
    }
        
    
};

export default Exponential;