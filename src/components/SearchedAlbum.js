const albumCardStyle = {
  height: "400px",
  width: "300px",
  display: "inline-block",
  margin: "1%",
  boxSizing: "border-box",
};

const SearchedAlbum = ({ key, artist, cover, title }) => {
  return (
    <div key={key} style={albumCardStyle}>
      <h3>{title}</h3>
      <h5>Artist: {artist}</h5>
      <img alt={title} src={cover} />
    </div>
  );
};

export default SearchedAlbum;
