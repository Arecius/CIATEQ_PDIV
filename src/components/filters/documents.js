import React, { Component } from 'react';

import Slider from './../slider';

class Documents extends Component {

    constructor( props ){
        super( props );

        this.state = {
            size:3 
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
            
                <label>Controles - Procesamiento de documentos</label>

                <div className="row">
                    <Slider title="A" 
                        min={3}
                        max={20}
                        onChange={ size => { 
                            this.setState( { size } );
                            this.props.onChange( Object.values( this.state ) );
                            } }/>
                </div>
            </div>
        )
    }   
    
};

export default Documents;