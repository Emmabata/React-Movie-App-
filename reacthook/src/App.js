import './App.css';
import { useState } from "react";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";


function App() {


  // creating a default movie list 
  const [movies, setMovies] = useState([
    {
      title: `Predator`,
      description: `A sneaky alien monster attacks commandos on a jungle mission in South America.`,
      imgSrc : 'https://m.media-amazon.com/images/I/A1zS4rSRsGL._AC_UY327_FMwebp_QL65_.jpg',
      rating: 7.5
    },
    {
      title: `Prey`,
      description: `This horror-thriller from Blumhouse & Hyde Park with Director Franck Khalfoun (Amityville: The Awakening) follows Toby (Logan Miller) as he must survive an island retreat while a sinister force hunts him, leaving bodies in its wake.`,
      imgSrc: 'https://m.media-amazon.com/images/I/71Dgjbdg7oL._AC_UY327_FMwebp_QL65_.jpg',
      rating: 4.0
    },
    {
      title: `Gbemi 2 The Waiting Room`,
      description: `The movie has 2 episodes in total, Each episode is over 65mins long, episode one drops today and two the following week, story centers round two families; Gbemi’s Marriage and Her boss’ Family.`,
      imgSrc: 'https://gospelminds.com/wp-content/uploads/2022/01/Download-Gbemi-2-The-Waiting-Room-Episode-1-Mount-Zion-Film.jpg',
      rating: 5.5
    },
    {
      title: `Piranha`,
      description: `Party-hearty spring breakers at beautiful Lake Victoria come under attack by a school of man-eating piranha in this gory spoof.`,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28f49T3XSbwQEzh328TfPqRU6J7fzH-uBYQ&usqp=CAU',
      rating: 5.0
    },
    {
      title: `The End of the Tour.`,
      description: `A journalist interviews author David Foster Wallace at the conclusion of the promotional tour for his sprawling novel Infinite Jest.`,
      imgSrc: 'https://hbomax-images.warnermediacdn.com/images/GYsci4gOvX0qupQEAAAJK/tile?size=1280x720&format=jpeg&partner=hbocom&v=b4f7eb870be0601046a636823420de79&host=art-gallery.api.hbo.com&w=1200',
      rating: 3.0
    }
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRate, setFilterRate] = useState(0);


  const handleFilterTitle = (input) => {setFilterTitle(input.target.value)};

  const handleFilterRate = (input) => {setFilterRate(parseFloat(input.target.value))};

  const handleAddMovie = () => {
    const NewMovie = {
      title: 'New Movie',
      description: 'A new movie has been added to this list',
      imgSrc: 'https://via.placeholder.com/150',
      rating: 1.0
    };
    setMovies([...movies, NewMovie])
  }

  return (
    <div className="App">
      <h1>Add your favourite movies</h1>
      
      <button className="addButton" onClick={handleAddMovie} >Add your favourite movies</button>

      <Filter 
        filterByRate={handleFilterRate}
        filterByTitle={handleFilterTitle}
      />

      <MovieList movies={movies} filterTitle={filterTitle} filterRate={filterRate} />
    </div>

  );
}

export default App;
