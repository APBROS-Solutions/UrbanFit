import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, Heart, Zap, Target, MapPin, Clock, Phone, Mail } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'programs', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Dumbbell className="w-8 h-8 text-[#39FF14]" />
              <span className="text-xl font-bold">UrbanFit</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'programs', 'pricing', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${
                    activeSection === item ? 'text-[#39FF14]' : 'text-white hover:text-[#39FF14]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-neutral-900">
            <div className="px-4 py-4 space-y-3">
              {['home', 'programs', 'pricing', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 hover:text-[#39FF14] transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-black opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-[#39FF14]">Body & Mind</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">
            Join the most vibrant fitness community. Student-friendly memberships, expert guidance, and results that speak for themselves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-[#39FF14] text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#2DE00F] transition-all transform hover:scale-105"
            >
              Join Now
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#39FF14] text-[#39FF14] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#39FF14] hover:text-black transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-[#39FF14]">500+</div>
              <div className="text-neutral-400 mt-2">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#39FF14]">15+</div>
              <div className="text-neutral-400 mt-2">Expert Trainers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#39FF14]">4.9</div>
              <div className="text-neutral-400 mt-2">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-[#39FF14]">Programs</span>
            </h2>
            <p className="text-neutral-400 text-lg">Tailored training for every fitness goal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Dumbbell className="w-12 h-12" />,
                title: 'Strength Training',
                desc: 'Build raw power and functional strength with our progressive training protocols.'
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Cardio Training',
                desc: 'Boost endurance and cardiovascular health with dynamic cardio workouts.'
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Fat Loss',
                desc: 'Science-backed fat loss programs that preserve muscle and boost metabolism.'
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: 'Muscle Building',
                desc: 'Hypertrophy-focused training to maximize muscle growth and definition.'
              }
            ].map((program, idx) => (
              <div
                key={idx}
                className="bg-black border border-neutral-900 p-8 rounded-lg hover:border-[#39FF14] transition-all group"
              >
                <div className="text-[#39FF14] mb-4 group-hover:scale-110 transition-transform">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-neutral-400">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Success <span className="text-[#39FF14]">Stories</span>
            </h2>
            <p className="text-neutral-400 text-lg">Real transformations from real members</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Arjun K.', result: 'Lost 15kg in 4 months', quote: 'The trainers here understand student life. Flexible timings and amazing support!' },
              { name: 'Priya M.', result: 'Built lean muscle', quote: 'Finally found a gym that feels like family. The energy here is unmatched.' },
              { name: 'Rahul S.', result: 'Increased strength 40%', quote: 'Best decision I made in college. Student rates made it so accessible!' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-neutral-950 p-8 rounded-lg border border-neutral-900">
                <div className="text-[#39FF14] text-4xl mb-4">"</div>
                <p className="text-neutral-300 mb-6">{testimonial.quote}</p>
                <div className="border-t border-neutral-900 pt-4">
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-[#39FF14] text-sm mt-1">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Student-Friendly <span className="text-[#39FF14]">Pricing</span>
            </h2>
            <p className="text-neutral-400 text-lg">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '₹999',
                features: ['Gym Access', 'Locker Facility', 'Basic Equipment', '5 Days/Week'],
                popular: false
              },
              {
                name: 'Standard',
                price: '₹1,499',
                features: ['All Basic Features', 'Personal Trainer (2x/week)', 'Nutrition Guide', '7 Days/Week', 'Group Classes'],
                popular: true
              },
              {
                name: 'Pro',
                price: '₹2,499',
                features: ['All Standard Features', 'Personal Trainer (4x/week)', 'Custom Meal Plans', 'Priority Booking', 'Guest Pass (2x/month)'],
                popular: false
              }
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-black border rounded-lg p-8 ${
                  plan.popular ? 'border-[#39FF14] scale-105' : 'border-neutral-900'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#39FF14] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#39FF14]">{plan.price}</span>
                  <span className="text-neutral-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-neutral-300">
                      <span className="text-[#39FF14] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'bg-[#39FF14] text-black hover:bg-[#2DE00F]'
                      : 'border-2 border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get <span className="text-[#39FF14]">Started</span>
            </h2>
            <p className="text-neutral-400 text-lg">Visit us or drop a message. We're here to help!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-neutral-950 p-8 rounded-lg border border-neutral-900">
              <h3 className="text-2xl font-bold mb-6">Quick Inquiry</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Fitness Goal</label>
                  <select className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 focus:border-[#39FF14] focus:outline-none transition-colors">
                    <option>Select your goal</option>
                    <option>Weight Loss</option>
                    <option>Muscle Gain</option>
                    <option>General Fitness</option>
                    <option>Athletic Performance</option>
                  </select>
                </div>
                <button
                  onClick={() => alert('Form submission is UI only. Connect to your backend!')}
                  className="w-full bg-[#39FF14] text-black py-3 rounded-lg font-bold hover:bg-[#2DE00F] transition-all"
                >
                  Submit Inquiry
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-neutral-950 p-8 rounded-lg border border-neutral-900">
                <h3 className="text-2xl font-bold mb-6">Visit Us</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Address</div>
                      <div className="text-neutral-400">123 Fitness Street, University Area, City - 560001</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Timings</div>
                      <div className="text-neutral-400">Mon - Sat: 5:00 AM - 11:00 PM</div>
                      <div className="text-neutral-400">Sun: 6:00 AM - 9:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-neutral-400">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-[#39FF14] flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-neutral-400">hello@urbanfit.gym</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-900 rounded-lg overflow-hidden h-64">
                <div className="w-full h-full flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-[#39FF14]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Dumbbell className="w-6 h-6 text-[#39FF14]" />
            <span className="text-lg font-bold text-white">UrbanFit Gym</span>
          </div>
          <p>&copy; 2025 UrbanFit. Transform your body, elevate your life.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#39FF14] text-black p-4 rounded-full shadow-lg hover:bg-[#2DE00F] transition-all z-50 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;