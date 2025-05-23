
import React, { useState } from 'react';
import { Send, Music, Users, Search } from 'lucide-react';

export const MessagesInbox: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Alex Rodriguez",
      lastMessage: "Love that new Luna Bay track!",
      time: "2m ago",
      avatar: "🎵",
      online: true,
      musicInterest: "Indie Pop"
    },
    {
      id: 2,
      name: "Sarah Chen",
      lastMessage: "Going to the festival this weekend?",
      time: "15m ago",
      avatar: "🎸",
      online: true,
      musicInterest: "Electronic"
    },
    {
      id: 3,
      name: "Music Lovers Group",
      lastMessage: "New playlist shared!",
      time: "1h ago",
      avatar: "👥",
      online: false,
      musicInterest: "Community",
      isGroup: true
    },
    {
      id: 4,
      name: "Jordan Kim",
      lastMessage: "That concert was amazing!",
      time: "3h ago",
      avatar: "🎤",
      online: false,
      musicInterest: "Rock/Metal"
    }
  ];

  const messages = [
    { id: 1, sender: "Alex Rodriguez", content: "Hey! Did you listen to the new Luna Bay album?", time: "10:30 AM", isOwn: false },
    { id: 2, sender: "You", content: "Yes! It's incredible. 'Midnight Dreams' is my favorite track", time: "10:32 AM", isOwn: true },
    { id: 3, sender: "Alex Rodriguez", content: "Same here! Want to go to their live show next month?", time: "10:35 AM", isOwn: false },
    { id: 4, sender: "You", content: "Absolutely! Let me check if tickets are still available", time: "10:36 AM", isOwn: true },
    { id: 5, sender: "Alex Rodriguez", content: "Love that new Luna Bay track!", time: "10:38 AM", isOwn: false },
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      setNewMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Conversations List */}
      <div className="w-80 bg-black/40 backdrop-blur-lg border-r border-purple-500/20 flex flex-col">
        <div className="p-4 border-b border-purple-500/20">
          <h2 className="text-xl font-bold text-white mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400" size={16} />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-purple-900/30 border border-purple-500/30 rounded-lg pl-10 pr-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors text-sm"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedChat(conversation.id)}
              className={`p-4 border-b border-purple-500/10 cursor-pointer transition-all ${
                selectedChat === conversation.id 
                  ? 'bg-purple-500/20' 
                  : 'hover:bg-purple-500/10'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl">
                    {conversation.avatar}
                  </div>
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium truncate">{conversation.name}</h3>
                    <span className="text-purple-400 text-xs">{conversation.time}</span>
                  </div>
                  <p className="text-purple-300 text-sm truncate">{conversation.lastMessage}</p>
                  <div className="flex items-center mt-1">
                    {conversation.isGroup ? (
                      <Users size={12} className="text-purple-400 mr-1" />
                    ) : (
                      <Music size={12} className="text-purple-400 mr-1" />
                    )}
                    <span className="text-purple-400 text-xs">{conversation.musicInterest}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 bg-black/40 backdrop-blur-lg border-b border-purple-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-lg">
                  🎵
                </div>
                <div>
                  <h3 className="text-white font-semibold">Alex Rodriguez</h3>
                  <p className="text-purple-300 text-sm">Online • Loves Indie Pop</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.isOwn
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-black/40 text-white border border-purple-500/20'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.isOwn ? 'text-purple-100' : 'text-purple-300'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 bg-black/40 backdrop-blur-lg border-t border-purple-500/20">
              <div className="flex items-center space-x-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-purple-900/30 border border-purple-500/30 rounded-xl px-4 py-2 text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 transition-colors"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto">
                💬
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Select a conversation</h3>
              <p className="text-purple-300">Choose a chat to start messaging with music lovers</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
