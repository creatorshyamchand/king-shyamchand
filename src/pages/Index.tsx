
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { courses } from "@/data/courses";
import { Book, Mail, Phone } from "lucide-react";

const Index = () => {
  const [testimonials] = useState([
    {
      name: "Arpita Roy",
      class: "Advanced English",
      content: "Professor Das's teaching method helped me gain confidence in public speaking and writing.",
    },
    {
      name: "Rahul Kumar",
      class: "Foundation Course",
      content: "The foundation course was exactly what I needed to improve my basic English skills.",
    },
    {
      name: "Priya Sharma",
      class: "Advanced English",
      content: "The literature analysis techniques I learned have been invaluable in my academic journey.",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-academy-primary to-academy-secondary text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to English Academy</h1>
            <p className="text-xl mb-6">Learn English with Prof. Shyamchand Das</p>
            <p className="mb-8">
              Transform your English proficiency through personalized instruction and proven teaching methods.
              Join our comprehensive English courses designed for all skill levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button className="bg-white text-academy-primary hover:bg-academy-light">
                  View Courses
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-academy-primary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&h=600" 
              alt="English Education" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-academy-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&h=800" 
                alt="Prof. Shyamchand Das" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-academy-dark">About Prof. Shyamchand Das</h2>
              <p className="mb-4 text-gray-700">
                With over 12 years of experience in English education, Prof. Shyamchand Das has helped countless students 
                achieve their language learning goals through personalized instruction and innovative teaching methods.
              </p>
              <p className="mb-6 text-gray-700">
                Based in West Bengal, India, he specializes in making English learning accessible and enjoyable 
                for students of all levels, from beginners to advanced learners.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-2">
                    <Book className="text-academy-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-academy-primary text-xl">Expert Teacher</h3>
                  <p className="text-gray-600">12+ years experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-2">
                    <Mail className="text-academy-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-academy-primary text-xl">Personalized</h3>
                  <p className="text-gray-600">Individual attention</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="flex justify-center mb-2">
                    <Phone className="text-academy-primary" size={24} />
                  </div>
                  <h3 className="font-bold text-academy-primary text-xl">Always Available</h3>
                  <p className="text-gray-600">Dedicated support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-gray-600">Comprehensive English programs for all levels</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {courses.map((course) => (
              <CourseCard 
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                price={course.price}
                level={course.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-academy-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Students Say</h2>
            <p className="text-gray-600">Success stories from our students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="mb-4 text-gray-700 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.class}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-academy-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master English?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join Prof. Shyamchand Das's English Academy and embark on your journey to English proficiency.
          </p>
          <Link to="/courses">
            <Button className="bg-white text-academy-primary hover:bg-academy-light px-8 py-2">
              Enroll Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
