import React from 'react';

export default function AboutPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 font-serif">About Queen Delphine</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Queen Delphine performing"
              className="rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="text-gray-300 space-y-6">
            <p className="text-xl">
              Queen Delphine has been a force in the blues scene for over two decades, bringing raw emotion and authentic Southern soul to audiences worldwide.
            </p>
            
            <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4 font-serif">Musical Journey</h2>
            <p>
              Born in the heart of the Mississippi Delta, Queen Delphine's journey began in church choirs and local juke joints. Her powerful voice and commanding stage presence quickly earned her recognition in the blues community.
            </p>
            
            <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4 font-serif">Awards & Recognition</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Blues Music Award Nominee - Best Traditional Blues Album (2023)</li>
              <li>Living Blues Critics' Poll Winner - Best Live Performer (2022)</li>
              <li>Featured Artist - Smithsonian Magazine (2021)</li>
              <li>Mississippi Blues Trail Marker Recipient (2020)</li>
            </ul>
            
            <h2 className="text-2xl font-bold text-amber-400 mt-8 mb-4 font-serif">The Crown Jewels</h2>
            <p>
              Backed by her exceptional band, The Crown Jewels, Queen Delphine delivers electrifying performances that blend traditional blues with contemporary soul. Each member brings decades of experience and musical expertise to create an unforgettable live experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}