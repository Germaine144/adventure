"use client";
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send,  } from 'lucide-react';
import Image from 'next/image';
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '',
    message: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccessModal(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      travelers: '',
      message: ''
    });
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+250 787 938 140", "+250 791 593 529"],
      description: "Mon-Sat, 8AM-6PM EAT"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@safaricompany.com", "bookings@safaricompany.com"],
      description: "We reply within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Locations",
      details: ["Kigali, Rwanda", "Nairobi, Kenya"],
      description: "Visit us by appointment"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "8:00 AM - 6:00 PM EAT"],
      description: "Closed on Sundays"
    }
  ];

  const destinations = [
    "Rwanda Safari",
    "Tanzania Safari",
    "Kenya Safari",
    "Zanzibar Retreat",
    "Multi-Country Safari",
    "Custom Safari"
  ];

  return (
    <div className="min-h-screen text-xl">
      {/* Hero Section */}

            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 w-full h-full">
                       {/* Linter Warning 1: Changed <img> to Image */}
                       <Image
                         src="/image/contact.jpg" 
                         alt="Safari Background"
                         layout="fill"
                         objectFit="cover"
                         className="brightness-[0.2]"
                       />
                     </div>
              
              <div className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-6">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 md:mb-6">
             Adventure Begins with a Message
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90">
                  Let&apos;s plan your unforgettable African safari adventure — explore stunning landscapes, encounter majestic wildlife, and experience Africa&apos;s vibrant heart with expert-guided journeys
       
                </p>
              </div>
            </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 font-medium mb-1">{detail}</p>
                ))}
                <p className="text-gray-500 text-sm mt-2">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Side - Form */}
              <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our safari experts will get back to you within 24 hours with a personalized itinerary.
                </p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Preferred Destination *
                      </label>
                      <select
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                      >
                        <option value="">Select destination</option>
                        {destinations.map((dest, index) => (
                          <option key={index} value={dest}>{dest}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
                      placeholder="2"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 resize-none"
                      placeholder="Tell us about your dream safari..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-700 hover:bg-orange-800 text-white py-4 px-8 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Side - Info & Map */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Contact Us?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-700 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Expert Consultation:</strong> Get personalized recommendations from our safari specialists
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-700 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Custom Itineraries:</strong> We create tailored safari experiences to match your interests and budget
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-700 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Quick Response:</strong> Our team responds to all inquiries within 24 hours
                      </p>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-700 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600">
                        <strong>Transparent Pricing:</strong> Receive detailed quotes with no hidden fees
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">How far in advance should I book?</h4>
                      <p className="text-gray-600 text-sm">
                        We recommend booking 3-6 months in advance, especially for peak season (June-October) and gorilla trekking permits.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">What&apos;s included in the safari packages?</h4>
                      <p className="text-gray-600 text-sm">
                        Most packages include accommodation, meals, park fees, professional guide, and transportation. Specific inclusions vary by package.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Do you offer group discounts?</h4>
                      <p className="text-gray-600 text-sm">
                        Yes! We offer special rates for groups of 6 or more travelers. Contact us for a custom group quote.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-700 text-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Book?
                  </h3>
                  <p className="mb-6">
                    Call us directly to speak with a safari expert and start planning your adventure today!
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span className="font-semibold">+250 788 123 456</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" />
                      <span className="font-semibold">info@safaricompany.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8 text-center">
              Our Locations
            </h2>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl font-semibold">Map Integration</p>
                <p className="text-sm">Google Maps or interactive map would go here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for safari tips, special offers, and travel inspiration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700"
              />
              <button className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl transform animate-slideUp">
            <div className="text-center">
              {/* Success Icon */}
              <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>

              {/* Message */}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Your inquiry has been received successfully. Our safari experts will get back to you within <span className="font-bold text-orange-700">24 hours</span> with a personalized itinerary.
              </p>

              {/* Additional Info */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  Check your email for a confirmation message with your inquiry details.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="w-full bg-orange-700 hover:bg-orange-800 text-white py-3 px-6 rounded-lg font-semibold uppercase tracking-wide transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;