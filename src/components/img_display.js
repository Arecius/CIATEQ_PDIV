import React, { Component } from 'react';

const ImageStyle = {
    padding : "10px"
}
class ImageDisplay extends React.Component {

    constructor( props ) {
        
        super( props )

        this.state = { imageURL: null }
    }

    render() {

        return (
            
            <div className="container-fluid" >

                <div className="row" >
                
                    <input type='file' onChange={ this.onInputChange }/>
                
                </div>
 
                <div className="row" >

                    <div className="col-md-6" >
                        <div style={ImageStyle}>
                            <div className="row"> 
                                <label>Imagen Original</label>
                            </div>
                            <div className="row"> 
                                <img className="img-responsive" src={ this.state.imageURL }/>
                            </div> 
                        </div>
                    </div>

                    <div className="col-md-6" >
                        <div style={ImageStyle}>
                            <div className="row">
                                <label>Imagen Procesada</label>
                            </div>
                            <div className="row"> 
                                <img className="img-responsive" src="http://placehold.it/1200x600"/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }

    onInputChange = ( event ) => {
        console.log("File loaded");
        console.log( event.target.value );
        if( event.target.files.length >0 ){
            let file = event.target.files[0];
            let reader = new FileReader();
    
            reader.onload = event =>{
                this.setState( { imageURL: event.target.result })
            }

            reader.readAsDataURL( file );
        }
        
    }

};

export default ImageDisplay;