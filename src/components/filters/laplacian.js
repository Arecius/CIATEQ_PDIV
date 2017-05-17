import React, { Component } from 'react';

import Slider from './../slider';

class Laplacian extends Component {

    constructor( props ){
        super( props );

        this.state = {
            threshold:0 
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
            
                <label>Controles - Laplaciano</label>

                <div className="row">
                    <Slider title="Pendiente de la funcion" 
                        onChange={ threshold => { 
                            this.setState( { threshold } );
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

export default Laplacian;