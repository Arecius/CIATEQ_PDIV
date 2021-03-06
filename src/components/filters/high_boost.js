import React, { Component } from 'react';

import Slider from './../slider';

class HighBoost extends Component {

    constructor( props ){
        super( props );

        this.state = {
            threshold:0 
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
            
                <label>Controles - High Boost</label>

                <div className="row">
                    <Slider title="A" 
                        min={0}
                        max={10}
                        onChange={ threshold => { 
                            this.setState( { threshold } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                </div>
            </div>
        )
    } 
    
};

export default HighBoost;