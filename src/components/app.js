import React from "react";
import SearchBar from "./searchBar";
import youtube from "./youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";
import "./main.css";
class App extends React.Component {
  state = { data: [], selectedVideo: {} };

  componentDidMount() {
    this.fetchData("programming");
  }

  fetchData = async (term) => {
    let response = await youtube.get("/search", {
      params: { q: term },
    });
    this.setState({ data: response.data.items, selectedVideo: response.data.items[0] });
  };
  playVideo = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    let { data, selectedVideo } = this.state;
    return (
      <div className="app container">
        <SearchBar fetchData={this.fetchData} />
        <div className="content">
          <VideoDetail video={selectedVideo} />
          <VideoList items={data} playVideo={this.playVideo} />
        </div>
      </div>
    );
  }
}

export default App;
