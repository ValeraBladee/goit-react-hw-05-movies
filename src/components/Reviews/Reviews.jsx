import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import ErrorOccurred from 'components/Error/Error';
import css from './Reviews.module.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmIwMzFhYWNmYjFkYWIyMGEzMzNiZDE0NGU0Njg3OCIsInN1YiI6IjY1NDk0YzBmMWFjMjkyN2IyYzgxNmMxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CY3OvlYHRknA-27ebTHqrTp-OgJhbuj4a41Q0rqqOg0',
  },
};

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState();
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!moviesId) {
      return;
    }

    async function getReviews() {
      try {
        setLoader(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId}/reviews?language=en-US&page=1`,
          options
        );
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoader(null);
      }
    }

    if (moviesId) {
      getReviews();
    }
  }, [moviesId]);

  return (
    <div>
      {reviews && reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map(({ author, content }) => (
            <li key={content} className={css.item}>
              <h2>Author : {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {loader && <Loader />}
      {error && <p>Somesing went wrong...</p>}
      {reviews !== 0 && <ErrorOccurred />}
    </div>
  );
}
