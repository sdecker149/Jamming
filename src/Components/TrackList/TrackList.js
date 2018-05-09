import React from 'react';
import './TrackList.css';

class TrackList extends React.component{
  render (){
  return (
    <div className="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
    {this.props.tracks.map(track =>{
+          return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>})}
+          <h1>{this.props.track.name}</h1>
+          <h1>{this.props.track.artist}</h1>
+          <h1>{this.props.track.album}</h1>
</div>
);
}
}
export default TrackList;
