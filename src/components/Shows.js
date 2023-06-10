import Show from "./Show";

const Shows = ({ shows }) => {
  return (
    <div>
      {shows.map((season) => (
        <Show key={season.id} show={season} />
      ))}
    </div>
  );
};

export default Shows;
