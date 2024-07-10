import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState("true");
  const [movie, setMovie] = useState("");

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        movie && (
          <MovieDetail
            key={movie.id}
            coverImage={movie.large_cover_image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
            descriptionFull={movie.description_full}
          />
        )
      )}
    </div>
  );
}
export default Detail;
