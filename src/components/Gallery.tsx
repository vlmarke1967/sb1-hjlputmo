import React from 'react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Live at the Blues Festival'
  },
  {
    url: 'https://images.unsplash.com/photo-1621784166258-c6fdfff31879?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Backstage Moments'
  },
  {
    url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Studio Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Summer Tour'
  },
  {
    url: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Chicago Blues Night'
  },
  {
    url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    caption: 'Recording the New Album'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-12 text-center font-serif">
          Photo Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-lg font-semibold">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}