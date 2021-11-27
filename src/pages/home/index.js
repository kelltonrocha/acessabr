import React, { useContext, useEffect, useState } from 'react';
import './style.scss';
import imageDestack from '../../images/Imagem-Destaque.png';
import Pills from '../../components/Pills';
import { useParams } from 'react-router';
import { LocationContext } from '../../contexts/LocationContext';

const PLACES = [
    'Praça','Parque','Igreja','Hotel','Restaurante','Farmácia','Lojas','Aquário'
]

const Home = () => {
    const [selectedPill, setSelectedPill] = useState('')
    
    const {city, state} = useParams()
    const {setCity, setState} = useContext(LocationContext)

    useEffect(() => {
        setCity(city)
        setState(state)
    }, [city, state] )

    return(
        <main id="main-content" className="home__container">
            <div className="home__col">
                <h1 className="home__title">{city} para todos</h1>
                <div className="home__image home__image--destack hide-desktop">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>
                <p className="home__text">Nossa missão é facilitar o encontro 
                entre lugares inclusivos e pessoas que buscam alternativas culturais para sair de casa, 
                com a mobilidade que todo cidadão precisa.</p>
                <p className="home__text">Checamos 10 itens essenciais de acessibilidade para pessoas 
                com deficiência em diversos pontos da cidade.</p>
                <div className="home__pills">
                    {
                        PLACES.map((item) => (
                            <Pills
                                local={item}
                                selected={selectedPill === item}
                                onClick={ () => setSelectedPill(item) }
                            />
                        ))
                    }
                    
                </div>
            </div>
            <div className="home__col hide-mobile">
                <div className="home__image home__image--destack ">
                    <img src={imageDestack} alt="Imagem destaque cadeirante" />
                </div>                
            </div>
        </main>
    )
}

export default Home;