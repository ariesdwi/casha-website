"use client";
import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Freelance Designer",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "Casha completely transformed how I manage my finances. I've saved over $5,000 in just 6 months by tracking my expenses and setting realistic budgets.",
    highlight: "Saved $5,000 in 6 months"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Software Engineer",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "The bill reminders feature saved me from late fees multiple times. The analytics helped me identify unnecessary subscriptions I was able to cancel.",
    highlight: "Eliminated late fees"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "College Student",
    image: "/api/placeholder/64/64",
    rating: 5,
    text: "As a student on a tight budget, this app has been a lifesaver. The goal tracking feature helped me save for my study abroad program.",
    highlight: "Achieved study abroad goal"
  },
  {
    id: 4,
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

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900 mb-4">
            Loved by Thousands of Users
          </h2>
          <p className="text-xl text-green-700 max-w-2xl mx-auto leading-relaxed">
            Join millions who have taken control of their financial future with Casha.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-200"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-green-200 flex-shrink-0 mt-1" />
                <div className="flex-1">
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

                  <p className="text-green-800 text-base lg:text-lg mb-6 leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-200 rounded-full mr-4 flex items-center justify-center">
                        <span className="text-green-800 font-semibold text-sm lg:text-base">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900 text-sm lg:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-green-700 text-xs lg:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-green-100 text-green-800 px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium">
                      {testimonial.highlight}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden relative">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 mx-auto max-w-2xl">
            <div className="flex items-start gap-4">
              <Quote className="w-10 h-10 text-green-200 flex-shrink-0 mt-1" />
              <div className="flex-1">
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

                <p className="text-green-800 text-base mb-6 leading-relaxed">
                  &quot;{testimonials[currentIndex].text}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-200 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-green-800 font-semibold text-sm">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 text-sm">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-green-700 text-xs">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-xs font-medium text-center">
                    {testimonials[currentIndex].highlight}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:bg-green-50 transition-all duration-200 border border-green-200 hover:border-green-300 active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-green-700" />
            </button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? "bg-green-600 w-4" 
                      : "bg-green-300 hover:bg-green-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-md hover:bg-green-50 transition-all duration-200 border border-green-200 hover:border-green-300 active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-green-700" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">50K+</div>
              <div className="text-green-700 text-sm lg:text-base">Active Users</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">4.9/5</div>
              <div className="text-green-700 text-sm lg:text-base">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">$10M+</div>
              <div className="text-green-700 text-sm lg:text-base">Saved by Users</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-green-900 mb-2">98%</div>
              <div className="text-green-700 text-sm lg:text-base">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
