"use client";
import React, { useMemo, useState, Suspense } from "react";
import Image from "next/image";
// import Link from "next/link"; // Not used in the provided snippet
import { useSearchParams } from "next/navigation";
import { Calendar, Users, MapPin, Package2 } from "lucide-react";

type PackageKey = "gorilla-trekking" | "akagera-national-park" | "city-tour";
type CountryKey = "rwanda" | "kenya" | "tanzania" | "zanzibar";

const PACKAGE_OPTIONS: Record<PackageKey, { title: string; image: string; blurb: string }> = {
  "gorilla-trekking": {
    title: "Gorilla Trekking",
    image: "/image/goritre.jpg",
    blurb: "Primate encounters in Volcanoes National Park",
  },
  "akagera-national-park": {
    title: "Akagera National Park",
    image: "/image/ele1.jpeg",
    blurb: "Savannah Big Five safari across lakes and plains",
  },
  "city-tour": {
    title: "Kigali City Tour",
    image: "/image/conv.jpg",
    blurb: "Culture, food and viewpoints in Kigali",
  },
};

const COUNTRY_OPTIONS: Record<CountryKey, { title: string; image: string }> = {
  rwanda: { title: "Rwanda", image: "/image/Kigali.jpg" },
  kenya: { title: "Kenya", image: "/image/serengetisafari.jpg" },
  tanzania: { title: "Tanzania", image: "/image/serengeti.jpg" },
  zanzibar: { title: "Zanzibar", image: "/image/zanzi.jpg" },
};

// Real itineraries from each destination page
const COUNTRY_ITINERARIES: Record<CountryKey, Array<{ title: string; duration: string; price: string; description: string }>> = {
  rwanda: [
    { title: "4 Days at Big Five", duration: "4 Days", price: "From $1,200", description: "Experience the magnificent Big Five in Akagera National Park with our expertly guided safari adventure." },
    { title: "Extended Wildlife Expeditions", duration: "7-10 Days", price: "From $2,500", description: "Comprehensive wildlife viewing across multiple national parks with extended stays for the ultimate safari experience." },
    { title: "Adventure in Nyungwe", duration: "3 Days", price: "From $800", description: "Explore the ancient rainforest of Nyungwe with canopy walks, chimpanzee tracking, and bird watching." },
    { title: "5 Days At Combi Safari", duration: "5 Days", price: "From $1,800", description: "Combine multiple parks in one comprehensive safari package covering Akagera, Nyungwe, and Volcanoes." },
    { title: "4 Days Wildlife Journey", duration: "4 Days", price: "From $1,100", description: "Focus on wildlife photography and observation with expert guides in Rwanda's premier national parks." },
    { title: "Lake Kivu and Hot Springs", duration: "2 Days", price: "From $400", description: "Relax and unwind at Lake Kivu's beautiful shores and natural hot springs after your safari adventure." }
  ],
  kenya: [
    { title: "4 Days Maasai Mara Magic", duration: "4 Days", price: "From $1,300", description: "Experience the world-famous Maasai Mara Reserve and witness the incredible wildebeest migration crossing." },
    { title: "Amboseli Elephant Kingdom", duration: "3 Days", price: "From $850", description: "Marvel at majestic elephants against the backdrop of Mount Kilimanjaro in Amboseli National Park." },
    { title: "Tsavo East & West Safari", duration: "5 Days", price: "From $1,400", description: "Explore Kenya's largest national park system, home to red elephants and diverse wildlife landscapes." },
    { title: "6 Days Great Rift Valley", duration: "6 Days", price: "From $1,900", description: "Journey through Lake Nakuru, Lake Naivasha, and Hell's Gate for the ultimate Rift Valley experience." },
    { title: "Samburu Special Five", duration: "4 Days", price: "From $1,250", description: "Discover unique wildlife species including Grevy's zebras, reticulated giraffes, and Somali ostriches." },
    { title: "Coastal Safari & Beach", duration: "7 Days", price: "From $2,100", description: "Combine thrilling safari adventures with relaxing beach time along Kenya's pristine Indian Ocean coast." }
  ],
  tanzania: [
    { title: "5 Days Serengeti Safari", duration: "5 Days", price: "From $1,500", description: "Witness the Great Migration and encounter the Big Five in the world-famous Serengeti National Park." },
    { title: "Ngorongoro Crater Adventure", duration: "3 Days", price: "From $900", description: "Explore the UNESCO World Heritage site known as Africa's Eden, home to the highest concentration of wildlife." },
    { title: "Tarangire Elephant Paradise", duration: "4 Days", price: "From $1,100", description: "Experience massive elephant herds and ancient baobab trees in Tanzania's elephant sanctuary." },
    { title: "7 Days Northern Circuit", duration: "7 Days", price: "From $2,800", description: "Complete northern circuit covering Serengeti, Ngorongoro, Tarangire, and Lake Manyara parks." },
    { title: "Kilimanjaro Wildlife Safari", duration: "6 Days", price: "From $2,200", description: "Combine wildlife viewing with breathtaking views of Mount Kilimanjaro in Amboseli ecosystem." },
    { title: "Lake Manyara Tree Climbing", duration: "2 Days", price: "From $600", description: "Famous for tree-climbing lions and incredible birdlife along the alkaline lake shores." }
  ],
  zanzibar: [
    { title: "5 Days Stone Town Heritage", duration: "5 Days", price: "From $800", description: "Explore the UNESCO World Heritage site with its rich history, spice markets, and Swahili architecture." },
    { title: "Spice Island Discovery", duration: "3 Days", price: "From $450", description: "Journey through aromatic spice plantations and learn about Zanzibar's legendary spice trade history." },
    { title: "Pristine Beach Paradise", duration: "7 Days", price: "From $1,200", description: "Relax on powder-white sand beaches with crystal-clear turquoise waters of the Indian Ocean." },
    { title: "6 Days Cultural Immersion", duration: "6 Days", price: "From $950", description: "Experience authentic Swahili culture, traditional dhow sailing, and local fishing village life." },
    { title: "Dolphin & Snorkeling Safari", duration: "4 Days", price: "From $700", description: "Swim with dolphins, explore coral reefs, and discover the incredible marine life of Zanzibar." },
    { title: "Prison Island & Jozani Forest", duration: "2 Days", price: "From $300", description: "Visit giant tortoises on Prison Island and meet rare red colobus monkeys in Jozani Forest." }
  ]
};

