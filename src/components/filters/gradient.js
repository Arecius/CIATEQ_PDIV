import React, { Component } from 'react';

import Slider from './../slider';

class Gradient extends Component {

    constructor( props ){
        super( props );

        this.state = {
            threshold:0 
        };
    }

    render() {
        return (
            <div className="container-fluid form-group">
            
                <label>Controles - Gradiente</label>
                {/*
                <div className="row">
                    <input type="radio" name="type" value="magnitude" onClick={ event => {
                        this.setState({ type: event.target.value });
                        this.props.onChange( [ this.state ] );
                        } } /> Sobel
                    <input type="radio" name="type" value="direction" onClick={ event => {
                        this.setState({ type: event.target.value });
                        this.props.onChange( [ this.state ] );
                        } } /> Laplacian
                    <input type="radio" name="type" value="sobel" onClick={ event => {
                        this.setState({ type: event.target.value });
                        this.props.onChange( [ this.state ] );
                        } } /> Sobel
                    <input type="radio" name="type" value="laplacian" onClick={ event => {
                        this.setState({ type: event.target.value });
                        this.props.onChange( [ this.state ] );
                        } } /> Laplacian
                    <input type="radio" name="type" value="canny" onClick={ event => {
                        this.setState({ type: event.target.value });
                        this.props.onChange( [ this.state.type ] );
                        } } /> Canny
                    
                        
                </div>
                */}
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

export default Gradient;