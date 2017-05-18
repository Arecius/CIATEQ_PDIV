import React, { Component } from 'react';

import Slider from '../slider';
class MovingAverage extends Component {

    constructor( props ){
        super( props );

        this.state = {
            mask:3
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
                <label>Controles - Filtro Promediado Movil</label>
                <div className="row">

                    <Slider title="Tamaño de la mascara" 
                        min={3}
                        max={9}
                        step={1}
                        onChange={ mask => { 
                            this.setState( { mask } );
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

export default MovingAverage;