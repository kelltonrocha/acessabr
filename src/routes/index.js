import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/Header"; 
import { LocationContext } from "../contexts/LocationContext";
import { useState } from "react";

const Routes = () => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    return (
        <LocationContext.Provider value={{city, setCity, state, setState}}>
            <Header />
            <Switch>
                <Route path="/:state/:city" element={<Home />} />
            </Switch>
        </LocationContext.Provider>
    )
}

export default Routes