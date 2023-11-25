import React from "react";
import { Provider } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./Components/Pages/Movies/Movies";
import Celebrity from "./Components/Pages/Celebrity/Celebrity";
import Home from "./Components/Pages/Home/Home";
import TV from "./Components/Pages/TVs/TVs";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Header from "./Components/Header";
import MovieDetail from "./Components/Pages/Movies/Movie/MovieDetail";
import Login from "./Components/Pages/Login/Login";
import TVDetail from "./Components/Pages/TVs/TV/TVDetail";
import store from "./store";
import Movies2 from "./Components/Pages/Movies/Movies2";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Header></Header>
                    <Routes>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/movies" element={<Movies></Movies>}></Route>
                        <Route path="/movie/:title" element={<MovieDetail></MovieDetail>}></Route>
                        <Route path="/movies2" element={<Movies2></Movies2>}></Route>
                        <Route path="/celebrity" element={<Celebrity></Celebrity>}></Route>
                        <Route path="/tv" element={<TV></TV>}></Route>
                        <Route path="/tv/:title" element={<TVDetail></TVDetail>}></Route>
                        <Route path='/login' element={<Login></Login>}></Route>
                        <Route path="/*" element={<NotFound></NotFound>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
