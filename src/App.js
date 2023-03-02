import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = ' https://www.omdbapi.com/?i=tt3896198&apikey=d901a5c7';


const App = () => {

const [movies, SetMovies] = useState([]);

const[searchTerm, SetSearchTerm] = useState('');

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

SetMovies(data.Search);
}

useEffect(() => {
searchMovies('Spiderman');
}, []);

    return(
        <div className="app">
            <h1>MOVIE EMPIRE</h1>
            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => SetSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ?(
                    <div className="container">
                        {movies.map((movie) =>(
                            <MovieCard movie={movie}/>
                        ) )}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

            
        </div>
    );
}

export default App;
