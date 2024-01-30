import './App.css';
import {useState, useEffect} from "react";

import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';

function App() {
  const apiKey = "ca3a6e71";

  //useEffect note: [] means that this will run on the first render only
  useEffect(()=> {

    getMovie("Clueless");
  }, []);

  const [movie, setMovie] = useState(null);

  //function that gets movies
  const getMovie = async(searchTerm) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
      const data = await response.json();
      setMovie(data);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h1>React Movie Search</h1>
      <Form moviesearch={getMovie}></Form>
      <MovieDisplay movie={movie}></MovieDisplay>
    </div>
  );
}

export default App;
