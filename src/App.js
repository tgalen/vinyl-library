import { useState } from "react";
import Header from "./components/Header";

const albumCardStyle = {
  height: "400px",
  width: "300px",
  display: "inline-block",
  margin: "1%",
  boxSizing: "border-box",
};

const cardContianerStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "80%",
  textAlign: "center",
  margin: "auto",
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const SEARCH_ENDPOINT = "https://api.spotify.com/v1/search";

  const handleAuthorize = () => {
    const CLIENT_ID = "1debe1e800a747d9bd9ea97eff1d12fe";
    const REDIRECT_URI = "http://localhost:3000";
    let URL = "https://accounts.spotify.com/authorize";
    URL += "?response_type=token";
    URL += "&client_id=" + encodeURIComponent(CLIENT_ID);
    URL += "&redirect_uri=" + encodeURIComponent(REDIRECT_URI);
    window.location = URL;
  };

  const hashData = window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      if (item) {
        // can remove if statement?
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});

  let token = hashData.access_token;

  const authOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "json",
    },
  };
  const handleInputOnchange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    fetch(`${SEARCH_ENDPOINT}?q=${searchTerm}&type=album`, authOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setSearchResults(data.albums.items); // array of albums
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Header />
      <button onClick={handleAuthorize}>Authorize</button>
      <h5>{window.location.hash}</h5>
      <h5>{token}</h5>
      <h5>Search Term: {searchTerm}</h5>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputOnchange}
      ></input>
      <button onClick={handleSearch}>Search</button>

      {searchResults && (
        <div style={cardContianerStyle}>
          {/* <div style={albumCardStyle}>
            <h3>{searchResults[0].name}</h3>
            <h5>Artist: {searchResults[0].artists[0].name}</h5>
            <img
              alt={searchResults[0].name}
              src={searchResults[0].images[1].url}
            />
          </div> */}
          {searchResults.map((album) => {
            return (
              <div key={album.id} style={albumCardStyle}>
                <h3>{album.name}</h3>
                <h5>Artist: {album.artists[0].name}</h5>
                <img alt={album.name} src={album.images[1].url} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
