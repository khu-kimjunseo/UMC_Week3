import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Pages/Movies/Movies";
import Celebrity from "./Components/Pages/Celebrity/Celebrity";
import Home from "./Components/Pages/Home/Home";
import TV from "./Components/Pages/TVs/TVs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./Components/Pages/Movies/Movie/MovieDetail";
import Login from "./Components/Login";
import TVDetail from "./Components/Pages/TVs/TV/TVDetail";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn} onLoggedOut={()=>setIsLoggedIn(!isLoggedIn)}></Header>
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="/movies" element={<Movies></Movies>}></Route>
                    <Route path="/movie/:title" element={<MovieDetail></MovieDetail>}></Route>
                    <Route path="/celebrity" element={<Celebrity></Celebrity>}></Route>
                    <Route path="/tv" element={<TV></TV>}></Route>
                    <Route path="/tv/:title" element={<TVDetail></TVDetail>}></Route>
                    <Route path='/login' element={<Login onLoggedIn={()=>setIsLoggedIn(!isLoggedIn)}></Login>}></Route>
                    <Route path="/*" element={<NotFound></NotFound>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