function BookingPageContent() {
  const params = useSearchParams();
  const initialTab = (params.get("country") || params.get("package") ? "destinations" : "packages") as "packages" | "destinations"; // Corrected initialTab logic
  const [activeTab, setActiveTab] = useState<"packages" | "destinations">(initialTab);

  const preselectedPackage = params.get("package") as PackageKey | null;
  const preselectedCountry = params.get("country") as CountryKey | null;
  const [selectedPackage, setSelectedPackage] = useState<PackageKey | "">(preselectedPackage || "");
  const [selectedCountry, setSelectedCountry] = useState<CountryKey | "">(preselectedCountry || "");
  const preselectedItinerary = params.get("itinerary") as string | null;
  const [selectedItinerary, setSelectedItinerary] = useState<string>(preselectedItinerary || "");


  const headerTitle = useMemo(() => (activeTab === "packages" ? "Book a Package" : "Book a Destination"), [activeTab]);

  return (
    <main className="min-h-screen bg-white text-xl" >
      {/* Hero */}
      <section className="relative h-[40vh] w-full">
        <Image src="/image/bg.png" alt="Booking" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tight mb-4">{headerTitle}</h1>
            <p className="text-lg md:text-xl opacity-90">Select {activeTab === "packages" ? "a package" : "a country"} and send your request.</p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="inline-flex rounded-full border border-gray-200 overflow-hidden mb-8 bg-white">
            <button onClick={() => { setActiveTab("packages"); setSelectedCountry(""); setSelectedItinerary(""); }} className={`px-6 py-3 text-sm font-semibold ${activeTab === "packages" ? "bg-orange-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}>Packages</button>
            <button onClick={() => { setActiveTab("destinations"); setSelectedPackage(""); }} className={`px-6 py-3 text-sm font-semibold ${activeTab === "destinations" ? "bg-orange-600 text-white" : "text-gray-700 hover:bg-gray-50"}`}>Destinations</button>
          </div>

          {activeTab === "packages" ? (
            <PackagesForm selected={selectedPackage} onSelect={setSelectedPackage} />
          ) : (
            <DestinationsForm selectedCountry={selectedCountry} onSelectCountry={setSelectedCountry} selectedItinerary={selectedItinerary} onSelectItinerary={setSelectedItinerary} />)
          }
        </div>
      </section>
    </main>
  );
}

function LoadingFallback() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[40vh] w-full">
        <Image src="/image/bg.png" alt="Booking" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">Book Your Safari</h1>
            <p className="text-lg md:text-xl opacity-90">Loading booking options...</p>
          </div>
        </div>
      </section>

      {/* Loading state */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <BookingPageContent />
    </Suspense>
  );
}

function PackagesForm({ selected, onSelect }: { selected: PackageKey | ""; onSelect: (p: PackageKey) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {Object.entries(PACKAGE_OPTIONS).map(([key, p]) => (
        <button key={key} type="button" onClick={() => onSelect(key as PackageKey)} aria-pressed={selected === key} className={`text-left rounded-2xl border ${selected === key ? "border-orange-600 ring-2 ring-orange-200" : "border-gray-200"} overflow-hidden bg-white shadow hover:shadow-md transition-all`}>
          <div className="relative h-40 w-full">
            <Image src={p.image} alt={p.title} fill className="object-cover" sizes="33vw" />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-gray-900 mb-1 flex items-center gap-2"><Package2 className="w-4 h-4 text-orange-600" />{p.title}</h3>
            <p className="text-sm text-gray-600">{p.blurb}</p>
          </div>
        </button>
      ))}

      <BookingDetails CTALabel="Request Booking" disabled={!selected} />
    </div>
  );
}

function DestinationsForm({ 
  selectedCountry, 
  onSelectCountry,
  selectedItinerary,
  onSelectItinerary
}: { 
  selectedCountry: CountryKey | ""; 
  onSelectCountry: (c: CountryKey) => void;
  selectedItinerary: string;
  onSelectItinerary: (it: string) => void;
}) {
  
  return (
    <div className="space-y-8">
      {/* Country Selection */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Select a Country</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(COUNTRY_OPTIONS).map(([key, country]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                onSelectCountry(key as CountryKey);
                onSelectItinerary(""); // Reset itinerary when country changes
              }}
              aria-pressed={selectedCountry === key}
              className={`text-left rounded-2xl border ${selectedCountry === key ? "border-orange-600 ring-2 ring-orange-200" : "border-gray-200"} overflow-hidden bg-white shadow hover:shadow-md transition-all`}
            >
              <div className="relative h-32 w-full">
                <Image src={country.image} alt={country.title} fill className="object-cover" sizes="25vw" />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-600" />{country.title}
                </h4>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Show selected country info and itineraries */}
      {selectedCountry && (
        <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="w-6 h-6 text-orange-600" />
            <h2 className="text-2xl font-bold text-gray-900">{COUNTRY_OPTIONS[selectedCountry].title}</h2>
          </div>
          <p className="text-gray-600">Choose from our available itineraries in {COUNTRY_OPTIONS[selectedCountry].title}</p>
        </div>
      )}

      {/* Itinerary Selection */}
      {selectedCountry && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Itineraries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COUNTRY_ITINERARIES[selectedCountry].map((itinerary, index) => (
              <button
                key={index}
                type="button"
                onClick={() => onSelectItinerary(itinerary.title)}
                className={`text-left rounded-xl border ${selectedItinerary === itinerary.title ? "border-orange-600 ring-2 ring-orange-200" : "border-gray-200"} p-4 bg-white shadow hover:shadow-md transition-all`}
              >
                <h4 className="font-semibold text-gray-900 mb-2">{itinerary.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{itinerary.description}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-orange-600 font-medium">{itinerary.duration}</span>
                  <span className="text-gray-700 font-semibold">{itinerary.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Booking Form */}
      <BookingDetails CTALabel="Request Booking" disabled={!selectedCountry || !selectedItinerary} />
    </div>
  );
}

function BookingDetails({ CTALabel, disabled }: { CTALabel: string; disabled: boolean }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [guests, setGuests] = useState<number>(2);
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setStart("");
      setEnd("");
      setGuests(2);
      setNotes("");
    }, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 shadow p-8 text-center text-">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You for Choosing Us!</h3>
          <p className="text-gray-600 mb-4">
            We&apos;ve received your booking request and are excited to help you plan your perfect safari adventure.
          </p>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-orange-800 mb-2">What happens next?</h4>
          <ul className="text-sm text-orange-700 space-y-1 text-left">
            <li>• We&apos;ll review your request within 24 hours</li>
            <li>• Our team will contact you with availability and pricing</li>
            <li>• We&apos;ll work together to customize your perfect itinerary</li>
            <li>• You&apos;ll receive detailed travel information before departure</li>
          </ul>
        </div>

        <div className="text-sm text-gray-500">
          <p>We look forward to creating unforgettable memories with you!</p>
          <p className="mt-2 font-medium text-orange-600">Safari Tour Team</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow p-6 space-y-4 text-gray-800 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 ">Full Name</label>
          <input 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
             placeholder="Please Enter Your Full Name" 
            required 
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
             placeholder="Please Enter Your Email Address" 
            required 
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors outline-none" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"><Calendar className="w-4 h-4 text-orange-600" />Start Date</label>
          <input 
            type="date" 
            value={start} 
            onChange={(e) => setStart(e.target.value)} 
            required 
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
          <input 
            type="date" 
            value={end} 
            onChange={(e) => setEnd(e.target.value)} 
            required 
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors outline-none" 
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2"><Users className="w-4 h-4 text-orange-600" />Guests</label>
          <input 
            type="number" 
            min={1} 
            value={guests} 
            onChange={(e) => setGuests(Number(e.target.value))} 
            required 
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors outline-none" 
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
        <textarea 
          rows={4} 
          value={notes} 
          onChange={(e) => setNotes(e.target.value)} 
          placeholder="Tell us about your preferences, special requests, or any questions you have..." 
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors outline-none resize-none" 
        />
      </div>

      <button type="submit" disabled={disabled} className={`w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold transition-all ${disabled ? "opacity-50 cursor-not-allowed" : "hover:from-orange-600 hover:to-red-600"}`}>
        {CTALabel}
      </button>

      <p className="text-xs text-gray-500">Submitting will send us your request. We will reply with availability and pricing.</p>
    </form>
  );
}