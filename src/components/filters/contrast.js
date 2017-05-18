import React, { Component } from 'react';
import Slider from '../slider';

class Contrast extends Component {

    constructor( props ){
        super( props );

        this.state = {
            low: 0,
            high: 1
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
                <label>Controles - Constrast Stretching</label>
                <div className="row">
                    
                    <Slider title="Limite inferior" 
                        min={0}
                        max={1}
                        value={this.state.low}
                        onChange={ low => { 
                            this.setState( { low } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                    
                </div>
                <div className="row">
                    
                    <Slider title="Limite Superior" 
                        min={0}
                        max={1}
                        value={this.state.high}
                        onChange={ high => { 
                            this.setState( { high } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                    
                </div>
            </div>
        )
    }
        
    
};

export default Contrast;