import React, { Component } from 'react';

const ImageStyle = {
    padding : "10px"
};

const  ImageDisplay = props => {

    var onInputChange = ( event ) => {

        if( event.target.files.length > 0 ){
            let file = event.target.files[0];
            let reader = new FileReader();

            reader.onload = event =>{
                props.onChange( event.target.result );
            }

            reader.readAsDataURL( file );
        }
        
    }
    
    return (
        
        <div className="container-fluid" >

            <div className="row" >
            
                <input type='file' onChange={ onInputChange }/>
            
            </div>

            <div className="row" >

                <div className="col-md-6" >
                    <div style={ImageStyle}>
                        <div className="row"> 
                            <label>Imagen Original</label>
                        </div>
                        <div className="row"> 
                            <img className="img-responsive" src={ props.image }/>
                        </div> 
                    </div>
                </div>

                <div className="col-md-6" >
                    <div style={ImageStyle}>
                        <div className="row">
                            <label>Imagen Procesada</label>
                        </div>
                        <div className="row"> 
                            <img className="img-responsive" src={ props.processedImage }/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );

};



export default ImageDisplay;