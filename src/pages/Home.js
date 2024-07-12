import api from "../api";
import { useEffect, useState } from "react";

function Home() {

  const [movies,setMovies] = useState([]) 
  

  async function getMovies() {
    const response = await api.get("/?s=power%20rangers")
    setMovies(response.data.Search)
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      {
        movies.map(movie=>(
          <div key={movie.imdbID}> 
          <a href={`/details/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <h3>Ano: {movie.Year} </h3>
            </a>
          </div>
        ))
      }
    </div>
  );
}

export default Home;