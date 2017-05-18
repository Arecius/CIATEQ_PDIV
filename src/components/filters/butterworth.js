import React, { Component } from 'react';

import Slider from './../slider';

class LPButterworth extends Component {

    constructor( props ){
        super( props );

        this.state = {
            grade:1,
            cutoff:0
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
            
                <label>Controles -  Paso bajo Butterworth</label>

                <div className="row">
                    <Slider title="Grado" 
                        min={1}
                        max={10}
                        onChange={ grade => {
                            this.setState( { grade } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                    <Slider title="Corte" 
                        min={1}
                        max={50}
                        onChange={ cutoff => { 
                            this.setState( { cutoff } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                </div>
            </div>
        )
    }

    handleOnChange( event ){
        this.setState({ mask: event.target.value });
        this.props.onChange( [ this.state.mask ] );
    }
        
    
};

export default LPButterworth;