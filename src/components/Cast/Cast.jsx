import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader';
import css from './Cast.module.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDczNGNiNzIzOWQyZTFiMjZkOGZlYmE4MDQwNDAyZSIsInN1YiI6IjY1NTNiYjNiNTM4NjZlMDBlMjkyMDhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uunfdBOdrmQaK9huEqZFI4Dw8Rvxh4E7U-BfCCVUHA0',
  },
};
export default function Cast() {
  const { moviesId } = useParams();
  const [dataCast, setDataCast] = useState();
  const [loader, setLoader] = useState(null);
  const [error, setError] = useState(null);
  // console.log(moviesId);

  useEffect(() => {
    async function getDataCast() {
      if (!moviesId) {
        return;
      }

      try {
        setLoader(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${moviesId}/credits?language=en-US`,
          options
        );
        setDataCast(data.cast);
        // console.log(data.cast)
      } catch (error) {
        setError(error);
      } finally {
        setLoader(null);
      }
    }

    getDataCast();
  }, [moviesId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      {dataCast && (
        <ul className={css.list}>
          {dataCast.map(({ character, profile_path, name }) => (
            <li key={`${character} ${name}`} className={css.item}>
              <div className={css.wrapper}>
                <div className={css.photoCard}>
                  <img
                    className={css.img}
                    src={
                      profile_path
                        ? [`https://image.tmdb.org/t/p/w500/${profile_path} `]
                        : defaultImg
                    }
                    width="190"
                    height="230"
                    alt=""
                  />
                </div>
                <p className={css.text}>{name}</p>
                <p className={css.text}>Character : {character}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {loader && <Loader />}
      {error && <p>Somesing went wrong...</p>}
    </div>
  );
}
