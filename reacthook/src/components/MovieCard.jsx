 //a component for displaying a single movie card
 import "./MovieCard.css"
const MovieCard = ({movie}) => {

  return(
    <div className="movieCard" >

      <img 
        src={movie.imgSrc}
        alt={movie.title}
        style={{width:"300px"}}
      />
      <div className="TitDesRate">
      <h1>
        {movie.title}
      </h1>

      <p>
        {movie.description}
      </p>

      <p>
        Movie Rating : {movie.rating}
      </p>

      </div>
    </div>
  )
}

export default MovieCard;