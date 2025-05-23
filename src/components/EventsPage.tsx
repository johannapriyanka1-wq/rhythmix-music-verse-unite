
import React, { useState } from 'react';
import { MapPin, Calendar, Users, Ticket, Star } from 'lucide-react';

export const EventsPage: React.FC = () => {
  const [bookedEvents, setBookedEvents] = useState<number[]>([]);

  const events = [
    {
      id: 1,
      title: "Summer Music Festival",
      artist: "Various Artists",
      date: "July 15, 2024",
      venue: "Central Park, NY",
      price: "$89",
      image: "🎪",
      rating: 4.8,
      attendees: 1200
    },
    {
      id: 2,
      title: "Luna Bay Live",
      artist: "Luna Bay",
      date: "July 22, 2024",
      venue: "Madison Square Garden",
      price: "$125",
      image: "🌙",
      rating: 4.9,
      attendees: 800
    },
    {
      id: 3,
      title: "Electronic Nights",
      artist: "Neon Lights",
      date: "August 5, 2024",
      venue: "Brooklyn Bowl",
      price: "$65",
      image: "⚡",
      rating: 4.7,
      attendees: 600
    },
    {
      id: 4,
      title: "Acoustic Sessions",
      artist: "Coastal Sounds",
      date: "August 12, 2024",
      venue: "Blue Note",
      price: "$45",
      image: "🎸",
      rating: 4.6,
      attendees: 300
    }
  ];

  const bookEvent = (eventId: number) => {
    setBookedEvents(prev => [...prev, eventId]);
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Live Music Events</h2>
        <p className="text-purple-300">Discover and book amazing live music experiences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/20 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl">
              {event.image}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-purple-300 mb-4">{event.artist}</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-purple-200 text-sm">
                  <Calendar size={14} className="mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-purple-200 text-sm">
                  <MapPin size={14} className="mr-2" />
                  {event.venue}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-purple-200">
                    <Users size={14} className="mr-1" />
                    {event.attendees} going
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star size={14} className="mr-1" fill="currentColor" />
                    {event.rating}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{event.price}</span>
                {bookedEvents.includes(event.id) ? (
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center space-x-1">
                    <Ticket size={16} />
                    <span>Booked</span>
                  </div>
                ) : (
                  <button
                    onClick={() => bookEvent(event.id)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-1"
                  >
                    <Ticket size={16} />
                    <span>Book</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {bookedEvents.length > 0 && (
        <div className="mt-8 bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-semibold text-white mb-4">Your Booked Events</h3>
          <p className="text-purple-300">You have {bookedEvents.length} upcoming event{bookedEvents.length !== 1 ? 's' : ''}</p>
        </div>
      )}
    </div>
  );
};
