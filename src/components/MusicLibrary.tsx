
import React, { useState } from 'react';
import { Play, Heart, MoreHorizontal, Plus } from 'lucide-react';

export const MusicLibrary: React.FC = () => {
  const [likedSongs, setLikedSongs] = useState<number[]>([]);

  const songs = [
    { id: 1, title: "Midnight Dreams", artist: "Luna Bay", album: "Night Waves", duration: "3:45", cover: "🌙" },
    { id: 2, title: "Electric Pulse", artist: "Neon Lights", album: "Synthwave", duration: "4:12", cover: "⚡" },
    { id: 3, title: "Ocean Breeze", artist: "Coastal Sounds", album: "Serenity", duration: "3:28", cover: "🌊" },
    { id: 4, title: "City Nights", artist: "Urban Echo", album: "Metropolitan", duration: "3:55", cover: "🏙️" },
    { id: 5, title: "Starlight", artist: "Galaxy Dreams", album: "Cosmic", duration: "4:03", cover: "⭐" },
  ];

  const toggleLike = (songId: number) => {
    setLikedSongs(prev => 
      prev.includes(songId) 
        ? prev.filter(id => id !== songId)
        : [...prev, songId]
    );
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Your Music Library</h2>
        <p className="text-purple-300">Discover and organize your favorite tracks</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Recently Played</h3>
              <button className="text-purple-400 hover:text-white transition-colors">
                <MoreHorizontal size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              {songs.map((song) => (
                <div key={song.id} className="flex items-center space-x-4 p-3 rounded-xl hover:bg-purple-500/10 transition-all group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl">
                      {song.cover}
                    </div>
                    <button className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="text-white" size={16} fill="white" />
                    </button>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{song.title}</h4>
                    <p className="text-purple-300 text-sm">{song.artist}</p>
                  </div>
                  
                  <div className="text-purple-400 text-sm hidden sm:block">{song.duration}</div>
                  
                  <button
                    onClick={() => toggleLike(song.id)}
                    className={`p-2 rounded-full transition-all ${
                      likedSongs.includes(song.id) 
                        ? 'text-pink-500' 
                        : 'text-purple-400 hover:text-pink-400'
                    }`}
                  >
                    <Heart size={16} fill={likedSongs.includes(song.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">Create Playlist</h3>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2">
              <Plus size={20} />
              <span>New Playlist</span>
            </button>
          </div>

          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-purple-300">Total Songs</span>
                <span className="text-white font-semibold">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Playlists</span>
                <span className="text-white font-semibold">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Following</span>
                <span className="text-white font-semibold">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
