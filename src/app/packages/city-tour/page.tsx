"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Users, Camera } from 'lucide-react';

export default function CityTourPage() {
  const [selectedItinerary, setSelectedItinerary] = useState<number | null>(null);

  const pkg = {
    title: 'Kigali City Tours & Adventures',
    subtitle: "Experience a guided journey through Kigali’s vibrant culture, historic landmarks, and scenic landscapes. Discover Rwanda’s rich history, local traditions, and outdoor adventures including hiking, biking, and nature walks—all led by expert guides for an immersive and unforgettable tour",
    heroImage: '/image/conv.jpg',
    overview: [
      "Discover Kigali's iconic landmarks, vibrant markets, and historic quarters through our carefully curated city tours.",
      "From mountain hikes to lakeside fishing, cultural walks to safari adventures - experience the best of Rwanda's capital and beyond.",
      "Each itinerary is designed to showcase different aspects of Kigali's natural beauty, rich culture, and modern attractions.",
    ],
    highlights: ['Old town walking trails', 'Signature skyline viewpoints', 'Museum and culture stops', 'Local cuisine tasting', 'Adventure activities', 'Nature experiences'],
    gallery: ['/image/Kigali1.jpg', '/image/kigali2.jpg', '/image/kigali3.jpg', '/image/kigali4.jpg'],
  };

  const itineraries = [
    {
      id: 1,
      image: "/image/karisimbi.jpg",
      title: "Kigali City Adventure & Mount Kigali Hike",
      subtitle: "Perfect For: Nature lovers & active tourists",
      duration: "Half-day",
      startTime: "8:00 AM or 2:00 PM",
      highlights: [
        "Guided hike up Mount Kigali for panoramic city views",
        "Coffee stop or cultural visit after hike",
        "Afternoon visit to Zaria Court for lunch, art, and shopping"
      ],
      whatToBring: "Hiking shoes, water, sun protection",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      image: "/image/muhazi.jpg",
      title: "Day Trip to Lake Muhazi (Fishing + Swimming)",
      subtitle: "Perfect For: Relaxation seekers, families, and couples",
      duration: "Full-day trip",
      startTime: "7:00 AM",
      highlights: [
        "Scenic drive to Lake Muhazi",
        "Fishing, kayaking, or swimming activities",
        "Lakeside lunch with stunning views",
        "Return to Kigali by sunset"
      ],
      whatToBring: "Swimwear, towel, hat, snacks",
      color: "from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      image: "/image/Kigali.jpg",
      title: "Kigali Bike Ride + BK Arena Tour + Nyarutarama Track",
      subtitle: "Perfect For: Sports lovers, fitness tourists, and photographers",
      duration: "Half-day",
      startTime: "8:30 AM",
      highlights: [
        "Bike tour through Kigali's green zones",
        "Guided tour of BK Arena or event check",
        "Jog or walk on Kigali Running Track in Nyarutarama",
        "Perfect photo opportunities throughout"
      ],
      whatToBring: "Activewear, water bottle, camera",
      color: "from-orange-500 to-red-600",
      rentalUrl: "https://kigalirides.rw"
    },
    {
      id: 4,
      image: "/image/nyandungu.png",
      title: "Nyandungu Eco Park Nature Walk + Zaria Court",
      subtitle: "Perfect For: Eco-tourists and nature walkers",
      duration: "3–5 hours",
      startTime: "9:00 AM",
      highlights: [
        "Explore Nyandungu Wetland Eco-Park",
        "Birdwatching and peaceful garden trails",
        "Lunch and local arts at Zaria Court",
        "Optional evening walk at Nyarutarama Running Track"
      ],
      whatToBring: "Sneakers, camera, sunscreen",
      color: "from-emerald-500 to-teal-600"
    },
    {
      id: 5,
      image: "/image/zebra.jpg",
      title: "Akagera Safari + Lake Muhazi Fishing",
      subtitle: "Perfect For: Wildlife and adventure lovers",
      duration: "Full-day or overnight",
      startTime: "5:30 AM",
      highlights: [
        "Early morning drive to Akagera National Park",
        "Game drive (zebras, giraffes, elephants)",
        "Fishing and relaxation at Lake Muhazi",
        "Optional overnight stay at lodge"
      ],
      whatToBring: "Camera, snacks, fishing permit (or local guide support)",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 6,
      image: "/image/are.jpg",
      title: "Pool & Fitness Day + Nightlife at BK Arena",
      subtitle: "Perfect For: Relaxation, wellness, and group fun",
      duration: "Flexible",
      startTime: "10:00 AM",
      highlights: [
        "Morning swim and chill at The Hut or Kigali Pool Club",
        "Afternoon jog/run at Nyarutarama Running Track",
        "Evening show, concert, or match at BK Arena",
        "Perfect blend of relaxation and entertainment"
      ],
      whatToBring: "Swimwear, towel, event ticket, sports gear",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-xl">
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full">
        <Image src={pkg.heroImage} alt={pkg.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 animate-fade-in">{pkg.title}</h1>
            <p className="text-lg md:text-2xl opacity-95 leading-relaxed">{pkg.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {pkg.overview.map((p, i) => (
                <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
          <div>
            {(() => {
              const activeItinerary = itineraries.find((i) => i.id === selectedItinerary) || null;
              const title = activeItinerary ? `Itinerary Highlights` : 'Tour Highlights';
              const subtitle = activeItinerary ? activeItinerary.title : undefined;
              const highlights = activeItinerary ? activeItinerary.highlights : pkg.highlights;
              return (
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{title}</h3>
                  {subtitle && (
                    <p className="text-sm text-orange-600 mb-4">{subtitle}</p>
                  )}
                  <ul className="space-y-4">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-3">
                        <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <span className="text-gray-700">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Itineraries Section */}
      <section className="py-20 bg-white text-xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Choose Your Adventure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From mountain hikes to lakeside retreats, cultural walks to wildlife safaris - discover Kigali through our specially designed itineraries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="group transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="relative h-48 md:h-56 xl:h-64 w-full">
                    <Image src={itinerary.image} alt={itinerary.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${itinerary.color}`}></div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                        {itinerary.title}
                      </h3>
                    </div>

                    <p className="text-sm text-orange-600 font-medium mb-3">{itinerary.subtitle}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{itinerary.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Start: {itinerary.startTime}</span>
                      </div>
                    </div>

                    {/* Primary action on card */}
                    <a
                      href="/booking?tab=packages&package=city-tour"
                      className="block w-full mb-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    >
                      Book Now
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setSelectedItinerary(selectedItinerary === itinerary.id ? null : itinerary.id);
                      }}
                      aria-expanded={selectedItinerary === itinerary.id}
                      className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer"
                    >
                      Discover More
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {selectedItinerary === itinerary.id && (
                      <div className="mt-6 pt-6 border-t border-gray-100 space-y-4 animate-fade-in">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Highlights:</h4>
                          <ul className="space-y-2">
                            {itinerary.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <ArrowRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            What to Bring:
                          </h4>
                          <p className="text-sm text-gray-700">{itinerary.whatToBring}</p>
                        </div>

                        {itinerary.rentalUrl && (
                          <a
                            href={itinerary.rentalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg font-semibold transition-colors w-full"
                          >
                            Rent a Bike at Kigali Rides
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}

                        {/* Booking CTA inside expanded content */}
                        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                          Book Now
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">Step Into the Experience Gallery Where Moments Become Masterpieces</h2>
            <p className="text-lg text-gray-600">Captured moments from our unforgettable journeys and explorations</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pkg.gallery.map((src, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image 
                  src={src} 
                  alt={`${pkg.title} ${i + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  sizes="25vw" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-bold text-black mb-6">Ready for Your Kigali Adventure?</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join us for unforgettable experiences that showcase the best of Rwanda&apos;s capital city and its natural wonders
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Book Your Tour Today
          </button>
        </div>
      </section>
    </main>
  );
}