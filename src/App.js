import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import SearchBar from './SearchBar/SearchBar'
import SearchResults from './SearchResults/SearchResults'
import PlayList from './Playlist/PlayList'
import Spotify from './util/Spotify';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
         searchResults : [
           {name: "name"},
           {artist: "artist"},
           {album: "album"},
           {id: "id"}
         ],
         playlistName : "DeckersList",
         playlistTracks : [
           {name: "name"},
           {artist: "artist"},
           {album: "album"},
           {id: "id"}
         ]
     };
     this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
  }
  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
       return;
      }
    this.state.playlist.push(track);
  }
  removeTrack(track){
   let myVar = this.state.playlistTracks.filter(savedTrack =>
     savedTrack.id === track.id
   );

   this.setState({playlistTracks : myVar})
 }

 updatePlaylistName(name)  {
   this.setState({playlistName : name})
 }
 savePlaylist(){
   const trackURIs = this.state.playlistTracks.map();

   }

 search(term){
   console.log('Yo');
   console.log(term);
   Spotify.getAccessToken();
   Spotify.search(term).then(tracks => {
     this.setState({tracks: tracks});
   });
 }

  render() {
    return (<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">

    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
    <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
        <PlayList savePlayList={this.savePlayList} playlistName={this.state.playListName} playListTracks={this.state.playListTracks}
        onRemove={this.removeTrack()} onNameChange={this.updatePlayListNameS()}/>
    </div>
  </div>
</div>
);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
