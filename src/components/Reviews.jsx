import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'cat-api';

const Reviews = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchQuery = async () => {
      setLoading(true);
      try {
        const data = await fetchReviews(movieId);
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
      {movies.length !== 0 ? (
        <ul>
          {movies.map(({ id, content, author }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (<h2>We don't have any reviews for this movie</h2>)}
      {/* {movies.length > 0 && <h2>We don't have any reviews for this movie</h2>} */}
      {error && <p>{error}</p>}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Reviews;
