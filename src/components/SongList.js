import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    //The props is mapped to this component by the connect, via mapStateToProps
    console.log(this.props.songs);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//This name is a convention
//We get the state from the reducers
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

//Export the connect (instead of the component)
export default connect(mapStateToProps)(SongList);
