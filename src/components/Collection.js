const collectionStyle = { textAlign: "center" };

const Collection = ({ collection }) => {
  return (
    <div style={collectionStyle}>
      <h1>Collection</h1>
      {/* <h5>{collection}</h5> */}

      {collection ? (
        collection.map((album) => {
          return (
            <div>
              <h3>{album.name}</h3>
            </div>
          );
        })
      ) : (
        <h1>Such empty. Add some records by searching</h1>
      )}
      {console.log(collection)}
    </div>
  );
};

export default Collection;
