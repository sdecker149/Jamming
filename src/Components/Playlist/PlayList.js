import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

 class PlayList extends React.component{
   constructor(){
     super(props);

     this.handleNameChange = this.handleNameChange.bind(this);
      };

     handleNameChange(event){
   this.setState({onNameChange: event.target.value});

 }

  render(
    <div class="Playlist">
  <input value="New Playlist"/>
     <TrackList tracks = {this.props.playListTracks}
     onRemove = {this.props.onRemove}
           isRemoval = 'true'/>
  <a className="Playlist-save">
  onClick={this.props.onSave}> SAVE TO SPOTIFY</a>
</div>
  )
}
export default Playlist;
