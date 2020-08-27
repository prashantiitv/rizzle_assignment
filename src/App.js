import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import db from "./firebase";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="app">
      <div className="appVideos">
        {videos.map(
          ({
            title,
            connector,
            name,
            coverImageUrl,
            originalUrl,
            smallUrl,
            encodeUrl,
            episodeNum,
            viewCount,
          }) => (
            <Video
              title={title}
              connector={connector}
              name={name}
              coverImageUrl={coverImageUrl}
              originalUrl={originalUrl}
              smallUrl={smallUrl}
              encodeUrl={encodeUrl}
              episodeNum={episodeNum}
              viewCount={viewCount}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
