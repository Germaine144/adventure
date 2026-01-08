"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const ZanzibarPage = () => {
  const [selectedOffering, setSelectedOffering] = useState<Offering | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (selectedOffering) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedOffering.images.length - 1 : prev - 1
      );
    }
  };

  const nextImage = () => {
    if (selectedOffering) {
      setCurrentImageIndex((prev) => 
        prev === selectedOffering.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const offerings: Offering[] = [
    {
      title: "5 Days Stone Town Heritage",
      image: "/image/stone1.jpg",
      description: "Explore the UNESCO World Heritage site with its rich history, spice markets, and Swahili architecture.",
      duration: "5 Days",
      price: "From $800",
      images: ["/image/stone1.jpg", "/image/stone.jpg", "/image/culture.jpg", "/image/prison.jpg"],
      detailedDescription: "Immerse yourself in the rich tapestry of Zanzibar's Stone Town, a UNESCO World Heritage site that stands as one of East Africa's finest examples of Swahili coastal trading towns. This 5-day heritage tour takes you through winding alleyways lined with ornate Arab houses, intricately carved Zanzibari doors, and historic landmarks that tell stories of sultans, traders, and explorers. Visit the House of Wonders, the Old Fort, the Sultan's Palace Museum, and vibrant spice markets. Experience the blend of African, Arab, Indian, and European influences that have shaped this magical town over centuries.",
      highlights: [
        "UNESCO World Heritage Stone Town walking tours",
        "Visit to House of Wonders and Palace Museum",
        "Exploration of historic spice markets",
        "Traditional Swahili architecture and carved doors",
        "Old Fort and Arab architecture",
        "Forodhani Gardens evening food market",
        "Local artisan workshops and galleries",
        "Sunset dhow cruise"
      ],
      included: "Boutique Stone Town hotel, daily breakfast, guided heritage tours, entrance fees, dhow cruise, airport transfers"
    },
    {
      title: "Spice Island Discovery", 
      image: "/image/stone.jpg",
      description: "Journey through aromatic spice plantations and learn about Zanzibar's legendary spice trade history.",
      duration: "3 Days",
      price: "From $450",
      images: ["/image/stone.jpg", "/image/stone1.jpg", "/image/kii4.jpg", "/image/water.jpg"],
      detailedDescription: "Discover why Zanzibar earned its reputation as the Spice Islands on this immersive 3-day spice plantation tour. Walk through lush plantations where cloves, vanilla, cardamom, cinnamon, nutmeg, and black pepper grow in abundance. Learn about traditional cultivation methods, the island's spice trade history, and how these aromatic treasures shaped Zanzibar's economy and culture. Experience hands-on demonstrations of spice processing, enjoy fresh tropical fruits straight from the trees, and understand the medicinal and culinary uses of various spices. This sensory journey includes visits to local villages where spice farming remains a way of life.",
      highlights: [
        "Guided spice plantation tours",
        "Hands-on spice identification and tasting",
        "Traditional spice processing demonstrations",
        "Fresh tropical fruit sampling",
        "Learn about medicinal properties of spices",
        "Visit to local farming villages",
        "Spice cooking class experience",
        "Purchase authentic Zanzibar spices"
      ],
      included: "Mid-range accommodation, meals, professional spice guide, plantation visits, cooking class, transportation"
    },
    {
      title: "Pristine Beach Paradise",
      image: "/image/zuribech.jpg", 
      description: "Relax on powder-white sand beaches with crystal-clear turquoise waters of the Indian Ocean.",
      duration: "7 Days",
      price: "From $1,200",
      images: ["/image/zuribech.jpg", "/image/kii7.jpg", "/image/kii5.jpg", "/image/coastalbeach.jpg"],
      detailedDescription: "Experience the ultimate tropical paradise on this 7-day beach escape to Zanzibar's most stunning coastlines. Stay at luxurious beachfront resorts where powder-white sand meets crystal-clear turquoise waters. Choose from the vibrant beaches of Nungwi and Kendwa in the north, perfect for sunset views and year-round swimming, or the tranquil east coast beaches of Paje and Jambiani, ideal for kitesurfing and peaceful relaxation. Enjoy water sports, traditional dhow sailing, romantic sunset cruises, and world-class diving and snorkeling among pristine coral reefs teeming with marine life.",
      highlights: [
        "7 nights at luxury beachfront resort",
        "Powder-white sand beaches",
        "Swimming in turquoise Indian Ocean waters",
        "Sunset dhow sailing cruises",
        "Water sports and activities",
        "Coral reef snorkeling excursions",
        "Beachside dining and cocktails",
        "Spa treatments and relaxation"
      ],
      included: "Luxury beach resort, all meals, water activities, dhow cruise, snorkeling equipment, spa access, transfers"
    },
    {
      title: "6 Days Cultural Immersion",
      image: "/image/culture.jpg",
      description: "Experience authentic Swahili culture, traditional dhow sailing, and local fishing village life.",
      duration: "6 Days", 
      price: "From $950",
      images: ["/image/culture.jpg", "/image/stone1.jpg", "/image/stone.jpg", "/image/prison.jpg"],
      detailedDescription: "Dive deep into authentic Zanzibar culture on this 6-day immersive experience that goes beyond typical tourist attractions. Live like a local as you visit traditional fishing villages, participate in daily activities with Swahili families, and learn ancient crafts and cooking methods. Experience traditional dhow building, join fishermen on morning catches, learn to cook authentic Swahili dishes, and participate in cultural ceremonies. This journey includes visits to rural villages, interactions with local artisans, Taarab music performances, and insights into Islamic traditions that shape island life. Gain profound understanding of Zanzibar's rich cultural heritage.",
      highlights: [
        "Authentic village homestay experiences",
        "Traditional Swahili cooking classes",
        "Dhow building and sailing workshops",
        "Join local fishermen on morning trips",
        "Learn traditional crafts and weaving",
        "Taarab music and dance performances",
        "Islamic cultural insights and mosque visits",
        "Local artisan market exploration"
      ],
      included: "Mixed accommodation (hotels and homestays), all meals, cultural guide, craft workshops, performances, village visits"
    },
    {
      title: "Dolphin & Snorkeling Safari",
      image: "/image/snoke.jpg",
      description: "Swim with dolphins, explore coral reefs, and discover the incredible marine life of Zanzibar.",
      duration: "4 Days",
      price: "From $700",
      images: ["/image/snoke.jpg", "/image/zuribech.jpg", "/image/kii9.jpg", "/image/coastalbeach.jpg"],
      detailedDescription: "Explore Zanzibar's spectacular underwater world on this 4-day marine adventure. Begin with early morning dolphin encounters in Kizimkazi, where pods of bottlenose and humpback dolphins play in the warm Indian Ocean waters. Snorkel among vibrant coral gardens at Mnemba Atoll, considered one of the world's top diving destinations, where you'll encounter sea turtles, colorful reef fish, and diverse marine life. Visit Chumbe Island Coral Park, a marine sanctuary with pristine reefs. This package includes multiple snorkeling excursions, professional marine guides, and all equipment for unforgettable aquatic experiences.",
      highlights: [
        "Swimming with wild dolphins at Kizimkazi",
        "Mnemba Atoll snorkeling expeditions",
        "Sea turtle encounters",
        "Vibrant coral reef exploration",
        "Chumbe Island marine sanctuary visit",
        "Professional marine guide",
        "All snorkeling equipment provided",
        "Beachfront accommodation"
      ],
      included: "Beach hotel, daily breakfast, all boat trips, snorkeling equipment, marine park fees, professional guide, transfers"
    },
    {
      title: "Prison Island & Jozani Forest",
      image: "/image/prison.jpg",
      description: "Visit giant tortoises on Prison Island and meet rare red colobus monkeys in Jozani Forest.",
      duration: "2 Days",
      price: "From $300",
      images: ["/image/prison.jpg", "/image/nyung1.jpg", "/image/canopy.jpg", "/image/nyung.jpg"],
      detailedDescription: "Experience Zanzibar's unique wildlife on this compact 2-day eco-adventure. Visit Prison Island (Changuu Island) to meet the giant Aldabra tortoises, some over 100 years old, and learn about the island's fascinating history as a former quarantine station. Snorkel in the clear waters surrounding the island before heading to Jozani Chwaka Bay National Park, home to the rare Kirk's red colobus monkeys found nowhere else on Earth. Walk through the ancient mangrove forests, discover diverse bird species, and learn about conservation efforts protecting these endangered primates. This tour perfectly combines history, wildlife, and natural beauty.",
      highlights: [
        "Giant Aldabra tortoise encounters",
        "Prison Island historical tour",
        "Island snorkeling opportunities",
        "Rare red colobus monkey viewing",
        "Jozani Forest nature walks",
        "Ancient mangrove boardwalk",
        "Diverse bird species spotting",
        "Conservation education"
      ],
      included: "Hotel accommodation, meals, boat transfers, park fees, professional naturalist guide, snorkeling equipment"
    }
  ];

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
  };

  const closeModal = () => {
    setSelectedOffering(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full"></div>
          <div className="absolute inset-0 w-full h-full">
                   <Image
                     src="/image/zuribech.jpg" 
                     alt="Safari Background"
                     fill
                     className="object-cover brightness-[0.3]"
                     priority
                     sizes="100vw"
                   />
                 </div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl px-6">
          <div className="mb-12">
            <div className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-6">
              <span className="text-orange-700">Z</span>ANZIBAR PARADISE
            </div>
          </div>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover the enchanting Spice Islands of Zanzibar, where pristine beaches meet ancient Stone Town. 
            Experience a magical blend of Swahili culture, aromatic spices, and crystal-clear Indian Ocean waters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-orange-700 hover:bg-orange-800 text-white px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              DISCOVER PARADISE
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl">
              VIEW EXPERIENCES
            </button>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              OUR ZANZIBAR EXPERIENCES
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Mobile Layout: Header first, then image, then description */}
                <div className="md:hidden">
                  {/* Header Section */}
                  <div className="p-6 pb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-orange-700">{offering.price}</span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image Section */}
                  <div className="relative">
                    <Image 
                      src={offering.image}
                      alt={offering.title}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offering.duration}
                    </div>
                  </div>
                  
                  {/* Description Section */}
                  <div className="p-6 pt-4">
                    <p className="text-gray-600 mb-4 leading-relaxed">{offering.description}</p>
                    
                    <button 
                      onClick={() => openModal(offering)}
                      className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Desktop Layout: Original layout */}
                <div className="hidden md:block">
                  <div className="relative">
                    <Image 
                      src={offering.image}
                      alt={offering.title}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {offering.duration}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{offering.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-orange-700">{offering.price}</span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => openModal(offering)}
                      className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
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

      {/* The Extraordinary Experience Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              The Enchanting Island of Zanzibar
            </h2>
            
            <div className="text-lg text-gray-600 leading-relaxed mb-12">
              <p className="mb-6">
                Zanzibar, the legendary Spice Islands, offers a captivating blend of pristine beaches, rich history, and vibrant culture. 
                This tropical paradise in the Indian Ocean has been a crossroads of civilizations for centuries, creating a unique fusion 
                of African, Arab, Persian, and European influences that defines its charm today.
              </p>
              
              <p className="mb-6">
                <strong>Stone Town</strong>, a UNESCO World Heritage site, stands as one of Africa&apos;s finest examples of Swahili coastal trading towns. 
                Its narrow alleyways wind past ornate palaces, mosques, and bathhouses, while bustling spice markets fill the air with intoxicating aromas. 
                The historic architecture tells stories of sultans, traders, and explorers who shaped this cultural melting pot.
              </p>
              
              <p className="mb-6">
                The island&apos;s <strong>spice plantations</strong> reveal why Zanzibar was once the world&apos;s leading producer of cloves, cinnamon, and cardamom. 
                Guided tours through these aromatic gardens offer sensory experiences where visitors can touch, smell, and taste exotic spices 
                while learning about traditional cultivation methods passed down through generations.
              </p>
              
              <p className="mb-6">
                Zanzibar&apos;s <strong>pristine beaches</strong> stretch along the coastline with powder-white sand and crystal-clear turquoise waters. 
                From the popular Nungwi and Kendwa in the north to the tranquil Paje and Jambiani on the east coast, each beach offers unique experiences 
                from sunset dhow cruises to world-class kitesurfing and diving among vibrant coral reefs.
              </p>
              
              <p className="mb-8">
                The island&apos;s <strong>marine environment</strong> is equally spectacular, with opportunities to swim with dolphins, snorkel among colorful coral gardens, 
                and visit Prison Island to meet giant Aldabra tortoises. The Jozani Forest provides a different adventure, home to the rare red colobus monkeys 
                found nowhere else on Earth, showcasing Zanzibar&apos;s unique biodiversity.
              </p>
              
              <p className="text-xl font-semibold text-gray-800">
                Zanzibar represents the perfect harmony between natural beauty and cultural richness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-orange-700 to-orange-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            READY FOR YOUR ZANZIBAR ESCAPE?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90">
            Immerse yourself in the magic of Zanzibar and experience the perfect blend of culture, history, and paradise
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-orange-700 hover:bg-gray-100 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              BOOK ESCAPE
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </section>

      {/* Modal - Fully Responsive */}
      {selectedOffering && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
               style={{ backgroundImage: 'url("/image/zuribech.jpg")' }}></div>
          
          <div className="bg-white rounded-lg max-w-6xl w-full my-4 sm:my-8 overflow-hidden relative shadow-2xl z-20 max-h-[95vh] sm:max-h-[90vh]">
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
                    {selectedOffering.images.map((image, index) => (
                      <div key={index} className="min-w-full h-full relative">
                        <Image
                          src={image}
                          alt={`${selectedOffering.title} ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                          className="object-cover"
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

                  {/* Indicators - Clickable */}
                  <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10">
                    {selectedOffering.images.map((_, index) => (
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
                        Welcome to this Zanzibar Experience
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedOffering.detailedDescription}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        Experience Highlights
                      </h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedOffering.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-700 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 uppercase tracking-wide">
                        What&apos;s Included
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {selectedOffering.included}
                      </p>
                    </div>

                    {/* Book Now Button in Modal */}
                    <div className="pt-4 border-t border-gray-200">
                      <a
                        href={`/booking?tab=destinations&country=zanzibar&itinerary=${encodeURIComponent(selectedOffering.title)}`}
                        className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base"
                      >
                        Book This Itinerary
                      </a>
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

export default ZanzibarPage;