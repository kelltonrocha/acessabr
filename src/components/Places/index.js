import React, {useContext} from "react";
import { FilterContext } from "../../contexts/FilterContext";
import Slider from "../Slider";
import './style.scss';

const Places = () => {
    const {filteredPlace, setFilteredPlace} = useContext(FilterContext)

    return (
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">
                    { filteredPlace ? filteredPlace + 's ' : 'Locais ' }
                    <span>Acessíveis</span></h2>
                <div className="places__select">
                    <h5>Ordenar por:</h5>
                    <select>
                        <option>distância</option>
                        <option>alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider/>
            </div>
        </section>
    )
}

export default Places;