const Show = ({ show }) => {
  return (
    <div className="show-container">
      <h1 className="show-title">{show.title}</h1>
      <div className="episode-table">
        {show.episodes.map((episode) => (
          <div className="episode" key={episode.id}>
            <p className="episode-name">{episode.title}</p>
            <p className="episode-views">
              Views: {episode.views.toLocaleString("en-US")}
            </p>
          </div>
        ))}
      </div>
      <h3 className="total-views">
        Total views of the season:{" "}
        {show.episodes
          .reduce((prevValue, episode) => prevValue + episode.views, 0)
          .toLocaleString("en-US")}{" "}
      </h3>
    </div>
  );
};

export default Show;
