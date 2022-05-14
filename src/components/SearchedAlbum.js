const albumCardStyle = {
  height: "400px",
  width: "310px",
  display: "inline-block",
  margin: "3%",
  boxSizing: "border-box",
};

const SearchedAlbum = ({ info, collection, setCollection }) => {
  const handleAddToCollection = (album) => {
    if (collection !== null) {
      const currentCollection = [...collection, album];
      setCollection(currentCollection);
    } else {
      setCollection([album]);
    }
    console.log(collection);
  };

  return (
    <div key={info.id} style={albumCardStyle}>
      <h3>{info.name}</h3>
      <h5>Artist: {info.artists[0].name}</h5>
      <button onClick={() => handleAddToCollection(info)}>Add</button>
      <img alt={info.name} src={info.images[1].url} />
    </div>
  );
};

export default SearchedAlbum;

// title={album.name}
//                   artist={album.artists[0].name}
//                   cover={album.images[1].url}
//                   albumInfo={album}
