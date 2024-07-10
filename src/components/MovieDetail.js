import PropTypes from "prop-types";

function MovieDetail({
  coverImage,
  title,
  year,
  rating,
  runtime,
  genres,
  descriptionFull,
}) {
  return (
    <div>
      <img src={coverImage} alt={title}></img>
      <h2>
        {title} ({year})
      </h2>
      <hr />
      <p>평점 : {rating}</p>
      <p>상영 시간 : {runtime}분</p>
      <ul>
        장르
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
      <p>
        줄거리
        <br />
        <br />
        {descriptionFull}
      </p>
    </div>
  );
}

MovieDetail.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  descriptionFull: PropTypes.string.isRequired,
};

export default MovieDetail;
