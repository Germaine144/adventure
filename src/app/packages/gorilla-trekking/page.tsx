"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, MapPin, Users } from 'lucide-react';

export default function AkageraPage() {
  const [selectedItinerary, setSelectedItinerary] = useState<number | null>(null);

  const pkg = {
    title: 'Akagera National Park',
    subtitle: 'Safari adventures across savannah plains, wetlands, and rolling highlands',
    heroImage: '/image/canopy.jpg',
    overview: [
      'Journey through Rwanda\'s only savannah park – home to the Big Five and over 500 bird species.',
      'Choose from classic game drives, birding expeditions, camping nights, and luxury safaris with a lake cruise.',
    ],
    highlights: ['Game drives', 'Boat cruise on Lake Ihema', 'Bird watching', 'Scenic viewpoints'],
    gallery: ['/image/ele1.jpeg', '/image/zebra.jpg', '/image/bird.jpg', '/image/canopy.jpg'],
  } as const;

  const itineraries = [
    {
      id: 1,
      image: '/image/ele1.jpeg',
      title: 'Classic Big Five Safari (Full-Day)',
      subtitle: 'Perfect for: First-time visitors & wildlife lovers',
      duration: 'Full day (~12–14 hours)',
      startTime: '5:30 AM',
      highlights: [
        'Early morning departure from Kigali',
        'Full-day game drive: lions, elephants, buffaloes, giraffes, zebras',
        'Visit to Lake Ihema for hippos & birdwatching',
        'Packed lunch in the park',
        'Return to Kigali in the evening',
      ],
      whatToBring: 'Binoculars, snacks, water, camera, sun protection',
      color: 'from-amber-600 to-orange-600',
    },
    {
      id: 2,
      image: '/image/zebra.jpg',
      title: '2-Day Wildlife & Fishing Safari',
      subtitle: 'Perfect for: Travelers who want to explore deeper and relax',
      duration: '2 days, 1 night',
      startTime: 'Morning',
      highlights: [
        'Day 1: Transfer Kigali → Akagera, morning game drive, picnic at Lake Ihema',
        'Day 1: Afternoon fishing at Lake Shakani, dinner & overnight (lodge/camp)',
        'Day 2: Sunrise safari, highland viewpoints & giraffe valley',
        'Day 2: Return to Kigali in the afternoon',
      ],
      whatToBring: 'Fishing permit/gear, overnight bag, ID',
      color: 'from-green-600 to-emerald-600',
    },
    {
      id: 3,
      image: '/image/bird.jpg',
      title: 'Akagera Birding Experience',
      subtitle: 'Perfect for: Birdwatchers & eco-tourists',
      duration: 'Full day',
      startTime: 'Early morning',
      highlights: [
        'Guided birding safari with 500+ species',
        'Wetlands and lakeshores: Ihema, Shakani',
        'Possible sightings: African fish eagle, papyrus gonolek, shoebill',
        'Optional boat ride for waterbirds',
      ],
      whatToBring: 'Binoculars, camera, bird checklist',
      color: 'from-sky-600 to-cyan-600',
    },
    {
      id: 4,
      image: '/image/muhazi.jpg',
      title: 'Akagera + Lake Muhazi Combo (2 Days)',
      subtitle: 'Perfect for: Couples, families, or short-trip travelers',
      duration: '2 days, 1 night',
      startTime: 'Morning',
      highlights: [
        'Day 1: Depart Kigali → Lake Muhazi (fishing, canoeing, lakeside lunch)',
        'Day 1: Continue to Akagera for dinner & overnight',
        'Day 2: Morning game drive in Akagera',
        'Day 2: Return to Kigali in the afternoon',
      ],
      whatToBring: 'Swimwear, outdoor clothes, snacks',
      color: 'from-indigo-600 to-blue-600',
    },
    {
      id: 5,
      image: '/image/canopy.jpg',
      title: 'Akagera Camping & Stargazing Adventure',
      subtitle: 'Perfect for: Adventure seekers, budget travelers',
      duration: 'Overnight trip',
      startTime: 'Late morning',
      highlights: [
        'Afternoon game drive and camp setup (Shakani or Mutumba Hills)',
        'Dinner by campfire & stargazing in the savannah',
        'Morning wildlife viewing before heading back',
      ],
      whatToBring: 'Tent, flashlight, jacket, camera',
      color: 'from-purple-600 to-pink-600',
    },
    {
      id: 6,
      image: '/image/aka nat.jpg',
      title: 'Luxury Safari with Boat Cruise (Day or Overnight)',
      subtitle: 'Perfect for: Honeymooners or luxury travelers',
      duration: 'Full day or 2 days',
      startTime: 'Flexible',
      highlights: [
        'Private transport & professional guide',
        'Wildlife safari in a luxury 4x4 vehicle',
        'Boat cruise on Lake Ihema – hippos, crocodiles, birds',
        'Fine lunch or dinner at Akagera Game Lodge',
        'Optional overnight with massage & sundowners',
      ],
      whatToBring: 'Sunglasses, sunscreen, camera',
      color: 'from-rose-600 to-orange-600',
    },
  ] as const;

  return (
    <main className="min-h-screen bg-white text-xl">
      {/* Hero */}
      <section className="relative h-[70vh] w-full">
        <Image src={pkg.heroImage} alt={pkg.title} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-4">{pkg.title}</h1>
            <p className="text-lg md:text-2xl opacity-90">{pkg.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Overview + Sidebar */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {pkg.overview.map((p, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>
            ))}
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

      {/* Itineraries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Begin Your Journey Choose the Safari That Speaks to You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           Flexible safari options include classic day trips, luxury overnights, and birding expeditions—crafted for unforgettable wildlife adventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {itineraries.map((itinerary) => (
              <div key={itinerary.id} className="group transform transition-all duration-300 hover:scale-105">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="relative h-48 md:h-56 xl:h-64 w-full">
                    <Image src={itinerary.image} alt={itinerary.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${itinerary.color}`}></div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{itinerary.title}</h3>
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
                      href="/booking?tab=packages&package=akagera-national-park"
                      className="block w-full mb-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    >
                      Book Now
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedItinerary(selectedItinerary === itinerary.id ? null : itinerary.id)}
                      aria-expanded={selectedItinerary === itinerary.id}
                      className="inline-flex items-center gap-2 text-orange-700 font-semibold hover:text-orange-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    >
                      Discover More
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {selectedItinerary === itinerary.id && (
                      <div className="mt-6 pt-6 border-top border-gray-100 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3">Highlights</h4>
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
                            What to Bring
                          </h4>
                          <p className="text-sm text-gray-700">{itinerary.whatToBring}</p>
                        </div>

                        {/* Booking CTA inside expanded content */}
                        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300">
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

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">Akagera Moments</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pkg.gallery.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow">
                <Image src={src} alt={`${pkg.title} ${i + 1}`} fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

