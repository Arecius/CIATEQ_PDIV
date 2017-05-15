import React, { Component } from 'react';
import Slider from '../slider';

class Contrast extends Component {

    constructor( props ){
        super( props );

        this.state = {
            slope: 1,
            luminosity: 2
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
                <label>Controles - Constrast Stretching</label>
                <div className="row">
                    
                    <Slider title="Pendiente de la funcion" 
                        onChange={ slope => { 
                            this.setState( { slope } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                    
                </div>
                <div className="row">
                    
                    <Slider title="Constante de Luminosidad" 
                        onChange={ luminosity => { 
                            this.setState( { luminosity } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                    
                </div>
            </div>
        )
    }
        
    
};

export default Contrast;