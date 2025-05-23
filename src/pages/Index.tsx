
import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { MusicLibrary } from '../components/MusicLibrary';
import { EventsPage } from '../components/EventsPage';
import { MessagesInbox } from '../components/MessagesInbox';
import { UserProfile } from '../components/UserProfile';

const Index = () => {
  const [activeSection, setActiveSection] = useState('library');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const renderContent = () => {
    if (!isLoggedIn) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 flex items-center justify-center">
          <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">RhythmiX</h1>
              <p className="text-purple-200 mb-8">Discover music, connect with friends, and experience live events</p>
              <button 
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'library':
        return <MusicLibrary />;
      case 'events':
        return <EventsPage />;
      case 'messages':
        return <MessagesInbox />;
      case 'profile':
        return <UserProfile />;
      default:
        return <MusicLibrary />;
    }
  };

  if (!isLoggedIn) {
    return renderContent();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
