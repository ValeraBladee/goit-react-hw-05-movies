export default function MovieDetailCard({ cardDetails }) {
  console.log(cardDetails);
  return (
    <>
      {cardDetails && (
        <>
          <button type="button">Back</button>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${cardDetails.poster_path}`}
              alt=""
              width="350"
              height="230"
            />
          </div>
          <div>
            {}
            <p></p>
          </div>
        </>
      )}
    </>
  );
}
