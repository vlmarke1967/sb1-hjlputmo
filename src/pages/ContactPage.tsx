import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8 font-serif">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-indigo-900 border-indigo-700 text-white shadow-sm focus:border-amber-400 focus:ring focus:ring-amber-400 focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-indigo-900 border-indigo-700 text-white shadow-sm focus:border-amber-400 focus:ring focus:ring-amber-400 focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Subject</label>
                <select
                  id="subject"
                  className="mt-1 block w-full rounded-md bg-indigo-900 border-indigo-700 text-white shadow-sm focus:border-amber-400 focus:ring focus:ring-amber-400 focus:ring-opacity-50"
                >
                  <option>Booking Inquiry</option>
                  <option>Press Request</option>
                  <option>Fan Message</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-indigo-900 border-indigo-700 text-white shadow-sm focus:border-amber-400 focus:ring focus:ring-amber-400 focus:ring-opacity-50"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-amber-400 text-indigo-950 px-4 py-2 rounded-md font-semibold hover:bg-amber-300 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-indigo-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 font-serif">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 text-amber-400 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <Mail className="h-5 w-5 text-amber-400 mr-3" />
                  <span>booking@queendelphine.com</span>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 text-amber-400 mr-3" />
                  <span>Memphis, Tennessee</span>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-900 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 font-serif">Booking Information</h2>
              <p className="text-gray-300">
                For booking inquiries, please contact our management team directly or use the contact form. We're available for:
              </p>
              <ul className="list-disc list-inside text-gray-300 mt-4">
                <li>Festival Performances</li>
                <li>Private Events</li>
                <li>Club Shows</li>
                <li>Corporate Events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}