import React from 'react';
import { Play, Download } from 'lucide-react';

export default function MediaPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 font-serif">Media</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-amber-400 mb-6 font-serif">Latest Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((video) => (
                <div key={video} className="bg-indigo-900 rounded-lg overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={`https://images.unsplash.com/photo-151119233657${video}-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80`}
                      alt={`Performance ${video}`}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-indigo-950/50 hover:bg-indigo-950/30 transition-colors">
                      <Play className="w-12 h-12 text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold">Live at Blues Festival 2024</h3>
                    <p className="text-gray-300 text-sm mt-1">March 15, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-amber-400 mb-6 font-serif">Photo Gallery</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((photo) => (
                <div key={photo} className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-151119233657${photo}-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt={`Gallery photo ${photo}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-amber-400 mb-6 font-serif">Press Kit</h2>
            <div className="bg-indigo-900 p-6 rounded-lg">
              <p className="text-gray-300 mb-4">
                Download our press kit for high-resolution photos, biography, and technical requirements.
              </p>
              <button className="flex items-center gap-2 bg-amber-400 text-indigo-950 px-4 py-2 rounded-md font-semibold hover:bg-amber-300 transition-colors">
                <Download className="w-5 h-5" />
                Download Press Kit
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}