import React from "react";
import './ImageLinkForm.css';
const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This Program process magic tricks on the image'}
            </p>
            
            <div className="center">
                <div className="pa4 br3 shadow-5 center form">
                    <input className="f4 pa2 w-70 br4" type="text" />
                    <button className="ml2 br4 w-30 f3 link pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;