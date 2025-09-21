"use client";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "Casha completely transformed how I manage my finances. I've saved over $5,000 in just 6 months by tracking my expenses and setting realistic budgets.",
    highlight: "Saved $5,000 in 6 months"
  },
  {
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "The bill reminders feature saved me from late fees multiple times. The analytics helped me identify unnecessary subscriptions I was able to cancel.",
    highlight: "Eliminated late fees"
  },
  {
    name: "Emily Rodriguez",
    role: "College Student",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "As a student on a tight budget, this app has been a lifesaver. The goal tracking feature helped me save for my study abroad program.",
    highlight: "Achieved study abroad goal"
  },
  {
    name: "David Kim",
    role: "Small Business Owner",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "I use Casha for both personal and business expenses. The category system is incredibly flexible and the reports are exactly what I need for tax season.",
    highlight: "Simplified tax preparation"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Loved by Thousands of Users
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            Join millions who have taken control of their financial future with Casha.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100"
            >
              <Quote className="w-12 h-12 text-green-200 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-green-800 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-200 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-green-800 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">{testimonial.name}</h4>
                  <p className="text-green-700 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                {testimonial.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <Quote className="w-12 h-12 text-green-200 mb-4" />
            
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < testimonials[currentIndex].rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-green-800 text-lg mb-6 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-200 rounded-full mr-4 flex items-center justify-center">
                <span className="text-green-800 font-semibold">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-green-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-green-700 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
              {testimonials[currentIndex].highlight}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white rounded-full shadow-md hover:bg-green-50 transition-colors border border-green-200"
            >
              <ChevronLeft className="w-5 h-5 text-green-700" />
            </button>
            <div className="flex items-center gap-1">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-green-600" : "bg-green-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-white rounded-full shadow-md hover:bg-green-50 transition-colors border border-green-200"
            >
              <ChevronRight className="w-5 h-5 text-green-700" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">5M+</div>
            <div className="text-green-700">Active Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">$2B+</div>
            <div className="text-green-700">Tracked Monthly</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4.8/5</div>
            <div className="text-green-700">App Store Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-green-700">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}