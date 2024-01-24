/* eslint-disable react/prop-types */

function ListAnime({ animes, onSelectedAnime }) {
  return (
    <div>
      <ul className="list list-anime">
        {animes?.map((anime) => (
          <li key={anime.mal_id} onClick={() => onSelectedAnime(anime.mal_id)}>
            <img src={anime.image} alt={`${anime.title} cover`} />
            <h3>{anime.title}</h3>
            <div>
              <p>
                <span>{anime.year}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListAnime;
