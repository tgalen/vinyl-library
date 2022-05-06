import { useState } from "react";
import Header from "./components/Header";
import Collection from "./components/Collection";
import SearchSpotify from "./components/SearchSpotify";

function App() {
  const [collection, setCollection] = useState(null);

  return (
    <div>
      <Header />
      <Collection collection={collection} setCollection={setCollection} />
      <SearchSpotify collection={collection} setCollection={setCollection} />
    </div>
  );
}

export default App;
