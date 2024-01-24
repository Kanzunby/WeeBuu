/* eslint-disable react/prop-types */

function DetailAnime({ selectedAnime }) {
  return (
    <div>
      <div className="details">
        <header>
          <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
          <div className="details-overview">
            <h2>{selectedAnime.title}</h2>
            <p>
              {selectedAnime.year} &bull; {selectedAnime.score}
            </p>
          </div>
        </header>
        <section>
          <p>
            <em>{selectedAnime.synopsis}</em>
          </p>
        </section>
      </div>
    </div>
  );
}

export default DetailAnime;
