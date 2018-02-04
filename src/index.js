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
            selectedVideo: null,
            searchStarted: false
        };

        this.videoSearch("Facebook React");
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            this.state.searchStarted = false;
        });
    }

    throttleSearch(query) {
        this.term = query;
        if (!this.state.searchStarted) {
            setTimeout(() => {
                this.videoSearch(this.term);
            }, 1000);
            this.state.searchStarted = true;
        }
    }


    render() {
        return (
            <div>
                <SearchBar onSearch={(query) => {this.throttleSearch(query) }} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    videos={this.state.videos}
                    onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }) }}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));