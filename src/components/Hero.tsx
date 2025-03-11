import React from 'react';
import { Calendar, Music, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/queen-delphine-blue-dress.jpg")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 font-serif">
            Queen Delphine <span className="block text-amber-400">&</span> 
            The Crown Jewels
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the soul-stirring power of authentic Southern Blues
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <p className="text-amber-400 text-lg font-semibold mb-2">New Release</p>
            <h2 className="text-2xl text-white font-bold mb-4">"Southern Soul Blues"</h2>
            <button className="bg-amber-400 text-indigo-950 px-8 py-3 rounded-full font-semibold hover:bg-amber-300 transition-colors duration-200">
              Listen Now
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Calendar, text: 'Tour Dates', href: '#tour' },
              { icon: Music, text: 'Latest Music', href: '#music' },
              { icon: Phone, text: 'Book Now', href: '#contact' }
            ].map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm p-4 rounded-lg hover:bg-white/20 transition-colors duration-200 text-white group"
              >
                <item.icon className="w-5 h-5 text-amber-400 group-hover:text-amber-300" />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}