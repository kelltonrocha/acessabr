import React from "react";
import './style.scss';
import curatorPhoto from '../../images/kellton-rocha.jpg';

const Curator = () => {
    return(
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador Kellton Rocha"/>
            </div>
            <div className="curator__details">
                <div>
                    <h3>Kellton Rocha</h3>
                    <h6>Curadoria</h6>
                </div>                    
                <p>Analista de Sistemas desde 2007, atualmente na Secretaria de Saúde do Estado do Rio Grande do Norte</p>
            </div>
        </div>
    )
}

export default Curator