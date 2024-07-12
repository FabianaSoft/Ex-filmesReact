import api from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})


    async function getMovie() {
        const response = await api.get(`/?i=${id}`)
        setMovie(response.data)
    }

    useEffect(() => {
        getMovie()
    }, [])

    return (
        <div>
            <img src={movie.Poster} alt={movie.Title} />
            <h1>{movie.Title}</h1>
            <h1>Genero: {movie.Genre}</h1>
            <h1>Atores: {movie.Actors}</h1>
            <h1>Pontuacao IMDB: {movie.imdbRating} - {movie.imdbVotes} </h1>
            <h3>Plot: {movie.Plot} </h3>
        </div>
    );
}

export default Details;