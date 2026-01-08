"use client";
import React, { useState } from 'react';
import Image from 'next/image'; // Import the Image component
import { ArrowRight, Star, X, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface Offering {
  title: string;
  image: string;
  description: string;
  duration: string;
  price: string;
  images: string[];
  detailedDescription: string;
  highlights: string[];
  included: string;
}

const RwandaPage = () => {
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const offerings: Offering[] = [
    {
      title: "4 Days at Big Five",
      image: "/image/big52.jpg",
      description: "Experience the magnificent Big Five in Akagera National Park with our expertly guided safari adventure.",
      duration: "4 Days",
      price: "From $1,200",
      images: ["/image/big51.jpg", "/image/big53.jpg", "/image/big52.jpg", "/image/eeeee.jpg"],
      detailedDescription: "Embark on an unforgettable 4-day safari adventure in Akagera National Park, Rwanda's premier Big Five destination. This comprehensive package includes game drives across diverse landscapes, from open savannas to dense woodlands and pristine wetlands. Our expert guides will help you spot elephants, lions, leopards, buffalo, and rhinos in their natural habitat. The park is also home to over 500 bird species, making it a paradise for wildlife photographers and nature enthusiasts.",
      highlights: [
        "Professional safari guide throughout the journey",
        "Game drives in custom safari vehicles",
        "Accommodation in luxury safari lodge",
        "All meals and beverages included",
        "Night game drives for nocturnal wildlife",
        "Boat safari on Lake Ihema"
      ],
      included: "Accommodation, all meals, park fees, professional guide, transportation"
    },
    {
      title: "Extended Wildlife Expeditions", 
      image: "/image/wilds2.jpg",
      description: "Comprehensive wildlife viewing across multiple national parks with extended stays for the ultimate safari experience.",
      duration: "7-10 Days",
      price: "From $2,500",
      images: ["/image/wilds1.jpg", "/image/wilds2.jpg", "/image/loin.png", "/image/tsavo.jpg"],
      detailedDescription: "Our most comprehensive safari package takes you on an extended journey through Rwanda's most spectacular national parks. This expedition covers Akagera, Nyungwe, and Volcanoes National Parks, offering diverse wildlife encounters from the Big Five to mountain gorillas and chimpanzees. Experience the full spectrum of Rwanda's incredible biodiversity with comfortable accommodations and expert guidance throughout your journey.",
      highlights: [
        "Visit all three major national parks",
        "Mountain gorilla trekking experience",
        "Chimpanzee tracking in Nyungwe",
        "Big Five safari in Akagera",
        "Canopy walk in ancient rainforest",
        "Cultural village visits",
        "Professional photography guidance"
      ],
      included: "Luxury accommodation, all meals, park permits, professional guides, transportation, cultural experiences"
    },
    {
      title: "Adventure in Nyungwe",
      image: "/image/canopy.jpg", 
      description: "Explore the ancient rainforest of Nyungwe with canopy walks, chimpanzee tracking, and bird watching.",
      duration: "3 Days",
      price: "From $800",
      images: ["/image/canopy.jpg", "/image/nyung1.jpg", "/image/nyung.jpg", "/image/water.jpg"],
      detailedDescription: "Discover the mystical beauty of Nyungwe Forest National Park, one of Africa's oldest rainforests. This 3-day adventure includes the famous canopy walkway suspended 50 meters above the forest floor, providing breathtaking views and unique wildlife spotting opportunities. Track chimpanzees through dense forest trails and discover over 300 bird species in this biodiversity hotspot.",
      highlights: [
        "Canopy walkway experience",
        "Chimpanzee tracking with permits",
        "Guided nature walks",
        "Bird watching tours",
        "Waterfall hiking",
        "Tea plantation visits",
        "Night forest sounds experience"
      ],
      included: "Forest lodge accommodation, meals, chimpanzee permits, professional guides, transportation"
    },
    {
      title: "5 Days At Combi Safari",
      image: "/image/combi2.jpg",
      description: "Combine multiple parks in one comprehensive safari package covering Akagera, Nyungwe, and Volcanoes.",
      duration: "5 Days", 
      price: "From $1,800",
      images: ["/image/combi1.jpg", "/image/download (4).jpg", "/image/canopy.jpg", "/image/chimanze.jpg"],
      detailedDescription: "The perfect combination safari that showcases Rwanda's three premier national parks in one seamless journey. Experience the thrill of Big Five game viewing in Akagera, trek mountain gorillas in Volcanoes National Park, and explore the ancient rainforest of Nyungwe. This carefully crafted itinerary maximizes wildlife encounters while ensuring comfortable travel between destinations.",
      highlights: [
        "Three national parks in one trip",
        "Mountain gorilla trekking permit",
        "Big Five game drives",
        "Chimpanzee tracking",
        "Canopy walk adventure",
        "Cultural interactions",
        "Professional wildlife photography"
      ],
      included: "Mid-range accommodations, all meals, park permits, professional guides, inter-park transportation"
    },
    {
      title: "4 Days Wildlife Journey",
      image: "/image/journey.jpg",
      description: "Focus on wildlife photography and observation with expert guides in Rwanda's premier national parks.",
      duration: "4 Days",
      price: "From $1,100",
      images: ["/image/jorbey.jpg", "/image/jorp.jpg", "/image/jorp1.jpg", "/image/journey.jpg"],
      detailedDescription: "Designed specifically for wildlife enthusiasts and photographers, this 4-day journey focuses on optimal wildlife viewing and photography opportunities. Our expert guides know the best locations and times for wildlife encounters, ensuring you capture stunning photographs and create lasting memories of Rwanda's incredible fauna.",
      highlights: [
        "Photography-focused game drives",
        "Early morning and late afternoon sessions",
        "Professional photography guidance",
        "Specialized wildlife tracking",
        "Small group sizes for better access",
        "Equipment recommendations and tips",
        "Digital photo review sessions"
      ],
      included: "Photography-friendly accommodations, meals, park fees, specialist guides, transportation"
    },
    {
      title: "Lake Kivu and Hot Springs",
      image: "/image/kii2.jpg",
      description: "Relax and unwind at Lake Kivu's beautiful shores and natural hot springs after your safari adventure.",
      duration: "2 Days",
      price: "From $400",
      images: ["/image/kii7.jpg", "/image/kii4.jpg", "/image/kii5.jpg", "/image/kii9.jpg"],
      detailedDescription: "Perfect for relaxation after an intensive safari experience, this 2-day package at Lake Kivu offers stunning lake views, natural hot springs, and peaceful beach time. Enjoy water activities, visit local fishing villages, and experience the therapeutic benefits of natural hot springs while taking in the beautiful scenery of one of Africa's Great Lakes.",
      highlights: [
        "Lake Kivu beach relaxation",
        "Natural hot springs therapy",
        "Boat trips on the lake",
        "Local fishing village visits",
        "Water sports activities",
        "Sunset viewing experiences",
        "Local cultural interactions"
      ],
      included: "Lakeside accommodation, meals, boat trips, hot springs access, local guide"
    }
  ];

  // Auto-slide effect
  React.useEffect(() => {
    if (selectedOffering) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedOffering.images.length - 1 ? 0 : prev + 1
        );
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [selectedOffering]);

  const openModal = (offering: Offering) => {
    setSelectedOffering(offering);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedOffering(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedOffering) {
      setCurrentImageIndex((prev) => 
        prev === selectedOffering.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedOffering) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedOffering.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      {/* Hero Section - Enhanced Mobile Responsiveness */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0 w-full h-full">
          {/* Linter Warning 1: Changed <img> to Image */}
          <Image
            src="/image/journey.jpg" 
            alt="Safari Background"
            layout="fill"
            objectFit="cover"
            className="brightness-[0.3]"
          />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl w-full px-4 sm:px-6">
          <div className="mb-8 sm:mb-12">
            <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-orange-700">W</span>ILDLIFE
              <br className="sm:hidden" />
              <span className="sm:ml-4">OBSERVATION</span>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 px-2">
            Discover the extraordinary wildlife of Rwanda through our carefully curated safari experiences. 
            From mountain gorillas to the Big Five, experience Africa&apos;s most incredible wildlife encounters. {/* Error Fix: Line 288 */}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
            <button className="bg-orange-700 hover:bg-orange-800 text-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl rounded-lg w-full sm:w-auto">
              START YOUR JOURNEY
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-300 shadow-xl rounded-lg w-full sm:w-auto">
              VIEW OFFERINGS
            </button>
          </div>
        </div>
      </section>

      {/* Our Offerings Section - Enhanced Mobile Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              OUR OFFERINGS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Mobile Layout: Header first, then image, then description */}
                <div className="sm:hidden">
                  {/* Header Section */}
                  <div className="p-4 pb-3">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">{offering.title}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-bold text-orange-700">{offering.price}</span>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative w-full h-56">
                    {/* Linter Warning 2: Changed <img> to Image */}
                    <Image 
                      src={offering.image}
                      alt={offering.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-3 right-3 bg-orange-700 text-white px-2 py-1 rounded-full text-xs font-semibold z-10">
                      {offering.duration}
                    </div>
                  </div>
                  
                  {/* Description Section */}
                  <div className="p-4 pt-3">
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{offering.description}</p>
                    
                    <button 
                      onClick={() => openModal(offering)}
                      className="w-full bg-orange-700 hover:bg-orange-800 text-white py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Desktop Layout: Original layout */}
                <div className="hidden sm:block">
                  <div className="relative w-full h-56 sm:h-64">
                    {/* Linter Warning 3: Changed <img> to Image */}
                    <Image 
                      src={offering.image}
                      alt={offering.title}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-orange-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold z-10">
                      {offering.duration}
                    </div>
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">{offering.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">{offering.description}</p>
                    
                    <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-orange-700">{offering.price}</span>
                      <div className="flex items-center text-yellow-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                  <button 
                    onClick={() => openModal(offering)}
                    className="w-full bg-orange-700 hover:bg-orange-800 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Extraordinary Wildlife Section - Enhanced Typography */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">
              The Extraordinary Wildlife of Rwanda
            </h2>
            
            <div className="text-base sm:text-lg text-gray-600 leading-relaxed space-y-4 sm:space-y-6">
              <p>
                Rwanda is a destination that captivates wildlife enthusiasts with its diverse ecosystems and incredible biodiversity. 
                The country&apos;s national parks offer unparalleled opportunities to witness some of Africa&apos;s most magnificent creatures in their natural habitats.
              </p>
              
              <p>
                In <strong>Akagera National Park</strong>, visitors can encounter the Big Five - elephants, lions, leopards, buffalo, and rhinos - 
                roaming across vast savannas and wetlands. The park&apos;s diverse landscapes also support giraffes, zebras, antelopes, and over 500 bird species, 
                making it a paradise for wildlife photography and observation.
              </p>
              
              <p>
                <strong>Nyungwe Forest National Park</strong> offers a completely different experience with its ancient montane rainforest. 
                Here, you can track chimpanzees, spot over 300 bird species, and discover 13 different primate species including the rare L&apos;Hoest&apos;s monkey. 
                The park&apos;s canopy walkway provides a unique perspective of the forest&apos;s incredible biodiversity.
              </p>
              
              <p>
                <strong>Volcanoes National Park</strong> is world-renowned for its mountain gorilla population, offering intimate encounters with these 
                gentle giants. The park also protects golden monkeys and provides stunning views of the Virunga mountain range, creating an unforgettable 
                wildlife experience that represents Rwanda&apos;s commitment to conservation.
              </p>
              
              <p className="text-lg sm:text-xl font-semibold text-gray-800 text-center pt-4">
                Rwanda&apos;s wildlife represents an incredible journey into the heart of nature&apos;s wonders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Enhanced Mobile */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-700 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">
            READY FOR YOUR RWANDA ADVENTURE?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 px-2">
            Book your wildlife safari today and experience the extraordinary beauty of Rwanda&apos;s national parks {/* Error Fix: Line 451 */}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-2xl mx-auto">
            <button className="bg-white text-orange-700 hover:bg-gray-100 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl rounded-lg w-full sm:w-auto">
              BOOK NOW
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider sm:tracking-widest font-semibold transition-all duration-300 shadow-xl rounded-lg w-full sm:w-auto">
              CONTACT US
            </button>
          </div>
        </div>
      </section>

      {/* Modal - Fully Responsive */}
      {selectedOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          {/* Linter Warning 4: Changed <img> to Image */}
          <Image
            src="/image/canopy.jpg"
            alt="Modal Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          
          <div className="bg-white rounded-lg max-w-6xl w-full my-4 sm:my-8 overflow-hidden relative shadow-2xl z-20 max-h-[95vh] sm:max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 bg-gray-800 text-white rounded-full p-1.5 sm:p-2 hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col lg:flex-row h-full max-h-[95vh] sm:max-h-[85vh]">
              {/* Image Slideshow - Stacked on Mobile */}
              <div className="w-full lg:w-2/5 relative overflow-hidden h-64 sm:h-80 lg:h-auto">
                <div className="relative h-full">
                  <div 
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {selectedOffering.images.map((image: string, index: number) => (
                      <div key={index} className="min-w-full h-full relative">
                        {/* Linter Warning 5: Changed <img> to Image */}
                        <Image
                          src={image}
                          alt={`${selectedOffering.title} ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows - Mobile Friendly */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-colors z-10"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
                    {selectedOffering.images.map((_: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="w-full lg:w-3/5 overflow-y-auto bg-white">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide leading-tight">
                      {selectedOffering.title}
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-orange-700" />
                        <span className="font-medium text-sm sm:text-base">{selectedOffering.duration}</span>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-orange-700">
                        {selectedOffering.price}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Welcome to this Safari Experience
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedOffering.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Tour Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedOffering.highlights.map((highlight: string, index: number) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-700 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        What&apos;s Included {/* Error Fix: Line 622 */}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedOffering.included}
                      </p>
                    </div>

                    {/* Book Now Button in Modal */}
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={`/booking?tab=destinations&country=rwanda&itinerary=${encodeURIComponent(selectedOffering.title)}`}
                        className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
                      >
                        Book This Itinerary
                      </a>
                    </div>

                    <div className="pt-4 sm:pt-6 pb-2 sm:pb-4 sticky bottom-0 bg-white">
                      {/* <button className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3 sm:py-3.5 px-4 sm:px-6 rounded-md font-semibold transition-colors uppercase tracking-wide text-sm sm:text-base">
                        Book Now
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RwandaPage;