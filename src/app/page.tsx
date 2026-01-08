"use client";
import React, { useState} from 'react';
import Image from 'next/image';
import { ChevronDown, Star, ArrowRight, Hand } from 'lucide-react';

const SafariHomepage = () => {
  const [activeDestination, setActiveDestination] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  type CountryDestination = {
    name: string;
    description: string;
    link: string;
  };

  const destinations = [
    {
      name: "City Tour",
      slug: "city-tour",
      image: "/image/cul2.jpeg",
      description: "Guided exploration showcasing a city's landmarks, culture, and history"
    },
    {
      name: "Akagera Nation Park",
      slug: "akagera-national-park",
      image: "/image/akagerant.jpg",
      description: "Rwanda scenic savannah wildlife and conservation haven"
    },
    {
      name: "Gorilla Trekking",
      slug: "gorilla-trekking",
      image: "/image/gooo.jpg",
      description: "Experience gorilla trekking in the misty mountains"
    },
  ];

  const countryDestinations: CountryDestination[] = [
    {
      name: "Rwanda",
      description: "Land of a thousand hills",
      link: "/destinations/rwanda"
    },
    {
      name: "Tanzania",
      description: "Serengeti & Kilimanjaro",
      link: "/destinations/tanzania"
    },
    {
      name: "Kenya",
      description: "Masai Mara & wildlife",
      link: "/destinations/kenya"
    },
    {
      name: "Zanzibar",
      description: "Pristine beaches & culture",
      link: "/destinations/zanzibar"
    }
  ];

  const handleDestinationSelect = (destination: CountryDestination) => {
    setIsDropdownOpen(false);
    // Navigate to the selected destination
    window.location.href = destination.link;
  };

  const handleCardFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* Hero Section - FIXED Z-INDEX */}
      <section className="relative min-h-screen flex items-center justify-center overflow-visible text-xl">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              minHeight: '100vh'
            }}
          >
           <source src="/videos/wildlife11.mp4"  type="video/mp4" />
          </video>
          
          {/* Fallback background image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('')",
              filter: 'brightness(0.3)'
            }}
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl px-6">
          <div className="mb-12">
            <div className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6">
              <span className="text-orange-700">A</span>FRICA
            </div>
            <div className="text-xl md:text-2xl uppercase tracking-[0.3em] mb-2">
              AROUND WITH
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Experience the raw beauty and untamed wilderness of Africa through our carefully curated safari adventures. 
            Discover breathtaking landscapes, magnificent wildlife, and rich cultures that will transform your perspective forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-orange-700 hover:bg-orange-800 text-white px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl rounded-lg">
              START YOUR JOURNEY
            </button>
            
            {/* Dropdown Button - FIXED Z-INDEX */}
            <div className="relative z-[9999]">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl flex items-center space-x-2 rounded-lg text-xl"
              >
                <span>VIEW DESTINATIONS</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu - FIXED Z-INDEX AND POSITIONING */}
              {isDropdownOpen && (
                <>
                  {/* Backdrop to close dropdown when clicking outside */}
                  <div 
                    className="fixed inset-0 z-[9998]"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  
                  {/* Dropdown content - Minimized width */}
                  <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl overflow-hidden z-[9999] border border-gray-200 w-64 ">
                    {countryDestinations.map((destination, index) => (
                      <button
                        key={index}
                        onClick={() => handleDestinationSelect(destination)}
                        className="w-full text-left px-4 py-3 text-gray-800 hover:bg-orange-50 hover:text-orange-700 transition-all duration-200 border-b border-gray-100 last:border-b-0 group"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold uppercase tracking-wide text-sm truncate">
                              {destination.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 truncate">
                              {destination.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-700 transition-colors duration-200 flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Safari Experience Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative">
              <Image
                src="/image/tourist.jpg"
                alt="Safari Experience"
                width={800}
                height={500}
                className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-28 h-28 sm:w-36 sm:h-36 bg-orange-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
                <div className="text-center">
                  <div>AMAZING</div>
                  <div className="text-sm">AFRICAN</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-orange-700 uppercase tracking-[0.2em] font-semibold text-sm">
                AMAZING AFRICAN
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                EXPERIENCE
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Embark on an extraordinary journey through Africa&apos;s most spectacular landscapes. 
                From the vast savannas of the Serengeti to the pristine beaches of Zanzibar, 
                our expertly crafted safaris offer unforgettable encounters with wildlife and culture.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experienced guides will take you deep into the heart of Africa, where every moment 
                brings new discoveries and every sunset paints the sky in colors you&apos;ve never imagined.
              </p>
              
              <button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 uppercase tracking-widest font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg cursor-pointer rounded-lg ">
                <span className='text-xl'>DISCOVER MORE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Quote Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 lg:gap-16 max-w-7xl mx-auto">
            <div className="flex-shrink-0">
              <span className="font-['Dancing_Script'] text-orange-700 text-9xl lg:text-[15rem] leading-none block w">A</span>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                ADVENTURE BEGINS AT THE END OF
              </h2>
              <div className="text-xl md:text-2xl font-serif text-gray-600 mb-8">
                THE ROADS YOU KNOW
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto lg:mx-0">
                <p>
                  Step beyond the familiar and into the extraordinary. Our safaris take you where 
                  few have ventured, revealing Africa&apos;s hidden treasures and creating memories 
                  that will last a lifetime.
                </p>
                <p>
                  Every journey is a story waiting to be written. Join us and make memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-24 bg-gray-50 text-xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              DISCOVER OUR AMAZING DESTINATIONS
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully selected destinations, each offering
              unique wildlife encounters, breathtaking landscapes, and authentic
              cultural experiences that define the true spirit of Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group cursor-pointer perspective-1000"
                onClick={() => {
                  setActiveDestination(index);
                  handleCardFlip(index);
                }}
              >
                <div className={`relative w-full h-80 sm:h-96 md:h-[400px] transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 ${flippedCards.has(index) ? 'rotate-y-180' : ''}`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
                      <div className="absolute bottom-8 left-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-3">
                          {dest.name}
                        </h3>
                        <p className="text-base md:text-lg opacity-90 max-w-xs">
                          {dest.description}
                        </p>
                      </div>
                      {activeDestination === index && (
                        <div className="absolute top-6 right-6 w-6 h-6 bg-orange-700 rounded-full animate-pulse shadow-lg"></div>
                      )}
                      {/* Mobile tap indicator */}
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2 md:hidden">
                        <Hand className="w-4 h-4 text-white animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-orange-700 to-orange-900 rounded-2xl shadow-2xl flex flex-col justify-center items-center text-white p-8">
                    <div className="text-center">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-widest mb-4">
                        {dest.name}
                      </h3>
                      <p className="text-lg opacity-90 mb-6 max-w-xs leading-relaxed">
                        Experience the adventure of a lifetime with our expert
                        guides and carefully curated experiences.
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (dest.slug) {
                            window.location.href = `/packages/${dest.slug}`;
                          }
                        }}
                        className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        DISCOVER MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile interaction hint */}
          <div className="text-center md:hidden">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <Hand className="w-4 h-4" />
              Tap cards to explore more
            </p>
          </div>
        </div>
      </section>
      
      {/* Great Wildebeest Migration Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="text-orange-700 uppercase tracking-[0.2em] font-semibold text-sm">
                THE GREAT WILDEBEEST
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
                MIGRATION
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Witness one of nature&apos;s most spectacular events as over two million wildebeest, 
                zebras, and gazelles traverse the Serengeti ecosystem in an endless search for 
                fresh grasslands and water.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This ancient ritual of survival unfolds across 1,800 miles of African wilderness, 
                offering photographers and wildlife enthusiasts the opportunity to capture 
                moments of raw natural drama.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-t border-b border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">2M+</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Animals</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">1,800</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Miles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-700 mb-2">Year Round</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">Journey</div>
                </div>
              </div>
              
              <button className="bg-orange-700 hover:bg-orange-800 text-white px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg group rounded-lg">
                <span>LEARN MORE</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="relative">
              <Image
                src="/image/zebra.jpg"
                alt="Wildebeest Migration"
                width={800}
                height={500}
                className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center space-x-2 text-gray-900">
                  <Star className="w-5 h-5 text-orange-700 fill-current" />
                  <span className="font-semibold">Best Time: July - October</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">A curated collection of nature&apos;s untamed beauty, captured in fleeting moments through the lens</h3>
            <p className="text-xl text-gray-600">A glimpse into untamed beauty through the lens — capturing fleeting moments of wilderness, raw emotion, and nature&apos;s quiet power, frozen in time forever</p>
          </div>
          
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-5 relative h-64 sm:h-80 md:h-[400px]">
              <Image src="/image/kii3.jpg" alt="Gallery 1" fill className="object-cover rounded-lg" sizes="50vw" />
            </div>
            <div className="col-span-12 md:col-span-7 relative h-64 sm:h-80 md:h-[400px]">
              <Image src="/image/journey.jpg" alt="Gallery 2" fill className="object-cover rounded-lg" sizes="50vw" />
            </div>
            <div className="col-span-12 md:col-span-4 relative h-56 sm:h-64 md:h-[300px]">
              <Image src="/image/loin.png" alt="Gallery 3" fill className="object-cover rounded-lg" sizes="33vw" />
            </div>
            <div className="col-span-12 md:col-span-4 relative h-56 sm:h-64 md:h-[300px]">
              <Image src="/image/serengetisafari.jpg" alt="Gallery 4" fill className="object-cover rounded-lg" sizes="33vw" />
            </div>
            <div className="col-span-12 md:col-span-4 relative h-56 sm:h-64 md:h-[300px]">
              <Image src="/image/canopy.jpg" alt="Gallery 5" fill className="object-cover rounded-lg" sizes="33vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Community Section */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/image/wild.jpg')",
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-16 text-center">
          <h2 className="text-xl md:text-5xl font-serif font-bold mb-6">
            JOIN OUR COMMUNITY
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Subscribe to receive exclusive safari tips, destination guides, and special offers for your next African adventure
          </p>
          
          <div className="max-w-lg mx-auto text-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 p-4 border-2 border-white rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition"
              />
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 uppercase tracking-widest shadow-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SafariHomepage;