import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {Routes} from "react-router";
import Home from "./Home";
import PooClassifier from "./PooClassifier";
import {foodPageURL, homePageURL, pooPageURL, sleepPageURL} from "./URLS";
import FoodLog from "./FoodLog";
import Sleep from "./Sleep";

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path={homePageURL} element={<Home />} />
                    <Route path={pooPageURL} element ={<PooClassifier/>}/>
                    <Route path={foodPageURL} element={<FoodLog/>} />
                    <Route path={sleepPageURL} element={<Sleep/>} />
                </Routes>
            </div>
        </Router>
    );
}