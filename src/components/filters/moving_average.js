import React, { Component } from 'react';

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
                    
                    <input type="radio" name="mask" value="3" onClick={ event => {
        this.setState({ mask: event.target.value });
        this.props.onChange( [ this.state.mask ] );
    } } /> 3x3
                    <input type="radio" name="mask" value="5" onClick={ event => {
        this.setState({ mask: event.target.value });
        this.props.onChange( [ this.state.mask ] );
    } } /> 5x5

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