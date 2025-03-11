import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529518969858-8baa65152fc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Queen Delphine performing"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6 font-serif">The Story of Queen Delphine</h2>
            <div className="space-y-4">
              <p>
                From the heart of the Delta to the world stage, Queen Delphine has been captivating
                audiences with her powerful voice and authentic blues style for over two decades.
              </p>
              <p>
                Featured in Smithsonian Magazine and celebrated by Living Blues, Queen Delphine
                and The Crown Jewels have performed at legendary venues across the globe, bringing
                their unique blend of traditional blues and contemporary soul to audiences everywhere.
              </p>
              <p>
                With multiple award-winning albums and a reputation for electrifying live performances,
                Queen Delphine continues to carry the torch of blues music into the future while
                honoring its rich past.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}