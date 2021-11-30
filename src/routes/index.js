import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header"; 
import Places from "../components/Places";
import CuratorItem from "../components/Curator";
import { LocationContext } from "../contexts/LocationContext";
import { useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { Fragment } from "react/cjs/react.production.min";

const Routes = () => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [filteredPlace, setFilteredPlace] = useState('')

    return (
        <FilterContext.Provider value={{filteredPlace, setFilteredPlace}} >
            <LocationContext.Provider value={{city, setCity, state, setState}}>
                <Header />
                <Switch>
                    <Route path="/:state/:city" element={
                            <Fragment>
                                <Home/>
                                <Places />
                                <CuratorItem />
                            </Fragment>
                        }
                    />
                </Switch>
            </LocationContext.Provider>
        </FilterContext.Provider>
    )
}

export default Routes