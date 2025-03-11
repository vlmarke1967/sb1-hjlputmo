import React from 'react';
import { Calendar, MapPin, Clock, Ticket } from 'lucide-react';

const shows = [
  {
    date: 'March 25, 2024',
    venue: 'Blue Room Jazz Club',
    location: 'Memphis, TN',
    time: '8:00 PM',
    ticketLink: '#'
  },
  {
    date: 'April 2, 2024',
    venue: 'Southern Blues Festival',
    location: 'New Orleans, LA',
    time: '9:30 PM',
    ticketLink: '#'
  },
  {
    date: 'April 15, 2024',
    venue: 'The Cotton Club',
    location: 'Chicago, IL',
    time: '8:00 PM',
    ticketLink: '#'
  }
];

export default function ShowsPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 font-serif">Upcoming Shows</h1>
        
        <div className="space-y-6">
          {shows.map((show, index) => (
            <div key={index} className="bg-indigo-900 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="space-y-4 md:space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-amber-400" />
                    <span className="text-white font-semibold">{show.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-400" />
                    <span className="text-gray-300">{show.venue} - {show.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-400" />
                    <span className="text-gray-300">{show.time}</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <a
                    href={show.ticketLink}
                    className="inline-flex items-center gap-2 bg-amber-400 text-indigo-950 px-6 py-2 rounded-md font-semibold hover:bg-amber-300 transition-colors"
                  >
                    <Ticket className="h-5 w-5" />
                    Get Tickets
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-900/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4 font-serif">Private Bookings</h2>
          <p className="text-gray-300 mb-6">
            Queen Delphine & The Crown Jewels are available for private events, corporate functions, and special occasions.
            Contact our management team for availability and rates.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-400 text-indigo-950 px-6 py-2 rounded-md font-semibold hover:bg-amber-300 transition-colors"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </main>
  );
}