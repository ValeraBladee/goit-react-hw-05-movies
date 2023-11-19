import { Suspense, useRef, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'cat-api';
import {
  Container,
  TextInfo,
  Overview,
  StyledLink,
  ListInfo,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchQuery = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(movieId);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuery();
  }, [movieId]);

  if (!movies) {
    return;
  }

  const { title, release_date, poster_path, overview, genres, vote_average } =
    movies;

  return (
    <>
      <StyledLink to={backLinkLocationRef.current}>go back</StyledLink>
      {movies && (
        <Container>
          <img
            width="300px"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
            }
            alt={title}
          />
          <TextInfo>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h2>Overview</h2>
            <Overview>{overview}</Overview>
            <h3>Genres</h3>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </TextInfo>
        </Container>
      )}
      {error && <p>{error}</p>}
      {loading && <TailSpin color="green" />}
      <Title>Additional information</Title>
      <ul>
        <ListInfo>
          <Link to="cast">Cast</Link>
        </ListInfo>
        <ListInfo>
          <Link to="reviews">Reviews</Link>
        </ListInfo>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
