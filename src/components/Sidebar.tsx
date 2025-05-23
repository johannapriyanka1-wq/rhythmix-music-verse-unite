
import React from 'react';
import { Music, Calendar, MessageCircle, User, Heart, Search } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'library', label: 'Library', icon: Music },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="w-64 bg-black/40 backdrop-blur-lg border-r border-purple-500/20 p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">RhythmiX</h1>
        <p className="text-purple-300 text-sm">Your music universe</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                  : 'text-purple-200 hover:text-white hover:bg-purple-500/20'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="mt-8 pt-4 border-t border-purple-500/20">
        <p className="text-purple-300 text-sm mb-4">Quick Actions</p>
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-purple-200 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
            <Search size={16} />
            <span className="text-sm">Search Music</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-purple-200 hover:text-white hover:bg-purple-500/20 rounded-lg transition-all">
            <Heart size={16} />
            <span className="text-sm">Liked Songs</span>
          </button>
        </div>
      </div>
    </div>
  );
};
