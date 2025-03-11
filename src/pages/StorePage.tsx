import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Southern Soul Blues CD',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Latest album featuring 12 original tracks'
  },
  {
    name: 'Queen Delphine T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Classic black t-shirt with gold crown logo'
  },
  {
    name: 'Limited Edition Vinyl',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: "Collector's edition vinyl with exclusive artwork"
  },
  {
    name: 'Tour Poster',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Limited edition 2024 tour poster'
  }
];

export default function StorePage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 font-serif">Official Store</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-indigo-900 rounded-lg overflow-hidden">
              <div className="aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-semibold">{product.name}</h3>
                <p className="text-gray-300 text-sm mt-1">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-amber-400 font-bold">${product.price}</span>
                  <button className="flex items-center gap-2 bg-amber-400 text-indigo-950 px-4 py-2 rounded-md font-semibold hover:bg-amber-300 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-indigo-900/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4 font-serif">Shipping Information</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              All orders are processed within 1-2 business days. Shipping rates are calculated at checkout.
            </p>
            <p>
              International shipping is available to select countries. Please allow 2-3 weeks for international deliveries.
            </p>
            <p>
              For questions about your order, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}