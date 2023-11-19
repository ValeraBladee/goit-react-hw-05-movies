import { useEffect, useState } from 'react';
import { fetchTrending } from 'cat-api';
import { Link, useLocation } from 'react-router-dom';
import { Title } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [nameTrends, setNameTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchTrendingName = async () => {
      setLoading(true);
      try {
        const data = await fetchTrending();
        setNameTrends(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchTrendingName();
    return () => controller.abort();
  }, [setNameTrends]);

  return (
    <>
      <Title>Trending today</Title>
      <ul>
        {nameTrends.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
      {loading && <div>Loading...</div>}
    </>
  );
};

export default Home;
