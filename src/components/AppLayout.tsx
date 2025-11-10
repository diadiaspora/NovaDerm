import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { TestimonialCard } from './TestimonialCard';
import { TeamMember } from './TeamMember';
import { BookingModal } from './BookingModal';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { services, categories } from '../data/services';

export default function AppLayout() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Treatments');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredServices = selectedCategory === 'All Treatments'
    ? services
    : services.filter(s => s.category === selectedCategory);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <h1
              style={{ fontFamily: "NorthCarossela, serif" }}
              className="text-3xl text-[#2C5F4F]"
            >
             
              NovaDerm Studio
            </h1>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-[#D4AF37]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-gray-700 hover:text-[#D4AF37]"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-[#D4AF37]"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-[#D4AF37]"
              >
                Reviews
              </button>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#2C5F4F] text-white px-6 py-2 rounded-[5px] hover:bg-[#234a3d] transition-colors"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614813175_00441500.webp"
            alt="NovaDerm Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F4F]/80 to-[#2C5F4F]/40" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2
            style={{ fontFamily: "NorthCarossela, serif" }}
            className="text-white text-5xl md:text-7xl mb-6"
          >
            Refine. Refresh. Reveal.
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Your natural beauty, expertly enhanced
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-white text-[#2C5F4F] px-8 py-4 rounded-[5px] font-semibold text-lg hover:bg-[#F5F1E8] transition-colors"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="border-2 border-white text-white px-8 py-4 rounded-[5px] font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Explore Treatments
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "NorthCarossela, serif" }}
              className="text-4xl md:text-5xl text-[#2C5F4F] mb-4"
            >
            
              Our Treatments
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Advanced aesthetic solutions tailored to your unique beauty goals
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-[5px] font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-[#2C5F4F] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onClick={() => setIsBookingOpen(true)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "NorthCarossela, serif" }}
              className=" text-4xl md:text-5xl text-[#2C5F4F] mb-4"
            >
              Real Results
            </h2>
            <p className="text-gray-600 text-lg">
              See the transformations our clients love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BeforeAfterSlider
              beforeImage="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614814509_067375d2.webp"
              afterImage="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614815578_85634bd8.webp"
              treatment="Botox & Fillers"
            />
            <BeforeAfterSlider
              beforeImage="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614816734_6fc5a0ae.webp"
              afterImage="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614820743_cf0b077d.webp"
              treatment="Microneedling + PRP"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "NorthCarossela, serif" }}
              className="text-4xl md:text-5xl text-[#2C5F4F] mb-4"
            >
              Expert Team
            </h2>
            <p className="text-gray-600 text-lg">
              Board-certified professionals dedicated to your care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Dr. Sarah Chen"
              role="Medical Director"
              image="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614831388_88a7d73b.webp"
              credentials={["MD, Board Certified", "15+ Years Experience"]}
            />
            <TeamMember
              name="Dr. Emily Rodriguez"
              role="Aesthetic Physician"
              image="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614834073_cf7e1adb.webp"
              credentials={["DO, Dermatology", "Injectable Specialist"]}
            />
            <TeamMember
              name="Jessica Park"
              role="Lead Aesthetician"
              image="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614836435_c90710a2.webp"
              credentials={["Licensed Aesthetician", "Laser Certified"]}
            />
            <TeamMember
              name="Amanda Foster"
              role="Nurse Injector"
              image="https://d64gsuwffb70l.cloudfront.net/690f5dde93bdf59edc4388fc_1762614838317_1605f2f3.webp"
              credentials={["RN, BSN", "Advanced Injector"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "NorthCarossela, serif" }}
              className="text-4xl md:text-5xl text-[#2C5F4F] mb-4"
            >
              Client Love
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Jennifer M."
              treatment="Botox & Lip Filler"
              text="Dr. Chen is an artist! My results look so natural. I feel like myself, just refreshed."
              rating={5}
            />
            <TestimonialCard
              name="Rachel K."
              treatment="HydraFacial Series"
              text="My skin has never looked better. The team is professional, kind, and truly cares about results."
              rating={5}
            />
            <TestimonialCard
              name="Maria S."
              treatment="RF Microneedling"
              text="Amazing experience from consultation to results. My skin is tighter and smoother than ever!"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C5F4F] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-4">NovaDerm Studio</h3>
            <p className="text-white/80">Refining beauty, naturally.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("services")}
                className="block hover:text-[#D4AF37]"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="block hover:text-[#D4AF37]"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block hover:text-[#D4AF37]"
              >
                Team
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-white/80">123 Beauty Lane</p>
            <p className="text-white/80">Beverly Hills, CA 90210</p>
            <p className="text-white/80">(555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p className="text-white/80">Mon-Fri: 9am-7pm</p>
            <p className="text-white/80">Sat: 10am-5pm</p>
            <p className="text-white/80">Sun: Closed</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2025 NovaDerm Studio. All rights reserved.</p>
        </div>
      </footer>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
