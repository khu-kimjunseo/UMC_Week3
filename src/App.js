import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Pages/Movies/Movies";
import Celebrity from "./Components/Pages/Celebrity/Celebrity";
import Home from "./Components/Pages/Home/Home";
import TV from "./Components/Pages/TV/TV";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./Components/Pages/Movies/MovieDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/movies" element={<Movies></Movies>}></Route>
                    <Route path="/movie/:title" element={<MovieDetail></MovieDetail>}></Route>
                    <Route path="/celebrity" element={<Celebrity></Celebrity>}></Route>
                    <Route path="/tv" element={<TV></TV>}></Route>
                    <Route path="/*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
