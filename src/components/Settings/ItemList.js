import { useDispatch, useSelector } from "react-redux";

function SongPlaylist() {
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist = useSelector((state) => {
    console.log(state);
    return state.songs;
  });

  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
  };

  const renderedItems = [];

  /*  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  }); */

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Add Item</h3>
      </div>
      <ul>{renderedItems}</ul>
    </div>
  );
}

export default SongPlaylist;
