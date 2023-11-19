import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchByQuery } from 'cat-api';
import { FormMovie } from 'components/FormMovie/FormMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';

  const updateQueryString = value => {
    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: value });
  };

  useEffect(() => {
    if (!movieId) return;
    const fetchQuery = async () => {
      setLoading(true);
      try {
        const data = await fetchSearchByQuery(movieId);
        setMovies(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchQuery();
  }, [movieId]);

  return (
    <>
      <FormMovie onSubmit={updateQueryString} />
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error}</p>}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Movies;
