import React, { Component } from 'react';
import Slider from '../slider';

class Logaritmic extends Component {

    constructor( props ){
        super( props );

        this.state = {
            constant: 1
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
                <label>Controles - Transformacion Logaritmica</label>
                <div className="row form-group">
                    <div>
                        <Slider title="Constante Logaritmica" 
                            min={0}
                            max={1}
                            onChange={ constant => { 
                                
                                this.setState( { constant } );
                                this.props.onChange( Object.values( this.state ) );
                                } }/>
                    </div>
                    {/*<input className="form-control" type="button" value="Aplicar filtro" onClick={ event => { props.onChange() } } />*/}
                </div>
            </div>
        )
    }
        
    
};

export default Logaritmic