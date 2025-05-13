import { useState } from 'react';

export default function MusicPlaylist() {
  const [playlist, setPlaylist] = useState([
    'Bohemian Rhapsody - Queen',
    'Hotel California - Eagles',
    'Imagine - John Lennon',
    'Billie Jean - Michael Jackson',
    'Sweet Child O\' Mine - Guns N\' Roses'
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [newSong, setNewSong] = useState('');

  const handleAddSong = () => {
    if (newSong.trim() !== '') {
      setPlaylist([...playlist, newSong.trim()]);
      setNewSong('');
      
      
      if (playlist.length === 0) {
        setCurrentSongIndex(0);
      }
    }
  };

  const handleDeleteSong = (index) => {
    const updatedPlaylist = playlist.filter((_, i) => i !== index);
    setPlaylist(updatedPlaylist);
    
   
    if (updatedPlaylist.length === 0) {
      setCurrentSongIndex(-1);
    } else if (index === currentSongIndex) {
     
      setCurrentSongIndex(index < updatedPlaylist.length ? index : updatedPlaylist.length - 1);
    } else if (index < currentSongIndex) {
      
      setCurrentSongIndex(currentSongIndex - 1);
    }
  };

  const handlePreviousSong = () => {
    if (playlist.length > 0) {
      setCurrentSongIndex((currentSongIndex - 1 + playlist.length) % playlist.length);
    }
  };

  const handleNextSong = () => {
    if (playlist.length > 0) {
      setCurrentSongIndex((currentSongIndex + 1) % playlist.length);
    }
  };

  const selectSong = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Music Playlist</h1>
      
      {/* Current Song Display */}
      <div className="bg-white p-4 mb-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Now Playing</h2>
        <div className="text-center p-3 bg-gray-50 rounded-md">
          {playlist.length > 0 ? (
            <p className="text-xl font-medium text-blue-600">{playlist[currentSongIndex]}</p>
          ) : (
            <p className="text-gray-500 italic">No songs in playlist</p>
          )}
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="flex justify-center mb-4 space-x-4">
        <button 
          onClick={handlePreviousSong}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
          disabled={playlist.length === 0}
        >
          Previous
        </button>
        <button 
          onClick={handleNextSong}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
          disabled={playlist.length === 0}
        >
          Next
        </button>
      </div>
      
      {/* Add Song Form */}
      <div className="flex mb-4 space-x-10">
        <input 
          type="text" 
          value={newSong} 
          onChange={(e) => setNewSong(e.target.value)} 
          placeholder="Enter song name"
          className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleAddSong}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Add Song
        </button>
      </div>
      
      {/* Playlist */}
      <div className="border border-gray-300 rounded-lg bg-white">
        <h2 className="text-lg font-semibold p-3 border-b border-gray-300 bg-gray-50">Playlist</h2>
        {playlist.length > 0 ? (
          <ul className="max-h-64 overflow-y-auto">
            {playlist.map((song, index) => (
              <li 
                key={index} 
                className={`flex justify-between items-center p-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 cursor-pointer ${
                  index === currentSongIndex ? 'bg-blue-100' : ''
                }`}
                onClick={() => selectSong(index)}
              >
                <div className="flex items-center">
                  <span className="w-6 text-gray-500">{index + 1}.</span>
                  <span className={index === currentSongIndex ? 'font-medium text-blue-600' : ''}>
                    {song}
                  </span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteSong(index);
                  }}
                  className="text-red-500 hover:text-red-700 px-2 py-1 rounded-md hover:bg-red-100"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4 text-gray-500 text-center italic">Your playlist is empty</p>
        )}
      </div>
    </div>
  );
}