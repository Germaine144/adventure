"use client";
import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link';   // Import Next.js Link component
import { Award, Users, Globe, Heart, Target, Shield, Compass, Star } from 'lucide-react';
// import LinkButton from '@/components/ui/LinkButton'; // Uncomment if you create LinkButton.tsx

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Wildlife",
      description: "Our deep love for Africa's wildlife drives everything we do. We're committed to creating experiences that inspire conservation."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Your safety is our top priority. All our guides are certified professionals with extensive training and experience."
    },
    {
      icon: Users,
      title: "Local Communities",
      description: "We work closely with local communities, ensuring tourism benefits the people who call these incredible places home."
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description: "We practice responsible tourism that protects wildlife habitats and supports conservation efforts across East Africa."
    }
  ];

  const stats = [
    { number: "1+", label: "Years Experience" },
    { number: "500+", label: "Happy Travelers" },
    { number: "1", label: "Passionate Founder" },
    { number: "4", label: "Countries Covered" }
  ];

  const founder = {
    name: "UMUHIRE Germaine",
    role: "Founder & Safari Director",
    image: "/image/gege.jpg", // Using an existing image from your project
    description: "With over 15 years of passion for East African wildlife and conservation, I founded this safari company to share the incredible beauty of Africa with travelers from around the world. Born and raised in Kenya, I've spent countless hours in the bush, learning from local communities and wildlife experts. My mission is to create authentic, transformative experiences that not only showcase Africa's natural wonders but also support conservation efforts and empower local communities. Every safari I organize reflects my deep commitment to sustainable tourism and creating memories that last a lifetime."
  };

  return (
    <div className="min-h-screen text-xl">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
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
        
        <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 md:mb-6">
           Inspired by Africa&apos;s Soul
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90">
Born from a passion for Africa&apos;s wild beauty and crafted through years of expertise, we create unforgettable journeys that connect travelers to the continent&apos;s heart, culture, and adventure.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-3 bg-orange-100 rounded-full mb-6">
              <Target className="w-12 h-12 text-orange-700" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To create transformative safari experiences that connect people with Africa&apos;s extraordinary wildlife 
              while supporting conservation efforts and empowering local communities. We believe that every journey 
              should leave a positive impact on both the traveler and the destinations we explore.
            </p>
            <div className="w-24 h-1 bg-orange-700 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                  Where It All Began
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                  <p>
                    Our journey started in 2025 when our founder, UMUHIRE Germaine, a Kenyan-born wildlife enthusiast, 
                    realized that many visitors to East Africa were missing the authentic, transformative safari 
                    experiences they dreamed of.
                  </p>
                  <p>
                    With a background in wildlife conservation and a network of local guides, David set out to 
                    create a safari company that would go beyond the ordinary. He envisioned experiences that would 
                    deeply connect travelers with Africa&apos;s natural wonders while respecting local cultures and 
                    contributing to conservation efforts.
                  </p>
                  <p>
                    Today, I personally operate across Rwanda, Tanzania, Kenya, and Zanzibar, working closely with 
                    trusted local guides and communities. Every safari I organize reflects my commitment to excellence, 
                    authenticity, and sustainable tourism, ensuring each traveler receives a truly personalized experience.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/image/phonee.jpg" 
                  alt="Safari landscape with wildlife" 
                  width={400} 
                  height={300}
                  className="rounded-lg shadow-2xl w-full h-auto max-w-sm mx-auto" // Better mobile responsiveness
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-800 text-white p-6 rounded-lg shadow-xl">
                  <p className="text-4xl font-bold">15+</p>
                  <p className="text-sm uppercase tracking-wide">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg uppercase tracking-wide opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every safari we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Meet Your Safari Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate founder who personally crafts your unforgettable African adventure
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
               <div className="md:flex md:flex-row-reverse">
                 <div className="relative h-64 md:h-auto md:w-1/3">
                   <Image 
                     src={founder.image} 
                     alt={founder.name}
                     fill
                     className="object-cover object-center"
                   />
                 </div>
                 <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-orange-700 font-semibold text-lg mb-6">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed text-lg">{founder.description}</p>
                  
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700 mb-1">15+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-700 mb-1">4</div>
                      <div className="text-sm text-gray-600">Countries Covered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12 text-center">
              Why Choose Us
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Local Knowledge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our guides are born and raised in East Africa with deep connections to the land, wildlife, and local communities. 
                    They don&apos;t just show you wildlife—they share the stories, behaviors, and ecology that bring each encounter to life.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Personalized Experiences</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We understand that no two travelers are alike. Whether you&apos;re a photographer seeking the perfect shot, 
                    a family creating memories, or a solo adventurer, we customize every safari to match your interests and pace.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Commitment to Conservation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A portion of every safari booking goes directly to wildlife conservation projects and community development initiatives. 
                    Your journey helps protect the incredible ecosystems and species you come to see.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-700 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Seamless Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    From your first inquiry to your return home, we handle every detail with care. Our team manages logistics, 
                    accommodations, permits, and transportation so you can focus entirely on the experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="w-16 h-16 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">TripAdvisor Excellence</h3>
              <p className="text-gray-600">Certificate of Excellence 2020-2024</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Star className="w-16 h-16 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safari Awards</h3>
              <p className="text-gray-600">Best East Africa Safari Operator 2023</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Compass className="w-16 h-16 text-orange-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">Eco-Tourism Certification 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-800 to-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Let us help you create the safari experience of a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Using Next.js Link for internal navigation */}
            <Link href="/contact" passHref>
              <button className="bg-white text-orange-700 hover:bg-gray-100 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl rounded">
                CONTACT US
              </button>
            </Link>
            <Link href="/safaris" passHref>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-10 py-4 uppercase tracking-widest font-semibold transition-all duration-300 shadow-xl rounded">
                VIEW SAFARIS
              </button>
            </Link>
            {/* If you used LinkButton component: */}
            {/* <LinkButton href="/contact" variant="primary">CONTACT US</LinkButton>
            <LinkButton href="/safaris" variant="secondary">VIEW SAFARIS</LinkButton> */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutPage;