import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import YTSearch from "youtube-api-search";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyBrFqlTEmlnQ4XQm18ZHIw7a8VUPLhWrc4";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("Facebook React");
    }

    videoSearch(query) {
        debugger;
        YTSearch({ key: API_KEY, query: query }, (videos) => {
            debugger;
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearch = {(query)=>{debugger;this.videoSearch(query)}} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={(selectedVideo) => {this.setState({ selectedVideo })}}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));