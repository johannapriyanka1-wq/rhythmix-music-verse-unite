
import React from 'react';
import { Edit, Music, Calendar, Users, Award } from 'lucide-react';

export const UserProfile: React.FC = () => {
  const userStats = [
    { label: 'Songs Played', value: '2,847', icon: Music },
    { label: 'Events Attended', value: '12', icon: Calendar },
    { label: 'Friends', value: '89', icon: Users },
    { label: 'Achievements', value: '15', icon: Award },
  ];

  const recentActivity = [
    { action: 'Liked', item: 'Midnight Dreams by Luna Bay', time: '2 hours ago' },
    { action: 'Booked', item: 'Summer Music Festival ticket', time: '1 day ago' },
    { action: 'Created', item: 'Chill Vibes playlist', time: '3 days ago' },
    { action: 'Followed', item: 'Alex Rodriguez', time: '1 week ago' },
  ];

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl">
                🎵
              </div>
              <button className="absolute bottom-0 right-0 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-colors">
                <Edit size={16} />
              </button>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-white mb-2">Music Lover</h1>
              <p className="text-purple-300 mb-4">Passionate about discovering new sounds and connecting with fellow music enthusiasts</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Indie Pop</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Electronic</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Jazz</span>
              </div>
              
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 text-center">
                <Icon className="mx-auto text-purple-400 mb-2" size={24} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-purple-300 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-500/10 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-white text-sm">
                      <span className="font-semibold text-purple-400">{activity.action}</span> {activity.item}
                    </p>
                    <p className="text-purple-300 text-xs mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-xl font-semibold text-white mb-6">Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl">🏆</div>
                <div>
                  <h4 className="text-white font-medium">Music Explorer</h4>
                  <p className="text-purple-300 text-sm">Listened to 100 different artists</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl">🎸</div>
                <div>
                  <h4 className="text-white font-medium">Concert Goer</h4>
                  <p className="text-purple-300 text-sm">Attended 10 live events</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl">💫</div>
                <div>
                  <h4 className="text-white font-medium">Social Star</h4>
                  <p className="text-purple-300 text-sm">Connected with 50 music lovers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
