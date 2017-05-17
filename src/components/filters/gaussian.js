import React, { Component } from 'react';

import Slider from './../slider';

class HPGaussian extends Component {

    constructor( props ){
        super( props );

        this.state = {
            sigma:1
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
            
                <label>Controles - Gaussian</label>

                <div className="row">
                    <Slider title="Grade" 
                        min={1}
                        max={10}
                        onChange={ sigma => {
                            this.setState( { sigma } );
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

export default HPGaussian;