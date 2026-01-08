// src/components/Footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 text-xl">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-white">
              <span className="font-serif text-xl font-bold">SAFARI</span>
              <span className="font-serif text-xl"> INTO AFRICA</span>
            </Link>
          </div>

          {/* Column 2: Our Journeys */}
          <div>
            <h3 className="uppercase text-white font-semibold tracking-widest mb-4">Our Journeys</h3>
            <ul className="space-y-2 ">
              <li><Link href="/destinations/rwanda" className="hover:text-brand-primary transition-colors">Rwanda Safari</Link></li>
              <li><Link href="/journeys/kenya" className="hover:text-brand-primary transition-colors">Kenya Safari</Link></li>
              <li><Link href="/journeys/tanzania" className="hover:text-brand-primary transition-colors">Tanzania Safari</Link></li>
              <li><Link href="/journeys/kenya-tanzania" className="hover:text-brand-primary transition-colors">Kenya & Tanzania Safari</Link></li>
              <li><Link href="/journeys/wildebeest-migration" className="hover:text-brand-primary transition-colors">Wildebeest Migration</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="uppercase text-white font-semibold tracking-widest mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p>Safari Into Africa</p>
              <p>Makuza PEACE Plaza , 2nd Floor</p>
              <p>Kigali , Rwanda </p>
              <p><a href="tel:+250791573529" className="hover:text-brand-primary transition-colors">+250 791 593 529 </a></p>
              <p><a href="mailto:safaris@safariintoafrica.com" className="hover:text-brand-primary transition-colors">safaris@safariintoafrica.com</a></p>
            </address>
          </div>
          
          {/* Column 4: Social */}
          <div>
            <h3 className="uppercase text-white font-semibold tracking-widest mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook"><Facebook className="hover:text-brand-primary transition-colors" /></Link>
              <Link href="#" aria-label="Instagram"><Instagram className="hover:text-brand-primary transition-colors" /></Link>
              {/* <Link href="#" aria-label="Pinterest"><Pinterest className="hover:text-brand-primary transition-colors" /></Link> */}
              <Link href="#" aria-label="Twitter"><Twitter className="hover:text-brand-primary transition-colors" /></Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Safari Into Africa. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-primary transition-colors">Terms Of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;