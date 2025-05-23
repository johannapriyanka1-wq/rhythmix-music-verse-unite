
import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="h-16 bg-black/40 backdrop-blur-lg border-b border-purple-500/20 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={20} />
          <input
            type="text"
            placeholder="Search songs, artists, events..."
            className="w-full bg-purple-900/30 border border-purple-500/30 rounded-xl pl-10 pr-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
          <Bell size={20} />
        </button>
        <button className="p-2 text-purple-300 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          U
        </div>
      </div>
    </div>
  );
};
