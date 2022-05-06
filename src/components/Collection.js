const collectionStyle = { textAlign: "center" };

const Collection = ({ collection, setCollection }) => {
  return (
    <div style={collectionStyle}>
      <h1>Collection</h1>
      {collection ? (
        collection.map((album) => {
          return <div></div>;
        })
      ) : (
        <h1>Such empty. Add some records by searching</h1>
      )}
    </div>
  );
};

export default Collection;
